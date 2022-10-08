import React from 'react'
import './styles2.css'
import Image from './logo2.png'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import TextField from '@mui/material/TextField';

export default function Sign(){
  const variants1 = {
    anim : {
        opacity : 1,
        transition : {
            delay : 1, 
            duration : 0.5, 
        }
    }

}
  return(
    <motion.div className='container' initial = {{opacity : 0}} animate = {{opacity : 1}} exit = {{opacity : 0}}>
    <div className='logos'>
    {/* <img src = {Image} className = "logo"></img> */}
    <h1><span>Recal</span></h1>
    </div>

        <motion.h1 variants={variants1} exit={{opacity : 0}} initial ={{opacity:0}} animate="anim" className='weltext'>Good to see you again</motion.h1>

    
       <motion.div className='mainc' exit={{opacity:0}} initial = {{y : '100vw'}} animate = {{y : 0}}>

          <h2><span>Login</span></h2>
          Your email
          <input type="email" placeholder='Email' />
          <br />
          Your password
          <input type="password" placeholder='Password' />
          {/* <table>
          <tr><td><label>Enter Email</label></td>
          <td><input type="email" /></td></tr>
          <tr><td><label>Enter Password</label></td>
          <td><input type="password" /></td></tr>
          </table> */}
          
          <br />
          
          <Link to="/basedat"><button className='button-24'>Login</button></Link>
          
       </motion.div>
    </motion.div>
  )
}