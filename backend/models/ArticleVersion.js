const mongoose = require('mongoose');

const articleVersionSchema = new mongoose.Schema({
    documentId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        description: 'Reference to the original Article or Draft ID'
    },
    documentModel: {
        type: String,
        required: true,
        enum: ['Article', 'Draft'],
        description: 'Whether this version belongs to an Article or a Draft'
    },
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true
    },
    content: {
        type: String,
        required: [true, 'Please add content']
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: false
    },
    status: {
        type: String,
        enum: ['Draft', 'Published'],
        default: 'Draft'
    },
    versionType: {
        type: String,
        enum: ['autosave', 'manual_save'],
        default: 'autosave'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create a compound index to allow querying versions by document easily
articleVersionSchema.index({ documentId: 1, createdAt: -1 });

module.exports = mongoose.models.ArticleVersion || mongoose.model('ArticleVersion', articleVersionSchema);
