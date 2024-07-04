import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*Ggt-XwliwAO6QURi.jpg"
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;