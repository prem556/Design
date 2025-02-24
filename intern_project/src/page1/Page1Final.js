import React from "react";
import Header from "./header";
// import { Box } from "@mui/system";
import GreatProduct from "./greatproduct";
import T from './icon.png'
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import image from './img1.png';
import image2 from './img2.png';
import { height, positions, width } from "@mui/system";

const Page1Final = () => {
    return (
        <Box sx={{ height: 'auto', display: 'flex', flexDirection: 'column', zIndex: 3 }}>
            {/* Header */}
            <AppBar>
                <Toolbar sx={{ height: '80px', backgroundColor: 'rgb(133, 129, 122)' }}>
                    <img src={T}></img>

                    <Typography
                        ml={2}
                        sx={{
                            fontSize: '20px',
                            fontWeight: '400'
                        }}
                        variant="h6"
                        component="div"
                    >
                        Ik developers
                    </Typography>

                    {/* list in header */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '50%', ml: 'auto', fontSize: '14.5px', }}>
                        <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightpink' } }}>About Us</ListItem>
                        <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightblue' } }}>Service</ListItem>
                        <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightgreen' } }}>Case Studies</ListItem>
                        <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightgreen' } }}>Blog</ListItem>
                        <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightgreen' } }}>How it Works</ListItem>
                        <ListItem sx={{ cursor: 'pointer', transition: ' 0.3s', "&:hover": { color: 'lightgreen' } }}>Hire</ListItem>
                    </Box>

                    {/* header Button */}
                    <Button
                        variant='contained'
                        sx={{
                            marginLeft: 'auto',
                            background: 'linear-gradient(225deg, #6675F7 0%, #57007B 100%)',
                            color: 'white' // Ensure text is visible on the gradient background
                        }}
                    >
                        Contact Us
                    </Button>

                </Toolbar>
            </AppBar>

            {/* Desk contents */}
            <Box sx={{ height: '74vh', backgroundColor: 'whitesmoke', color: 'black', padding: '20px' }}>
                <Typography sx={{ width: '30%', marginTop: '12%', marginLeft: '5%', textAlign: 'left' }}>

                    <Typography display={"flex"} flexDirection={"row"}>
                        <Typography variant="h3" sx={{ Weight: '300', font: 'inter', size: '45px', lineHeight: '71px' }}>Great </Typography>
                        <Typography sx={{
                            Weight: '300', font: 'inter', fontSize: '53px', lineHeight: '71px', marginLeft: '3%',
                            background: 'linear-gradient(180deg, #DE4396 0%, rgba(13, 28, 159, 0) 100%)',
                            WebkitBackgroundClip: 'text', // Allows the gradient to apply to the text
                            WebkitTextFillColor: 'transparent' // Makes text transparent so background shows through
                        }}>Product </Typography>
                        <Typography sx={{ Weight: '300', font: 'inter', fontSize: '53px', lineHeight: '71px', marginLeft: '3%' }}>is</Typography>
                    </Typography>

                    <Typography display={"flex"} flexDirection={"row"}>
                        <Typography variant="h3" sx={{ Weight: '800', font: 'inter', size: '53px', lineHeight: '71px' }}>  built by great</Typography>
                        <Typography sx={{
                            Weight: '800', font: 'inter', fontSize: '53px', lineHeight: '71px', marginLeft: '3% ',
                            background: 'linear-gradient(225deg, #F7666F 0%, #406AFF 100%)',
                            WebkitBackgroundClip: 'text', // Clips background to text
                            WebkitTextFillColor: 'transparent' // Makes text transparent to show background

                        }}>teams</Typography>

                    </Typography>

                    <Typography variant='subtitle1' textAlign={'left'} sx={{ marginTop: '20px' }} fontWeight={400} >
                        We help build and manage a team of world-class developers to bring your vision to life
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            variant='contained'
                            sx={{
                                backgroundColor: 'blue',
                                position: 'relative',
                                top: '30px',
                                borderRadius: '10px',
                                marginRight: '10px',
                                cursor: 'pointer'
                            }}
                        >
                            Let's get started
                        </Button>
                        <Box
                            sx={{
                                position: 'absolute',
                                left: '50%',
                                top: '75%',
                                transform: 'translate(-50%, -50%)', // Centers both horizontally & vertically
                                width: 100,
                                height: 50,
                                backgroundImage: `url(${image2})`, 
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                borderTopLeftRadius: 50,
                                borderTopRightRadius: 50,
                                overflow: 'hidden' // Ensures no overflow beyond the semicircle
                            }}
                        >
                        </Box>


                        <Box sx={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-55%)' }}>
                            <img src={image}></img>
                        </Box>
                    </Box>

                </Typography>
                <Box display={'flex'} flexDirection={'row'}>
                    {/* left image */}


                </Box>


            </Box>
        </Box>
    )
}
export default Page1Final;

{/* <CardMedia sx = {{height:'100px'}}
                title = "Mobile App Development" >
                 
              
                </CardMedia>

                <CardContent>
                    <Typography variant="h5" component="div" sx={{width:'600',}}>
                    Mobile App Development  
                    </Typography>
                    <Typography variant="b0dy2" sx={{ width:'333px',height:'287px', color: 'text.secondary' }}>
                        A website is an extension of yourself and we
                        can help you to express it properly.your
                        website is your number one marketing asset
                        because we live in a digital age.
                    </Typography>
                </CardContent> */}