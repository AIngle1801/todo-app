import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
export function TodoCard(props){
    return(
        <>
            <Box  sx={{ mb: 2, p: 2, borderRadius: 3,border: '1px solid #ccc',height:150,width:350 }} >
                <CardContent>
                    <Typography variant="h5" fontWeight="bold" color="textPrimary">{props.title} </Typography>
                    <Typography variant="body2" color="text.secondary">{props.description} </Typography>
                    <Chip color={props.status=="done"?"success":"warning"} label={props.status} sx={{ mb: 1 }}>Status</Chip>
                    <Stack direction="row" spacing={2}>
                        <Button variant="outlined" size="small" color="primary">Edit</Button>
                        <Button variant="outlined" size="small" color="error">Delete</Button>
                        <Button variant="outlined" size="small" color="success" onClick={()=>handleDone(props.status)}>Mark As Done</Button>
                    </Stack>
                </CardContent>
                
            </Box>
        </>
    )
}