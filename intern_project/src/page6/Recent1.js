import { Typography, Box, Button } from "@mui/material";
import CaseStudy from "./caseStudy.png";
import CaseStudy2 from "./CaseStudy2.png"
import CaseStudy3 from './caseStudy3.png'
import { ArrowRightAlt } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";



const Recent1 = () => {
  return (
    <Box>


      <Box textAlign={'center'}>
        <Typography variant="h5" >
          Our Recent
        </Typography>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Case Studies
        </Typography>
      </Box>

      {/* main box of sub pages fot website for sfc design  */}
      <Box sx={{ display: 'grid', placeItems: 'center', width: '90%', marginLeft: '40px', marginBottom: '20px' }}>


        {/* first box */}
        <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F1F2FF', marginLeft: '10vh', marginBottom: '20px', borderRadius: '10px', height: '415px' }}>

          <Box>
            <img src={CaseStudy}></img>
          </Box>
          <Box m={5}>
            <Typography variant="h5" fontWeight={600} mb={4}>
              Website Design for SCFC Canada
            </Typography>

            <Typography>
              Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.
            </Typography>
            <Typography variant="body1" color="primary" component="a" href="#" sx={{ display: "flex", alignItems: "center", float: 'right', color: "linear-gradient(225deg, #F76680 0%,rgb(215, 151, 243) 100%)" }}>
              Read more <ArrowForwardIosIcon fontSize="small" sx={{ ml: 0.5, }} />
            </Typography>
          </Box>

        </Box>
        {/* second box  */}
        <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#F0FFF7', marginLeft: '10vh', marginBottom: '20px', borderRadius: '10px', height: '415px' }}>

          <Box>
            <img src={CaseStudy2}></img>
          </Box>
          <Box m={5}>
            <Typography variant="h5" fontWeight={600} mb={4}>
              Website Design for SCFC Canada
            </Typography>

            <Typography>
              Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.
            </Typography>
            <Typography variant="body1" color="primary" component="a" href="#" sx={{ display: "flex", alignItems: "center", float: 'right', background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent", }}>
              Read more <ArrowForwardIosIcon fontSize="small" sx={{ ml:" 0.5",color: "linear-gradient(225deg, #F76680 0%, #57007B 100%) ",
                    }} />
            </Typography>
          </Box>

        </Box>
        {/* third box */}
        <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#FFF4F4', marginLeft: '10vh', marginBottom: '20px', borderRadius: '10px', height: '415px' }}>

          <Box>
            <img src={CaseStudy3}></img>
          </Box>
          <Box m={5}>
            <Typography variant="h5" fontWeight={600} mb={4}>
              Website Design for SCFC Canada
            </Typography>

            <Typography>
              Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.
            </Typography>
            <Typography variant="body1" color="primary" component="a" href="#" sx={{ display: "flex", alignItems: "center", float: 'right' }}>
              Read more <ArrowForwardIosIcon fontSize="small" sx={{ ml: 0.5, }} />
            </Typography>
          </Box>

        </Box>

   </Box>

  </Box>
  );
};

export default Recent1;
