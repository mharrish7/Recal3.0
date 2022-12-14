import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'


export default function Basedat(){

    var data = ['Name', 'Branch' ,'Spouse', 'City' , 'Country' , 'Region' , 'Mobile' , 'Email' , 'T-Shirt Size' ];
    const mystyle = {
        width : 'fit-content',
        padding : '1rem',
      };

      const variants1 = {
        anim : {
            opacity : 1,
            transition : {
                delay : 0.6, 
                duration : 0.5, 
            }
        }

    }
    return(
        <>
        <motion.div className='center' variants={variants1} exit={{x:'100vw'}} initial ={{opacity:0}} animate="anim" >
            <TableContainer component={Paper} style = {mystyle} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Base Data</TableCell>
                        <TableCell >Details</TableCell>
                        <TableCell >Change by Alumni</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map(dat => (
                        <TableRow>
                            <TableCell >{dat}</TableCell>
                            <TableCell>as per Base Data</TableCell>
                            <TableCell><TextField size = "small" id="outlined-basic" label={dat} variant="outlined" /></TableCell>
                        </TableRow>
                    )
                    )}
                    </TableBody>
                </Table>
                

                </TableContainer>

                <br />
                <div className='center'>
                <Stack direction="row" spacing={2} style = {{padding : '1rem'}} align = 'center' divider={<Divider orientation="vertical" flexItem />} component = {Paper}>
                <Button size="large" variant="contained" color="success">
                    Register
                </Button>
                <Button size="large" variant="contained" color="error">
                    Not interested
                </Button>
                <Button size="large" variant="contained" color="warning">
                    Cannot Say now
                </Button>
                
                </Stack>
                </div>
                <br />
                <br />
                <div className='center'>
                <Stack direction="row" spacing={2} style = {{padding : '1rem'}} align = 'center' divider={<Divider orientation="vertical" flexItem />} component = {Paper}>
                <Button size="large" variant="contained" >
                    Save
                </Button>
                <Link to="/accomodation"><Button size="large" variant="contained" >
                    Next
                </Button></Link>
                
                <Button size="large" variant="contained" >
                    Edit previous login
                </Button>
                
                </Stack>
                </div>
        </motion.div>
        </>
    )
}