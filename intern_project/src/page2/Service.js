// import React from "react";
// import { Box, Card, CardContent, Typography } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

// const services = [
//   {
//     title: "Mobile App Development",
//     description: "A website is an extension of yourself and we can help you to express it properly.",
//     icon: "📱",
//   },
//   {
//     title: "Web Design & Development",
//     description: "Your website is your number one marketing asset because we live in a digital age.",
//     icon: "💻",
//   },
//   {
//     title: "Software Testing Service",
//     description: "We ensure your software runs smoothly and meets quality standards.",
//     icon: "🧪",
//   },
//   {
//     title: "Software Consulting",
//     description: "Helping businesses navigate the digital transformation journey.",
//     icon: "💡",
//   },
// ];

// const ServicesCarousel = () => {
//   return (
//     <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "center", py: 5 }}>
//       <Typography variant="h4" fontWeight="bold" gutterBottom>
//         Services we offer
//       </Typography>
      
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={2}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         pagination={{ clickable: true }}
//         modules={[Pagination]}
//       >
//         {services.map((service, index) => (
//           <SwiperSlide key={index}>
//             <Card
//               sx={{
//                 p: 3,
//                 borderRadius: 3,
//                 boxShadow: 3,
//                 transition: "0.3s",
//                 "&:hover": { boxShadow: 6 },
//               }}
//             >
//               <Typography fontSize={40}>{service.icon}</Typography>
//               <Typography variant="h6" fontWeight="bold" color="primary" mt={2}>
//                 {service.title}
//               </Typography>
//               <CardContent>
//                 <Typography variant="body2" color="textSecondary">
//                   {service.description}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// };

// export default ServicesCarousel;
