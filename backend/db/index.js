const mongoose = require('mongoose');

//url will be here 

const UserTask = new mongoose.Schema({
    title:String,
    description:String,
    status:String
});

const Todo = mongoose.model('Todo',UserTask);

module.exports = {
    Todo
}