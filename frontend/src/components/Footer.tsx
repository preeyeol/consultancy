"use client";

import Link from "next/link";
import { Box, Typography, Grid, Container } from "@mui/material";
import { Email, Language, Phone } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component="footer" mt={10} color="text.primary" sx={{ boxShadow: 1, m: 4, borderRadius: 4 }}>
      <Container maxWidth="lg">
        <Box px={3} py={5}>
          <Grid container spacing={10}>
            {/* Logo & Description */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" fontWeight="bold" color="#2B1144">
                BRIDGEWAY
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Bridgeway Career Counselling helps students and professionals
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                plan and pursue global opportunities with expert guidance.
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                "Your Bridge to global education success"
              </Typography>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                Quick Links
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                <Link href="/about">About Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/privacy">Privacy Policy</Link>
              </Box>
            </Grid>

            {/* Visa Services */}
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                Visa Services
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                <Link href="/uk">UK</Link>
                <Link href="/usa">USA</Link>
                <Link href="/aus">Australia</Link>
                <Link href="/study-abroad">Study Abroad</Link>
              </Box>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" mb={2}>
                Contact
              </Typography>
              <Box display="flex" alignItems="center" mb={1}>
                <Phone fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">+44 7360108501</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <Email fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">binabk346@gmail.com</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={1}>
                <Language fontSize="small" sx={{ mr: 1 }} />
                <Typography variant="body2">Australia | USA | UK</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Bottom Copyright */}
      <Box borderTop="1px solid #2B1144" py={2} textAlign="center">
        <Typography variant="body2" color="#2B1144">
          © {new Date().getFullYear()} Bridgeway Career Counselling. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
