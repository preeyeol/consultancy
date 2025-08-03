"use client";

import { Box, Typography, Grid, Divider } from "@mui/material";

const AboutUs = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 6,
        px: { xs: 2, md: 8 },
        backgroundColor: "#ffffff",
      }}
    >
<Box
  sx={{
    height: "10vh",
    bgcolor: "#2B1144",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Typography
    variant="h4"
    sx={{
      fontWeight: "bold",
      color: "white",
      textAlign: "center",
    }}
  >
    About Us
  </Typography>
</Box>



      <Grid container spacing={5} py={6}>
        <Grid item xs={12} md={7}>
          <Typography variant="h6" sx={{ mb: 3, color: "text.secondary", lineHeight: 1.8 }}>
            <strong className="text-[#2B1144]">Bridgeway Career Counselling Pvt. Ltd.</strong> is a trusted educational consultancy dedicated to guiding students toward global academic success. With a strong focus on the <strong className="text-[#2B1144]">UK, USA, and Australia</strong>, we specialize in helping aspiring students find the right universities, courses, and career paths that align with their goals.
          </Typography>

          <Typography variant="h6" sx={{ mb: 3, color: "text.secondary", lineHeight: 1.8 }}>
            Founded with the mission to <em>"bridge the gap between ambition and opportunity,"</em> Bridgeway offers personalized counselling, transparent guidance, and end-to-end support—from university selection and application assistance to visa processing and pre-departure briefings.
          </Typography>

          <Typography variant="h6" sx={{ mb: 3, color: "text.secondary", lineHeight: 1.8 }}>
            We believe that studying abroad is more than just academics—it's a life-changing journey. Our experienced counsellors are committed to ensuring that each student receives tailored advice and real-world insights to make informed decisions.
          </Typography>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box
            sx={{
              backgroundColor: "#f3f4f6",
              p: 4,
              borderRadius: 3,
              
              boxShadow: 2,
            }}
            >
            <Typography variant="h6" sx={{ mb: 2, color: "#2B1144", fontWeight: 600 }}>
              Why Choose Us?
            </Typography>
            <Box component="ul" sx={{ pl: 2, color: "text.secondary", lineHeight: 2 }}>
              <li>✔️ Expert guidance on top universities and programs in the UK, USA, and Australia</li>
              <li>✔️ Personalized counselling to match academic and career aspirations</li>
              <li>✔️ Full support with applications, SOPs, scholarships, and visas</li>
              <li>✔️ Ethical, transparent, and student-first approach</li>
              <li>✔️ Strong global network and local understanding</li>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 6,color:"#2B1144" }} />

      <Typography variant="body1" align="center" sx={{ color: "text.secondary", mb: 2 }}>
        Whether you're dreaming of a prestigious university in <strong>London</strong>, an innovative college in the <strong>United States</strong>, or a vibrant campus life in <strong>Australia</strong>, we’re here to help you take the first confident step.
      </Typography>

      <Typography variant="h6" align="center" sx={{ mt: 4, color: "#2B1144", fontWeight: "bold" }}>
        Bridge your future with Bridgeway.
      </Typography>
    </Box>
  );
};

export default AboutUs;
