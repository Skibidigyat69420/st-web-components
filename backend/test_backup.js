const mongoose = require('mongoose');
const { backupDatabase } = require('./utils/dbBackup');
require('dotenv').config();

const testBackup = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27019/st-main');
        console.log('Connected to DB');
        await backupDatabase();
        console.log('Backup finished');
        process.exit(0);
    } catch (err) {
        console.error('Test failed', err);
        process.exit(1);
    }
}

testBackup();
