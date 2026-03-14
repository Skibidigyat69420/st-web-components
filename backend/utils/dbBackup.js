const fs = require('fs');
const path = require('path');
const Article = require('../models/Article');
const Category = require('../models/Category');
const Lead = require('../models/Lead');
const Draft = require('../models/Draft');

const backupDir = path.join(__dirname, '../data_backup');

const backupDatabase = async () => {
    try {
        if (!fs.existsSync(backupDir)) {
            fs.mkdirSync(backupDir, { recursive: true });
        }

        const ArticleVersion = require('../models/ArticleVersion');

        const [articles, categories, leads, drafts, versions] = await Promise.all([
            Article.find().lean(),
            Category.find().lean(),
            Lead.find().lean(),
            Draft.find().lean(),
            ArticleVersion.find().lean()
        ]);

        const saveCollection = (name, data) => {
            const dir = path.join(backupDir, name);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

            // Instead of deleting, we overwrite existing or add new ones to act as a proper local VCS
            data.forEach(item => {
                const id = item._id ? item._id.toString() : item.slug;
                if (id) {
                    fs.writeFileSync(path.join(dir, `${id}.json`), JSON.stringify(item, null, 2));
                }
            });
        };

        saveCollection('articles', articles);
        saveCollection('categories', categories);
        saveCollection('leads', leads);
        saveCollection('drafts', drafts);
        saveCollection('versions', versions);

        console.log('✅ Multi-Database granular backup (individual files) completed successfully.');
        return true;
    } catch (error) {
        console.error('❌ Multi-Database backup failed:', error);
        return false;
    }
};

module.exports = { backupDatabase };
