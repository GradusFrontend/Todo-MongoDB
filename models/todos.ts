import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please write your todo name!'],
        unique: false,
        trim: true,
    },
    desc: {
        type: String,
        required: [true, 'Please write your description!'],
        unique: false,
        trim: true
    }
})


export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema)