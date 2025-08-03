"use client";

import { Box, Typography, Button, IconButton, Grid, Card, Avatar, Rating } from "@mui/material";
import { useRef } from "react";

const eventData = [
  {
    
    title: "United Kingdom",
    url: "/unitedkingdom.jpeg",
  },
  {

    title: "USA",
url: "/usa.jpg",
  },
  {
    title: "Australia",
url: "/australia.png",
  },
  {
   
    title: "Korea",
url: "/korea.png",
  },
  {

    title: "Japan",
url: "/japan.png",
  },
  {
 
    title: "Canada",
url: "/canada.jpg",
  },

];

const testimonials = [
  {
    name: "Nischal Bishwokarma",
    photo: "/ai.jpeg", 
    text: "My counselor was beneficial during my visa process. He promptly answered all my queries as a student applying for a visa. I was nervous but Bridgeway's positive attitude can instantly put one at ease.",
  },
  {
    name: "Sunita Karki",
    photo: "/ai.jpeg", 
    text: "Thank you for providing me with such a great opportunity to study abroad. I would like to thank the team of Bridgeway Career Counselling, who was helpful and guided throughout the process. Your service has been amazing so far.",
  },
  {
    name: "Sameer Sharma",
      photo: "/boy.jpg", 
    text: "I would like to thank Bridgeway Career Counselling  for the successful completion of my visa grant process. It was very difficult for me to get an Australian student visa without the cooperation and help of Bridgeway Career Counselling.",
  },
  {
    name: "Diksha Muktan",
        photo: "/ai.jpeg", 
    text: "The team was outstanding and helped me every step of the way. From university selection to visa documentation, they made the process so smooth. Highly recommended!",
  },
  {
    name: "Privik Thapa Magar",
        photo: "/boy.jpg", 
    text: "Bridgeway's transparency and professionalism made me feel secure throughout my journey abroad. Forever grateful!",
  },
];

interface ImageCardProps {
  imageUrl: string;
  title: string;
}

const ImageCard = ({ imageUrl, title }: ImageCardProps) => {
  return (
    <Box
      sx={{
        display:"flex",
        width: { xs: 160, sm: 250 },
        height: { xs: 180, sm: 300 },
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={imageUrl}
        alt={title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "fit",
        }}
      />

      {/* Overlay with Title at Bottom Center */}
      <Box
        sx={{
          alignContent:"center",

          color: "#fff",
          textAlign: "center",
          py: 1,
        }}
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

const LandingPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Box>
      <Box
        minHeight="32vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          // bgcolor:"#A4CCD9",
       backgroundImage: "url('/cover.png')",
          backgroundSize:'cover',
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          px: 2,
        }}
      >
        {/* <Typography variant="h2" fontWeight="bold" mb={2} color="#237769">
          Study. Work. Settle Abroad.
        </Typography>
        
        <Typography variant="h6" maxWidth="600px" mb={4} color="black">
          Bridgeway Career Counselling helps you navigate opportunities in
          Australia, UK, and USA with expert visa and education guidance.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            backgroundColor: "#2B1144",
            color: "white",
            fontWeight: "bold",
            px: 4,
          }}
        >
          Get Started
        </Button> */}
      </Box>
      {/* <Box sx={{bgcolor:"#2B1144",height:"20vh"}}>

      </Box> */}
   <Box
      sx={{
        textAlign: "center",
        py: 4,
        px: 2,
        maxWidth: "1000px",
        mx: "auto",
        height:"30vh"
      }}
    >
      {/* Red Small Heading */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          color: "#237769", 
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
        gutterBottom
      >
        Welcome to Bridgeway
      </Typography>

      {/* Bold Main Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3,color:"#237769" }}
      >
        The Leading Education Consultancy In Nepal
      </Typography>

      {/* Paragraph Text */}
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ lineHeight: 1.8 }}
      >
        Bridgeway Career Counselling has built a solid reputation as one of
        Nepal’s most trusted educational consultancies for studying abroad.
        We guide students in pursuing higher education opportunities in
        Australia, the UK, and the USA. With personalized support and
        experienced advisors, we help you succeed in your academic journey
        abroad.
      </Typography>
    </Box>
      <Box >
        {/* Scrollable Container */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            alignContent:"center",
            gap: 1,
            py: 1,
            overflow: "auto",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            width: { xs: 400, sm: 720, md: 1080, lg: 1650 },
            "& > *": {
              scrollSnapAlign: "center",
            },
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {eventData.map((item) => (
            <Box key={item.title}>
              <ImageCard
                title={item.title}
      imageUrl={item.url}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ py: 8, px: 2}}>
  <Typography variant="h4" align="center" fontWeight="bold" color="#237769" gutterBottom>
    Our Services
  </Typography>
  <Grid container spacing={4} justifyContent="center" mt={2}>
    {[
      { title: "Career Counselling", desc: "Personalized advice to help you choose the right academic path." },
      { title: "University Application", desc: "End-to-end support with applications and document prep." },
      { title: "Visa Assistance", desc: "Expert help with navigating visa procedures and documentation." },
    ].map((service) => (
      <Grid item xs={12} sm={6} md={4} key={service.title}>
        <Card sx={{ p: 3, height: "100%", boxShadow: 3 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom color="#237769">
            {service.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.desc}
          </Typography>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>
<Box sx={{ py: 10, backgroundColor: "#fafafa", textAlign: "center" }}>
      <Typography variant="h5" color="#237769" fontWeight="bold">
        Our Testimonial
      </Typography>
      <Typography variant="h4" fontWeight="bold" mt={1} mb={5}>
        What our clients appreciate about us
      </Typography>
<Box
  sx={{
    display: "flex",
    overflowX: "auto",
    gap: 4,
    py: 4,
    px: 2,
    scrollSnapType: "x mandatory",
    scrollbarWidth: "none", // Firefox
    "&::-webkit-scrollbar": { display: "none" }, // Chrome
  }}
>
  {testimonials.map((item, index) => (
    <Card
      key={index}
      sx={{
        minWidth: 300,
        maxWidth: 350,
        flex: "0 0 auto",
        p: 4,
        borderRadius: "30px 30px 10px 10px",
        textAlign: "center",
        height: "100%",
        scrollSnapAlign: "start",
      }}
      elevation={3}
    >
      <Avatar
        src={item.photo}
        alt={item.name}
        sx={{ width: 70, height: 70, mx: "auto", mb: 2 }}
      />
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {item.name}
      </Typography>
      <Rating value={5} readOnly sx={{ color: "#F97316" }} />
      <Typography
        variant="body2"
        color="orange"
        fontWeight="500"
        mt={1}
      >
        {/* {item.university} */}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        mt={2}
        textAlign="left"
      >
        {item.text}
      </Typography>
    </Card>
  ))}
</Box>

    </Box>
    </Box>
  );
};

export default LandingPage;
