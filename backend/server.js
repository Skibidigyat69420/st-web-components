const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const fs = require('fs');
require('dotenv').config();
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const { ARTICLES_DIR } = require('./utils/articleScanner');

// Define helpers
const seedAdmin = async () => {
    const User = require('./models/User');
    const existing = await User.findOne({ email: 'admin@soundthesis.com' });
    if (!existing) {
        await User.create({ name: 'Admin', email: 'admin@soundthesis.com', password: 'admin123' });
        console.log('Admin seeded → admin@soundthesis.com / admin123');
    }
};

const restoreFromBackup = async () => {
    const fs = require('fs');
    const path = require('path');
    const backupDir = path.join(__dirname, 'data_backup');

    if (!fs.existsSync(backupDir)) return;

    try {
        const Article = require('./models/Article');
        const Category = require('./models/Category');
        const Lead = require('./models/Lead');
        const Draft = require('./models/Draft');
        const ArticleVersion = require('./models/ArticleVersion');

        const loadCollection = async (Model, folderName) => {
            const folderPath = path.join(backupDir, folderName);
            if (!fs.existsSync(folderPath)) return;

            if (await Model.countDocuments() === 0) {
                const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.json'));
                const documents = [];
                files.forEach(file => {
                    try {
                        const content = fs.readFileSync(path.join(folderPath, file), 'utf8');
                        documents.push(JSON.parse(content));
                    } catch (e) { }
                });

                if (documents.length > 0) {
                    await Model.insertMany(documents);
                    console.log(`Restored ${documents.length} records into ${folderName} from backup.`);
                }
            }
        };

        await loadCollection(Article, 'articles');
        await loadCollection(Category, 'categories');
        await loadCollection(Lead, 'leads');
        await loadCollection(Draft, 'drafts');
        await loadCollection(ArticleVersion, 'versions');

    } catch (err) {
        console.error('Failed to restore from backup:', err);
    }
};

const app = express();
const PORT = process.env.PORT || 5000;

// Rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 100
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(limiter);

// Routes
app.use('/api/contact', require('./routes/contacts'));
app.use('/api/auth', require('./routes/admin/auth'));
app.use('/api/admin', require('./routes/admin/utility'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/articles', require('./routes/articles'));
app.use('/api/file-articles', require('./routes/fileArticles'));
app.use('/api/leads', require('./routes/leads'));
app.use('/api/drafts', require('./routes/drafts'));
app.use('/api/versions', require('./routes/versions'));

// Static folder for uploads
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.get('/api/health', (req, res) => {
    const dbStatus = (mongoose.connection.readyState === 1) ? 'connected' : 'disconnected';
    res.status(dbStatus === 'connected' ? 200 : 503).json({
        status: dbStatus === 'connected' ? 'healthy' : 'unhealthy',
        database: dbStatus,
        timestamp: new Date().toISOString()
    });
});

// Basic error handler
app.use((err, req, res, next) => {
    console.error('🔥 GLOBAL ERROR HANDLER:', err.stack || err);
    res.status(500).json({ success: false, error: 'Internal server error', details: err.message });
});

// Start Database then start listening
// Ensure file-articles directory exists
if (!fs.existsSync(ARTICLES_DIR)) {
    fs.mkdirSync(ARTICLES_DIR, { recursive: true });
    console.log('📂 Created articles directory at:', ARTICLES_DIR);
}

connectDB().then(async () => {
    console.log('🔄 Initializing database state...');
    try {
        await restoreFromBackup();
        console.log('✅ Restoration complete (or skipped if not needed)');
        await seedAdmin();
        console.log('✅ Admin seeding complete (or skipped if exists)');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error('❌ Database Initialization Error:', err);
        process.exit(1);
    }
});
