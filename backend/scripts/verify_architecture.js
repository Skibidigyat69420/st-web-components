const axios = require('axios');

const API_URL = 'http://localhost:5000/api';
let token = '';

async function runTests() {
    console.log('🚀 Starting API Verification Tests...');

    try {
        // 1. Login to get token
        console.log('\n--- 1. Login ---');
        const loginRes = await axios.post(`${API_URL}/auth/login`, {
            email: 'admin@soundthesis.com',
            password: 'admin123'
        });
        token = loginRes.data.token;
        console.log('✅ Login successful');

        const headers = { Authorization: `Bearer ${token}` };

        // 2. Fetch Categories
        console.log('\n--- 2. Fetch Categories ---');
        const catsRes = await axios.get(`${API_URL}/categories`);
        const categoryId = catsRes.data.data[0]._id;
        console.log(`✅ Found category: ${catsRes.data.data[0].name} (${categoryId})`);

        // 3. Test Zod Validation (Invalid Create)
        console.log('\n--- 3. Test Zod Validation ---');
        try {
            await axios.post(`${API_URL}/articles`, { title: 'Hi' }, { headers });
        } catch (err) {
            console.log(`✅ Zod caught short title: ${err.response.data.error}`);
        }

        // 4. Create Article
        console.log('\n--- 4. Create Article ---');
        const newArticle = {
            title: 'Test Architecture Article ' + Date.now(),
            content: 'This is a long enough content for the test article to pass Zod validation.',
            category: categoryId,
            status: 'Draft'
        };
        const createRes = await axios.post(`${API_URL}/articles`, newArticle, { headers });
        const articleId = createRes.data.data._id;
        console.log(`✅ Article created with ID: ${articleId}`);

        // 5. Update Article (Promotion to Published)
        console.log('\n--- 5. Update Article (Draft -> Published) ---');
        const updateRes = await axios.put(`${API_URL}/articles/${articleId}`, { status: 'Published' }, { headers });
        console.log(`✅ Article updated status to: ${updateRes.data.data.status}`);

        // 6. Delete Article
        console.log('\n--- 6. Delete Article ---');
        await axios.delete(`${API_URL}/articles/${articleId}`, { headers });
        console.log('✅ Article deleted successfully');

        console.log('\n🎉 All backend verification tests passed!');
    } catch (err) {
        console.error('\n❌ Verification Failed:', err.response?.data || err.message);
        process.exit(1);
    }
}

runTests();
