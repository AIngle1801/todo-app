import { useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



import {TodoCard} from './TodoCard'
export function TodoComponent(){
    const[todo, setTodo]= useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/todos')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            console.log(data.todo)
            setTodo(data.todo)
        })
    },[handleAddTodo])

    const [title, setTitle] = useState("")
    const [description, setDescription]= useState("")
    const [status, setStatus]= useState("")

    function  handleAddTodo(){
        const new_todo ={
            title: title,
            description:description,
            status:status
        }
        console.log(new_todo)

        fetch('http://localhost:3000/todo',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(new_todo)
        })
        .then((response)=>{
            return response.json()
        })
        .then((res)=>{
            console.log("toodo added")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>  
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: "center" }}>
                    <Typography sx={{ textAlign: "center",mb:1 }}variant="h2" fontWeight="bold" color="textPrimary">Todo List</Typography>
                </Toolbar>
            </AppBar>
            <Paper variant="elevation3"sx={{p: 2, display:'flex',flexDirection:'row',gap:2 ,flexWrap: "wrap"}} >
            {todo.map((todos)=>{
                            return <TodoCard key={todos.title} title={todos.title} description={todos.description} 
                            status={todos.status} />
            })}
            </Paper>
            <Paper variant="elevation3"sx={{p: 2, display:'flex',flexDirection:'row',gap:2 ,flexWrap: "wrap", border:'2px solid black',justifyContent: "center"}} >
                <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e)=>{setTitle(e.target.value)}} />
                <TextField
                    id="outlined-textarea"
                    label="Description"
                    placeholder="Description"
                    onChange={(e)=>{setDescription(e.target.value)}}
                    multiline
                />
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    autoWidth
                    label="Status"
                    value={status}
                    onChange={(e)=>{setStatus(e.target.value)}}
                >
                    <MenuItem value=    "done" >done</MenuItem>
                    <MenuItem value="not done" >Not Done</MenuItem>
                    
                </Select>
                <Stack sx={{ justifyContent: "center" }} direction="row" spacing={2}>
                            <Button variant="outlined" size="small" color="primary" onClick={handleAddTodo}>Add todo</Button>
                </Stack>
            </Paper>
        </>
    )
}