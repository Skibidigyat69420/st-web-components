const mongoose = require('mongoose');

const draftsConnection = mongoose.createConnection();

const connectDraftsDB = async () => {
    const uri = process.env.MONGODB_DRAFTS_URI || 'mongodb://127.0.0.1:27017/sound-thesis-drafts';
    try {
        await draftsConnection.openUri(uri);
        console.log(`Drafts MongoDB Connected: ${draftsConnection.host}`);
    } catch (err) {
        console.error('Drafts DB Connection Error:', err);
    }
};

module.exports = { connectDraftsDB, draftsConnection };
