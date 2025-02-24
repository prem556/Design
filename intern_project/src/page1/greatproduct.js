import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const GreatProduct = () =>{
    return(
        <Box>

        {/* main */}
        <Box display={"flex"}flexDirection={"row"} justifyContent={"space-between"}>

        {/* leftside */}
        <Box>
        <Box>
            <Typography>
            Great<Typography>Product</Typography>
            is 
            <Typography>built by great </Typography> 
            <Typography>teams</Typography>
            </Typography>
            
        </Box>
        </Box>

        {/* rightside */}
        <Box></Box>

        </Box>

        </Box>
    )
}

export default GreatProduct;