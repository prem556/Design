import React from "react";
import T from './icon.png'
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import GreatProduct from "./greatproduct";




const Header  = () =>{
    return(
       <Box>
        <AppBar>
        <Toolbar sx={{ height: '79px',backgroundColor:'white'}}>
          <img src={T}/>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              color:'#4A5568',
              marginLeft:'10px'
            }}
            variant="h3"
            component="div"
          >
           Ik developers
          </Typography>

          {/* list in header */}
          <Box sx={{color:'#4A5568',display:'flex',flexDirection:'row',alignSelf:'center',justifyContent:"space-between",ml:'auto',width:'50%',fontSize:'15px'}}>
            <ListItem sx={{  transition: ' 0.3s', "&:hover": { color: 'lightpink', } }}>About Us</ListItem>
            <ListItem sx={{  transition: ' 0.3s', "&:hover": { color: 'lightblue' } }}>Services</ListItem>
            <ListItem sx={{  transition: ' 0.3s', "&:hover": { color: 'lightgreen' } }}>Case Studies</ListItem>
            <ListItem sx={{  transition: ' 0.3s', "&:hover": { color: 'lightgreen' } }}>Blog</ListItem>
            <ListItem sx={{  transition: ' 0.3s', "&:hover": { color: 'lightgreen' } }}>How it Works</ListItem>
            <ListItem sx={{  transition: ' 0.3s', "&:hover": { color: 'lightgreen' } }}>Hire</ListItem>
          </Box>

          {/* header Button */}
            <Button  
          
            variant='contained' sx={{ marginLeft: 'auto', backgroundColor: 'blue' }} color="inherit">
              Contact Us
            </Button>
        </Toolbar>
      </AppBar>
      
        
       </Box>
    )
}

export default Header;