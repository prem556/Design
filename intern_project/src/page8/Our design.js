import { Typography, Box } from "@mui/material";
import '../App.css';
import box1 from './BOX1.png';
import box2 from './box2.png';
import box3 from './box3.png';
import  box4 from './box4.png';
import box5 from './box5.png';
import box6 from './box6.png';
const OurDesign = () => {
    return (
        <Box textAlign="center" p={3} bgcolor={'#F7F7FA'}>
            <Typography variant="h5">Our design and</Typography>
            <Typography variant="h4" fontWeight="bold" mb={3}>
                development approach
            </Typography>
            {/* first box */}
            <Box
                display="flex"
                justifyContent="center"
                gap={8}
                flexWrap="wrap"
                mt={3}
            >

                <Box maxWidth={400} textAlign="left" className='child-box'> 
                    <Box className='image-box'>
                        <img src={box1} alt="no" width={'60px'} height={'60px'} />
                    </Box>
                    <Box>
                        <Typography variant="h6" fontWeight="bold">UX Driven Engineering</Typography>
                        <Typography variant="body1">
                            Unlike other companies, we are a UX first development company.
                            Projects are driven by designers and
                            they make sure design and experiences translate to code.
                        </Typography>
                    </Box>

                </Box>

                <Box maxWidth={400} textAlign="left" className='child-box'>
                    <Box className='image-box'>
                    <img src={box2} alt="no" width={'60px'} height={'60px'} />
                    </Box>
                    <Box>
                        <Typography variant="h6" fontWeight="bold">Developing Shared Understanding</Typography>
                        <Typography variant="body1">
                            Unlike other companies, we are a UX first development company.
                            Projects are driven by designers and
                            they make sure design and experiences translate to code.
                        </Typography>
                    </Box>

                </Box>
            </Box>
            {/* second box */}
            <Box display="flex"
                justifyContent="center"
                gap={8}
                flexWrap="wrap"
                mt={3}>
                <Box maxWidth={400} textAlign="left" className='child-box'>
                    <Box className='image-box'>
                    <img src={box3} alt="no" width={'60px'} height={'60px'} />
                    </Box>
                    <Box>
                        <Typography variant="h6" fontWeight="bold">Proven Experience and Expertise</Typography>
                        <Typography>
                            Unlike other companies, we are a UX first development company.
                            Projects are driven by designers and
                            they make sure design and experiences translate to code.
                        </Typography>
                    </Box>

                </Box>
                <Box maxWidth={400} textAlign="left" className='child-box'>
                    <Box className='image-box'>
                    <img src={box4} alt="no" width={'60px'} height={'60px'} />
                    </Box>
                    <Box>
                        <Typography variant="h6" fontWeight="bold">Security & Intellectual Property (IP)</Typography>
                        <Typography>
                            Unlike other companies, we are a UX first development company.
                            Projects are driven by designers and
                            they make sure design and experiences translate to code.
                        </Typography>
                    </Box>

                </Box>
            </Box>
            {/* third box */}
            <Box display="flex"
                justifyContent="center"
                gap={8}
                flexWrap="wrap"
                mt={3}>
                <Box maxWidth={400} textAlign="left" className='child-box'>
                    <Box className='image-box'>
                    <img src={box5} alt="no" width={'60px'} height={'60px'} />
                    </Box>
                    <Box>
                        <Typography variant="h6" fontWeight="bold">Code Reviews</Typography>
                        <Typography>
                            Unlike other companies, we are a UX first development company.
                            Projects are driven by designers and
                            they make sure design and experiences translate to code.
                        </Typography>
                    </Box>
                </Box>
                <Box maxWidth={400} textAlign="left" className='child-box'>
                <Box className='image-box'>
                    <img src={box6} alt="no" width={'60px'} height={'60px'} />
                    </Box>
                    <Box>
                        <Typography variant="h6" fontWeight="bold">Quality Assurance & Testing</Typography>
                        <Typography>
                            Unlike other companies, we are a UX first development company.
                            Projects are driven by designers and
                            they make sure design and experiences translate to code.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default OurDesign;
