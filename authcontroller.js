const User = require('./model');

async function register(req, res) {
    try {
        const { UserID, Password, Role } = req.body;

        const existingUserID = await User.findOne({ UserID });
        if (existingUserID) {
            return res.status(400).json({ message: 'UserID already taken' });
        }

        const newUser = new User({ UserID, Password, Role });
        await newUser.save();

        res.status(200).json({ message: 'User registered successfully', newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
}

async function login(req, res) {
    try {
        const { UserID, Password, Role } = req.body; // Now includes Role

        const user = await User.findOne({ UserID });
        if (!user || user.Password !== Password || user.Role !== Role) {
            return res.status(400).json({ message: 'Invalid UserID, password, or role' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
}

module.exports = { login, register };
