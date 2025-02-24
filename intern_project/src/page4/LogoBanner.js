import React from "react";
import  {Box}  from "@mui/material";
import logo from "./LogoBanner.png"
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import logo4 from "./Logo-4.png";
import logo5 from "./logo5.png";
import logo6 from "./Logo6.png";
import logo7 from "./logo7.png";



const LogoBanner = () => {
  return (
   <Box sx={{border: "1px solid #E7DAED"}}>
    <Box display="flex" flexDirection="row" justifyContent={'space-between'}  alignContent={"center"}>
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
