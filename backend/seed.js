const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const seedAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        // Check if admin exists
        const adminExists = await User.findOne({ email: 'admin@soundthesis.com' });
        if (adminExists) {
            console.log('Admin already exists');
            process.exit();
        }

        const admin = new User({
            name: 'Admin',
            email: 'admin@soundthesis.com',
            password: 'adminpassword123' // Change this immediately!
        });

        await admin.save();
        console.log('Admin user created successfully');
        console.log('Email: admin@soundthesis.com');
        console.log('Password: adminpassword123');
        process.exit();
    } catch (error) {
        console.error('Error seeding admin:', error);
        process.exit(1);
    }
};

seedAdmin();
