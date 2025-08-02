"use client";

import { Box, Typography, Button, IconButton } from "@mui/material";
import { useRef } from "react";

const eventData = [
  {
    
    title: "United Kingdom",
    url: "/uk.jpeg",
  },
  {

    title: "USA",
url: "/usa.jpeg",
  },
  {
    title: "Japan",
url: "/japan.jpeg",
  },
  {
   
    title: "Australia",
url: "/aus.jpeg",
  },
  {

    title: "France",
url: "/france.jpeg",
  },
  {
 
    title: "Canada",
url: "/canada.jpg",
  },
    {
 
    title: "Canada",
url: "/canada.jpg",
  },
    {
 
    title: "Canada",
url: "/canada.jpg",
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

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };
  return (
    <Box>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          // bgcolor:"#A4CCD9",
       backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/wall.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h2" fontWeight="bold" mb={2}>
          Study. Work. Settle Abroad.
        </Typography>
        <Typography variant="h6" maxWidth="600px" mb={4}>
          Bridgeway Career Counselling helps you navigate opportunities in
          Australia, UK, and USA with expert visa and education guidance.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            backgroundColor: "#899D76",
            color: "white",
            fontWeight: "bold",
            px: 4,
          }}
        >
          Get Started
        </Button>
      </Box>
   <Box
      sx={{
        textAlign: "center",
        py: 8,
        px: 2,
        maxWidth: "1000px",
        mx: "auto",
        height:"50vh"
      }}
    >
      {/* Red Small Heading */}
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          color: "#899D76", 
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
        sx={{ mb: 3 }}
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
    </Box>
  );
};

export default LandingPage;
