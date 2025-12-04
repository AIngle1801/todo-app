const express = require('express');
const mongoose = require('mongoose')
const {createTodo, updateTodo} = require('./type')
const {Todo} = require('../backend/db/index') 
const cors= require('cors')
const app = express()
const bodyParser = require('body-parser');
app.use(cors());

const port = 3000
app.use(express.json());
app.get('/todos',async (req,res)=>{
    const response = await Todo.find({})
    console.log(response)
    res.status(200).json({
        'todo':response
    })
})

app.post('/todo', async (req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const response = await Todo.create({
        title,
        description,
        status
    })
    res.status(200).json({
        'msg':'todo created successfully'
    })
})

app.listen(port, ()=>{
    console.log("server runnign")
})

