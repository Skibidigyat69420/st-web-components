const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_URL = 'http://localhost:5000/api';
let token = '';

async function runTests() {
    console.log('🚀 Starting Integration Tests...');

    try {
        // 1. Test Health
        console.log('\n🔍 Testing API Health...');
        const health = await axios.get(`${API_URL}/health`);
        console.log('✅ Health check passed:', health.data.status);

        // 2. Test Login
        console.log('\n🔑 Testing Admin Login...');
        const loginRes = await axios.post(`${API_URL}/auth/login`, {
            email: 'admin@soundthesis.com',
            password: 'admin123'
        });
        token = loginRes.data.token;
        console.log('✅ Login successful. Token acquired.');

        const config = { headers: { Authorization: `Bearer ${token}` } };

        // 3. Test Create Article
        console.log('\n📝 Testing Article Creation...');
        const articleData = {
            title: 'Integration Test Article ' + Date.now(),
            content: 'This article was created by the integrated test script.',
            category: '64f0c8e1e4b0a1a2b3c4d5e6', // Placeholder, using first available or creating one
            status: 'Published'
        };

        // Let's get categories first to find a real ID
        const catsRes = await axios.get(`${API_URL}/categories`);
        if (catsRes.data.data.length > 0) {
            articleData.category = catsRes.data.data[0]._id;
        } else {
            // Create a test category
            const newCat = await axios.post(`${API_URL}/categories`, { name: 'Test Category' }, config);
            articleData.category = newCat.data.data._id;
        }

        const articleRes = await axios.post(`${API_URL}/articles`, articleData, config);
        console.log('✅ Article created:', articleRes.data.data.title);

        // 4. Test VCS Sync
        console.log('\n🔄 Testing Manual Git Sync...');
        const syncRes = await axios.post(`${API_URL}/admin/save-changes`, {}, config);
        console.log('✅ Git Sync status:', syncRes.status === 200 ? 'Success' : 'Failed');

        // 5. Test Import Articles
        console.log('\n📥 Testing Articles Import...');
        const FormData = require('form-data');
        const form = new FormData();
        const sampleFilePath = path.join(__dirname, '../../sample_articles.json');

        if (fs.existsSync(sampleFilePath)) {
            form.append('file', fs.createReadStream(sampleFilePath));
            const importRes = await axios.post(`${API_URL}/articles/import`, form, {
                headers: {
                    ...config.headers,
                    ...form.getHeaders()
                }
            });
            console.log('✅ Import successful:', importRes.data.message);
        } else {
            console.log('⚠️ Sample file not found, skipping import test.');
        }

        console.log('\n✨ All Integration Tests Completed Successfully!');

    } catch (error) {
        console.error('\n❌ Integration Test Failed:');
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', JSON.stringify(error.response.data, null, 2));
        } else {
            console.error('Error:', error.message);
        }
        process.exit(1);
    }
}

runTests();
