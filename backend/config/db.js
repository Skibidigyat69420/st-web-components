const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const path = require('path');
const fs = require('fs');

let mongoServer;

const connectDB = async (retryCount = 0) => {
    // If already connected, just return
    if (mongoose.connection.readyState === 1) {
        return;
    }

    try {
        if (process.env.NODE_ENV === 'development' && !process.env.MONGODB_URI.startsWith('mongodb+srv')) {
            const dbPath = path.join(process.env.TEMP || 'C:\\temp', 'st-db-stable');
            if (!fs.existsSync(dbPath)) {
                fs.mkdirSync(dbPath, { recursive: true });
            }

            // Cleanup lock file if it exists (only if we're starting fresh)
            if (!global.__MONGO_SERVER__) {
                const lockFile = path.join(dbPath, 'mongod.lock');
                if (fs.existsSync(lockFile)) {
                    try { fs.unlinkSync(lockFile); } catch (e) { }
                }

                console.log(`📡 Starting MongoMemoryServer...`);
                try {
                    global.__MONGO_SERVER__ = await MongoMemoryServer.create({
                        instance: {
                            port: 27019,
                            // Use ephemeral storage (default) for maximum stability on Windows
                            dbPath: dbPath
                        },
                        spawn: { timeout: 120000 }
                    });
                    console.log('🚀 MongoMemoryServer started on port 27019');
                } catch (err) {
                    console.warn(`⚠️ Port 27019 busy or failed, falling back to random port.`);
                    global.__MONGO_SERVER__ = await MongoMemoryServer.create({
                        instance: { dbPath: dbPath },
                        spawn: { timeout: 120000 }
                    });
                }
            }

            const uri = global.__MONGO_SERVER__.getUri();
            
            // Connection options for maximum stability
            const options = {
                dbName: 'st-main',
                connectTimeoutMS: 30000,
                serverSelectionTimeoutMS: 30000,
                socketTimeoutMS: 45000,
                heartbeatFrequencyMS: 2000, // Faster heartbeats
                family: 4,
                maxPoolSize: 10
            };

            console.log(`🔗 Connecting to: ${uri}`);
            await mongoose.connect(uri, options);
            console.log(`✅ MongoDB Connected`);

            // Event listeners
            mongoose.connection.on('error', err => {
                console.error('❌ Mongoose Connection Error:', err);
            });

            mongoose.connection.on('disconnected', () => {
                console.log('⚠️ Mongoose disconnected. Waiting for auto-reconnect...');
            });

        } else {
            console.log('🔗 Connecting to Production MongoDB...');
            await mongoose.connect(process.env.MONGODB_URI);
            console.log(`✅ Production MongoDB Connected`);
        }
    } catch (error) {
        console.error(`❌ DB Connection Failed: ${error.message}`);
        if (retryCount < 5) {
            const delay = 3000 * (retryCount + 1);
            console.log(`🔄 Retrying in ${delay/1000}s...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return connectDB(retryCount + 1);
        }
        process.exit(1);
    }
};

module.exports = connectDB;
