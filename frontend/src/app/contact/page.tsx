"use client";

import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Card,
} from "@mui/material";
import {
  Email,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <Box sx={{display:"flex",flexDirection:"column",height:"70vh",mb:2 }}>
<Box sx={{ p: 4 }}>
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
    <Box sx={{ height: 2, width: "100px", bgcolor: "#2B1144" }} />
    
    <Typography
      sx={{
        color: "#2B1144",
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
        whiteSpace: "nowrap",
      }}
    >
      CONNECT WITH US TO SECURE YOUR FUTURE
    </Typography>
    
    <Box sx={{ height: 2, width: "100px", bgcolor: "#2B1144" }} />
  </Box>
</Box>

<Box sx={{display:"flex",flexDirection:"row"}}>

          <Box sx={{m:5,width:"40%",alignContent:"center"}}>
            <Typography variant="h6" mb={2} fontWeight="bold" color="#2B1144" textAlign={"center"}>
             Send Us Your Enquiry
            </Typography>
            <Box component="form" onSubmit={handleSubmit} >
              <Grid sx={{display:"flex",flexDirection:"column",gap:2}} spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    name="name"
                    fullWidth
                    // sx={{py}}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    fullWidth
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Phone"
                    name="phone"
                    fullWidth
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
         
      
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    name="message"
                    fullWidth
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
  <Button
    type="submit"
    variant="contained"
    sx={{ bgcolor: "#2B1144", px: 4 }}
  >
    SEND MESSAGE
  </Button>
</Grid>

              </Grid>
            </Box>
          </Box>


          <Box
            flex={1}
            bgcolor={"#2B1144"}
            color="white"
            display="flex"
            flexDirection="column"
            justifyContent="start"
            borderRadius={6}
            mx={4}
            p={4}
          >
            <Typography variant="h6" fontSize={36} gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body2" mb={2}>
              We’re here to help! Get in touch with us for any inquiries about study abroad opportunities, visa guidance, or career counseling
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <LocationOn sx={{ mr: 1 }} />
              <Typography variant="body2">
          Flat 2 withymoor court 27-28 oaks crescent 
WV3 9SA
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <Phone sx={{ mr: 1 }} />
              <Typography variant="body2">+44 7360108501</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Email sx={{ mr: 1 }} />
              <Typography variant="body2">binabk346@gmail.com</Typography>
            </Box>
          </Box>

</Box>
    </Box>
  );
};

export default ContactPage;
