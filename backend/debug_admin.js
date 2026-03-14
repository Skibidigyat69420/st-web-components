const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const checkAdmin = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27019/st-main');
        console.log('Connected to DB');
        const user = await User.findOne({ email: 'admin@soundthesis.com' }).select('+password');
        if (user) {
            console.log('Admin user found:', user.email);
            console.log('Password hash present:', !!user.password);
            const isMatch = await user.matchPassword('admin123');
            console.log('Password match test (admin123):', isMatch);
        } else {
            console.log('Admin user NOT found');
        }
        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
};

checkAdmin();
