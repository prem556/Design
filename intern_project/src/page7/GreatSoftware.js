import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Build1 from "../page7/Build1.png";
import Build2 from "../page7/Build2.png";
import Build3 from "../page7/Build3.png";
import log1 from "../page7/log1.png";
import log2 from "../page7/log2.png";
import log3 from "../page7/log3.png";

const GreatSoftware = () => {
  return (
    <Box>
      <Box textAlign={"center"}>
        <Typography variant="h5">Way of building</Typography>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          Great Software
        </Typography>
      </Box>

      {/* First Content Box */}
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          width: "90%",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: "15px",
            height: "415px",
            gap: "20px",
            ml: "80px",
          }}
        >
          {/* Text Section */}
          <Box sx={{ maxWidth: "50%" }}>
            <Typography variant="h5" fontWeight={500} mb={4}>
              Build the right team to scale
            </Typography>

            <Typography mb={2}>
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers).
            </Typography>

            <Box display={"flex"} flexDirection={"row"} gap={1} mb={2}>
              <Typography fontWeight={500}>Our</Typography>
              <Typography
                fontWeight={500}
                sx={{
                  background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                delivery model
              </Typography>
              <Typography>helps you cut costs and deliver within budget.</Typography>
            </Box>

            <Box>
              <Typography fontStyle="italic"  sx={{
                  background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                "Simform is quick to identify larger problems with the software, so we
                decided to expand our scope to build new modules."
              </Typography>
            </Box>
           
            <Box display="flex" flexDirection="row" alignItems="center" gap="8px">
      {/* Logo/Image Box */}
      <Box>
        <img src={log1} alt="log process" width={40} height={40} style={{ borderRadius: "50%" }} />
      </Box>

      {/* Text Box */}
      <Box>
        <Typography variant="h6" >
          Jeewa Markram
        </Typography>
        <Typography variant="body2" color="gray">
          CEO
        </Typography>
      </Box>
    </Box>
    </Box>   

          {/* Image Section */}
          <Box sx={{ ml: "80px" }}>
            <img src={Build1} alt="Build process" width="500px" height="auto" />
          </Box>
        </Box>
      </Box>

      {/* Second Content Box (Image on the Left) */}
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          width: "90%",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: "15px",
            height: "415px",
            gap: "20px",
            ml: "80px",
          }}
        >
          {/* Image Section (Now on the Left) */}
          <Box sx={{ mr: "80px" }}>
            <img src={Build2} alt="Build process" width="500px" height="auto" />
          </Box>

          {/* Text Section */}
          <Box sx={{ maxWidth: "50%" }}>
            <Typography variant="h5" fontWeight={500} mb={4}>
              Build the right team to scale
            </Typography>

            <Typography mb={2}>
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers).
            </Typography>

            <Box display={"flex"} flexDirection={"row"} gap={1} mb={2}>
              <Typography fontWeight={500}>Our</Typography>
              <Typography
                fontWeight={500}
                sx={{
                  background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                delivery model
              </Typography>
              <Typography>helps you cut costs and deliver within budget.</Typography>
            </Box>

            <Box>
              <Typography fontStyle="italic"  sx={{
                  background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                "Simform is quick to identify larger problems with the software, so we
                decided to expand our scope to build new modules."
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center" gap="8px">
              <Box>
                <img src={log2} alt="log process" width={40} height={40} style={{ borderRadius: "50%" }} />
              </Box>
              <Box>
                <Typography variant="h6">Jeewa Markram</Typography>
                <Typography variant="body2" color="gray">CEO</Typography>
              </Box>
            </Box>
      </Box>
      
      {/* third Content Box */}
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          width: "90%",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: "15px",
            height: "415px",
            gap: "20px",
            ml: "80px",
          }}
        >
          {/* Text Section */}
          <Box sx={{ maxWidth: "50%" }}>
            <Typography variant="h5" fontWeight={500} mb={4}>
              Build the right team to scale
            </Typography>

            <Typography mb={2}>
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers).
            </Typography>

            <Box display={"flex"} flexDirection={"row"} gap={1} mb={2}>
              <Typography fontWeight={500}>Our</Typography>
              <Typography
                fontWeight={500}
                sx={{
                  background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                delivery model
              </Typography>
              <Typography>helps you cut costs and deliver within budget.</Typography>
            </Box>

            <Box>
              <Typography fontStyle="italic"  sx={{
                  background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                "Simform is quick to identify larger problems with the software, so we
                decided to expand our scope to build new modules."
              </Typography>
            </Box>
          </Box>

          {/* Image Section */}
          <Box sx={{ ml: "80px" }}>
            <img src={Build3} alt="Build process" width="500px" height="auto" />
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center" gap="8px" >
      {/* Logo/Image Box */}
      <Box>
        <img src={log3} alt="log process" width={40} height={40} style={{ borderRadius: "50%", }} />
      </Box>

      {/* Text Box */}
      <Box>
        <Typography variant="h6" >
          Jeewa Markram
        </Typography>
        <Typography variant="body2" color="gray">
          CEO
        </Typography>
      </Box>
    </Box>
      </Box>
    </Box>
  );
};

export default GreatSoftware;
