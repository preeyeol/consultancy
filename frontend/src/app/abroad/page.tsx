"use client";

import { Box, Typography, Grid, Divider } from "@mui/material";

const StudyAbroad = () => {
  const sections = [
    {
      title: "Study in the UK",
      description:
        "Discover world-class education, historic universities, and career-shaping opportunities in the United Kingdom.",
      benefits: [
        "🎓 World-renowned universities (Oxford, Cambridge, UCL)",
        "📚 Shorter course durations (3-year undergrad, 1-year postgrad)",
        "🌎 Diverse and inclusive student community",
        "💼 Post-study work visa (Graduate Route – 2 years)",
        "🎯 Opportunity to work part-time during studies",
        "🛫 Easy access to Europe for travel and culture",
      ],
      process: [
        "📝 Choose your course and university",
        "📄 Prepare academic and English proficiency documents",
        "✉️ Submit application via UCAS or directly",
        "✅ Receive offer letter (conditional/unconditional)",
        "💳 Secure funding and pay tuition deposit",
        "📘 Apply for student visa (Tier 4)",
        "🧳 Attend pre-departure briefing and fly to the UK!",
      ],
      color: "#2B1144",
      image:
        "/london.jpg",
    },
    {
      title: "Study in Australia",
      description:
        "Experience high-quality education, modern campuses, and a vibrant lifestyle in one of the world’s most livable countries.",
      benefits: [
        "🎓 Globally ranked universities (University of Melbourne, ANU)",
        "🌏 Welcoming multicultural environment",
        "💼 Post-study work visas (485 subclass – up to 4 years)",
        "🌞 Safe, clean, and high quality of life",
        "🧑‍🎓 Work rights during studies (up to 48 hours/fortnight)",
        "📍 Study in top cities like Sydney, Melbourne, Brisbane",
      ],
      process: [
        "📚 Choose your course and CRICOS-registered institution",
        "📄 Gather academic transcripts and IELTS/PTE results",
        "📩 Apply online or via an education agent",
        "✅ Receive Letter of Offer and Confirmation of Enrollment (CoE)",
        "💳 Pay tuition fees and organize health insurance (OSHC)",
        "📘 Apply for Subclass 500 student visa",
        "✈️ Prepare for arrival and pre-departure orientation",
      ],
      color: "#14532d",
      image:
        "/aus.jpg",
    },
    {
      title: "Study in the USA",
      description:
        "Shape your academic and professional future in the land of innovation, research, and opportunity.",
      benefits: [
        "🎓 Home to Ivy League and top-ranked institutions",
        "📘 Wide range of programs and research opportunities",
        "🌎 Rich campus life and global networking",
        "💼 Optional Practical Training (OPT) after graduation",
        "🧾 Scholarships and assistantships available",
        "🏙️ Study in major cities: New York, LA, Boston, Chicago",
      ],
      process: [
        "🔍 Research programs and universities (undergrad or grad)",
        "📄 Take standardized tests (SAT, GRE, TOEFL/IELTS)",
        "📩 Apply through Common App or directly",
        "✅ Receive I-20 and admission offer",
        "💳 Pay SEVIS fee and schedule visa interview",
        "📘 Apply for F1 Student Visa",
        "🧳 Attend orientation and travel to the U.S.",
      ],
      color: "#1e3a8a",
      image:
        "/usa.jpg",
    },
  ];

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 8 } }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: "bold", color: "#2B1144", mb: 6 }}
      >
        Study Abroad with Bridgeway
      </Typography>

      {sections.map((section, idx) => (
        <Box key={section.title} sx={{ mb: 10 }}>
          {/* Image */}
          <Box
            component="img"
            src={section.image}
            alt={section.title}
            sx={{
              width: "100%",
              height: { xs: 200, md: 350 },
              objectFit: "cover",
              borderRadius: 3,
              mb: 4,
              boxShadow: 3,
            }}
          />

          {/* Heading + Description */}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: section.color, mb: 2 }}
          >
            {section.title}
          </Typography>

          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
            {section.description}
          </Typography>

          <Grid container spacing={4}>
            {/* Benefits */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: "#f3f4f6",
                  p: 4,
                  borderRadius: 3,
                  height: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 2, fontWeight: 600, color: section.color }}
                >
                  Key Benefits
                </Typography>
                <ul style={{ lineHeight: 2, color: "#333", paddingLeft: "1rem" }}>
                  {section.benefits.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Box>
            </Grid>

            {/* Process */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  backgroundColor: "#f9f9f9",
                  p: 4,
                  borderRadius: 3,
                  height: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 2, fontWeight: 600, color: section.color }}
                >
                  Application Process
                </Typography>
                <ol style={{ lineHeight: 2, color: "#333", paddingLeft: "1.2rem" }}>
                  {section.process.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </Box>
            </Grid>
          </Grid>

          {idx !== sections.length - 1 && <Divider sx={{ my: 8 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default StudyAbroad;
