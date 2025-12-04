import {TodoComponent} from './component/TodoComponent'
import './App.css'
import Paper from '@mui/material/Paper';


function App() {
  return (
    <>
      <Paper ariant="elevation1" sx={{p: 2 }}>
        <TodoComponent />
      </Paper>
    </>
  )
}

export default App
