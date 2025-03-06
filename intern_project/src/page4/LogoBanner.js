import React from "react";
import { Box } from "@mui/material";
import logo from "./LogoBanner.png"
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import logo4 from "./Logo-4.png";
import logo5 from "./logo5.png";
import logo6 from "./Logo6.png";
import logo7 from "./logo7.png";
import image2 from '../page1/img2.png'



const LogoBanner = () => {
  return (
    <Box>
         <Box  sx={{
          position: 'absolute',
          left: '60%',
          
          transform: 'translate(-30%, -100%)', 
          width: 100,
          height: 50,
          backgroundImage: `url(${image2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          overflow: 'hidden'
        }}>

    </Box>
      <Box sx={{ border: "1px solid #E7DAED" }}> </Box>
      <Box display="flex" flexDirection="row" justifyContent={'space-between'} alignContent={"center"}>
        <Box><img src={logo}></img></Box>
        <Box><img src={logo2}></img></Box>
        <Box><img src={logo3}></img></Box>
        <Box><img src={logo4}></img></Box>
        <Box><img src={logo5}></img></Box>
        <Box><img src={logo6}></img></Box>
        <Box><img src={logo7}></img></Box>
      </Box>
 
    </Box>
  );
};

export default LogoBanner;
