const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Arjun:TestPass123@cluster0.dp4uq.mongodb.net/Todo');

const UserTask = new mongoose.Schema({
    title:String,
    description:String,
    status:String
});

const Todo = mongoose.model('Todo',UserTask);

module.exports = {
    Todo
}