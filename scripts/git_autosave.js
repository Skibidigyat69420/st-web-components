const { exec } = require('child_process');
const path = require('path');

const CHECK_INTERVAL = 15 * 60 * 1000; // 15 minutes
const ROOT_DIR = path.resolve(__dirname, '..');

function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, { cwd: ROOT_DIR }, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout.trim());
        });
    });
}

async function startAutosave() {
    console.log(`[${new Date().toLocaleString()}] Git Autosave Service Started.`);
    console.log(`Checking for changes every ${CHECK_INTERVAL / 60000} minutes in: ${ROOT_DIR}`);

    while (true) {
        try {
            // Check for changes
            const status = await runCommand('git status --porcelain');

            if (status) {
                console.log(`[${new Date().toLocaleString()}] Changes detected. Performing autosave...`);

                await runCommand('git add .');
                const timestamp = new Date().toLocaleString();
                const commitMsg = `Autosave: ${timestamp}`;

                await runCommand(`git commit -m "${commitMsg}"`);
                console.log(`[${new Date().toLocaleString()}] Committed: ${commitMsg}`);

                try {
                    await runCommand('git push');
                    console.log(`[${new Date().toLocaleString()}] Pushed to remote.`);
                } catch (pushErr) {
                    console.error(`[${new Date().toLocaleString()}] Push failed. Will retry later.`, pushErr.message);
                }
            } else {
                // No changes
            }
        } catch (err) {
            console.error(`[${new Date().toLocaleString()}] Autosave loop error:`, err.message);
        }

        await new Promise(resolve => setTimeout(resolve, CHECK_INTERVAL));
    }
}

startAutosave();
