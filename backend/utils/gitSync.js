const { exec } = require('child_process');
const path = require('path');
const { backupDatabase } = require('./dbBackup');

const projectRoot = path.join(__dirname, '../..'); // Adjust to repo root
const HOURLY_INTERVAL = 60 * 60 * 1000; // 1 hour

const syncQueue = [];
let isSyncing = false;

const processQueue = async () => {
    if (isSyncing || syncQueue.length === 0) return;

    isSyncing = true;
    const { message, resolve, reject, retries } = syncQueue[0];

    console.log(`\n🚀 [VCS] Processing Sync: "${message}" (${retries} retries left)`);

    exec(`git add . && git commit -m "${message}" && git push`,
        { cwd: projectRoot, timeout: 30000 },
        (error, stdout, stderr) => {
            const combinedOutput = (stdout + stderr).toLowerCase();

            if (error) {
                if (combinedOutput.includes('index.lock') && retries > 0) {
                    console.warn(`⚠️ [VCS] Git index locked. Retrying in 2s...`);
                    isSyncing = false;
                    syncQueue[0].retries--;
                    setTimeout(processQueue, 2000);
                    return;
                }

                if (combinedOutput.includes('nothing to commit') || combinedOutput.includes('up-to-date')) {
                    console.log('✅ [VCS] Status: No changes to sync.');
                    syncQueue.shift();
                    isSyncing = false;
                    resolve();
                    processQueue();
                } else if (combinedOutput.includes('failed to push') || combinedOutput.includes('rejected')) {
                    console.error('⚠️ [VCS] Push failed. Attempting rescue pull...');
                    exec(`git pull --rebase && git push`, { cwd: projectRoot }, (err2) => {
                        isSyncing = false;
                        syncQueue.shift();
                        if (err2) {
                            console.error('❌ [VCS] Emergency recovery failed:', err2.message);
                            reject(err2);
                        } else {
                            console.log('✅ [VCS] Recovery successful! Synced.');
                            resolve();
                        }
                        processQueue();
                    });
                } else {
                    console.error(`❌ [VCS] Git command failed: ${error.message}`);
                    isSyncing = false;
                    syncQueue.shift();
                    reject(error);
                    processQueue();
                }
                return;
            }

            console.log('✅ [VCS] Successfully synced changes!');
            isSyncing = false;
            syncQueue.shift();
            resolve();
            processQueue();
        }
    );
};

const syncToGit = (message = "Auto-commit: Update") => {
    return new Promise((resolve, reject) => {
        syncQueue.push({ message, resolve, reject, retries: 5 });
        processQueue();
    });
};

const saveAndSync = (message) => {
    // Run in background to avoid blocking API response
    backupDatabase().then(backupStatus => {
        if (backupStatus) {
            syncToGit(message);
        }
    }).catch(err => {
        console.error('❌ Save and Sync failed:', err);
    });
};

// The hourly sync is removed here to prevent collision with manual syncs and the global autosave script.
// We rely on manual saveAndSync from controllers and the main git_autosave.js script.
if (require.main === module) {
    console.log('🕚 gitSync.js module loaded (intervals disabled to avoid locks).');
}

module.exports = { syncToGit, saveAndSync };
