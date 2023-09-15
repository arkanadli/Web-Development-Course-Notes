const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.authUser = async function (username, password) {
    const user = await this.findOne({ username });
    if (!user) {
        return false;
    }
    const checkPass = await bcrypt.compare(password, user.password);
    if (checkPass) {
        return user;
    }
}

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return next() // if the current password is not moddified , we will not hash the password
    const hash = await bcrypt.hash(this.password, 12);
    this.password = hash;
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;