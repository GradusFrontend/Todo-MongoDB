import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please write your name!'],
        unique: false,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please write your email!'],
        unique: true,
        trim: true
    }
})


export default mongoose.models.User || mongoose.model('User', UserSchema)