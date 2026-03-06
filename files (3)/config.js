const CONFIG = {
  // ── GLOBAL SETTINGS (Navbar, Footer, Branding) ──────────
  global: {
    clubName: "EcoTech Club",
    university: "National Polytechnic School of Constantine",
    logo: "media/club/logo of the web site.png",
    contactEmail: "ecotech.club2026@gmail.com",
    location: "ENPC, Constantine, Algeria",
    navbar: {
      links: [
        { label: "Home", url: "index.html" },
        { label: "Departments", url: "departments.html" },
        { label: "Events", url: "events.html" },
        { label: "Our Team", url: "team.html" }
      ],
      cta: { label: "Join Us", url: "join.html" }
    },
    footer: {
      description: "EcoTech is a student club that combines technology and environmental protection to promote sustainability. We work on innovative projects, participate in scientific competitions, and use modern technologies to create positive environmental impacts.",
      socials: {
        instagram: "https://www.instagram.com/ecotech_club/#",
        linkedin: "https://www.linkedin.com/company/ecotech-club/",
        facebook: "https://www.facebook.com/share/18E8AVEYT6/",
        github: "#"
      },
      copyright: "© 2026 EcoTech Club — National Polytechnic School of Constantine. All rights reserved.",
      credits: "Created by YAAKOUB BOUHOUN"
    }
  },

  // ── HOME PAGE (index.html) ─────────────────────────────
  home: {
    hero: {
      eyebrow: "Green by VISION, Tech by ACTION",
      title: "Living in harmony <br><span class=\"teal\">with nature</span>",
      description: "EcoTech is a student club that combines technology and environmental protection to promote sustainability. We work on innovative projects, participate in scientific competitions, and use modern technologies to create positive environmental impacts.",
      primaryCTA: { label: "Join us", url: "join.html" },
      secondaryCTA: { label: "Discover more", url: "#about" },
      image: "media/club/heroImage.jpg",
      cardImage: "media/club/heroImage2.jpg",
      memberCount: "40+ Active Members"
    },
    about: {
      label: "01 — Who We Are",
      title: "More than a club.<br>A <span class=\"teal\">movement.</span>",
      description1: "The mission of EcoTech is to bring together technology and environmental awareness by encouraging students to develop projects that use artificial intelligence and modern technologies to solve real environmental challenges.",
      description2: "EcoTech envisions a future where technology is used responsibly to protect the environment and support sustainable development. We aim to empower students to create innovative, smart, and eco-friendly solutions that contribute to a cleaner and more sustainable world.",
      stats: [
        { label: "Members", value: "40", suffix: "+" },
        { label: "Events Organized", value: "3", suffix: "" },
        { label: "Years Active", value: "1", suffix: "" }
      ]
    },
    pillars: {
      title: "Our pillars,<br>your impact",
      description: "Meet the four core values that shape our club — where tech, sustainability, and community come together to spark real change.",
      items: [
        {
          title: "Innovation",
          text: "Encouraging creative and smart technological solutions to real-world environmental challenges."
        },
        {
          title: "Planet-first mindset",
          text: "Every step we take is guided by eco-conscious choices, ensuring our actions help build a greener world."
        },
        {
          title: "Learning & Development",
          image: "media/club/heroImage.jpg"
        },
        {
          title: "Collaboration",
          image: "media/club/heroImage2.jpg"
        },
        {
          title: "Open Collaboration",
          text: "We believe the best ideas emerge from diverse minds. Every student, every skill, every background is an asset to our mission."
        },
        {
          title: "Measurable Impact",
          text: "From campus initiatives to national forums, we track the real difference we make in our communities."
        }
      ]
    },
    visionMission: {
      quote: "Our vision is to empower every student to become a catalyst for environmental change through technology.",
      missionTitle: "Our Mission",
      missionText: "To build a vibrant ecosystem where technical expertise serves ecological preservation, fostering a new generation of conscious engineers and innovators. ",
      valuesTitle: "Core Values",
      valuesText: "EcoTech is more than just a technical club; it is a community built on teamwork, innovation, and shared values."
    },
    stories: [
      {
        quote: "I've never felt more empowered to create change. The support and energy here make every step forward feel possible.",
        author: "Hounaida Belhour",
        role: "Office Secretary",
        image: "media/team/Hounaida Belhour.jpg"
      },
      {
        quote: "Here, innovation and nature truly connect. Every gathering sparks new ideas and friendships that last.",
        author: "Azizi Mohammed",
        role: "External Relations Manager",
        image: "media/team/Azizi Mohammed.jpg"
      },
      {
        quote: "This community helped me grow, learn, and connect with people who care about making a real difference.",
        author: "Mansouri Ihcen",
        role: "HR Coordinator",
        image: "media/team/Mansouri Ihcen.jpg"
      }
    ],
    ctaBanner: {
      eyebrow: "READY TO MAKE AN IMPACT?",
      title: "Become a Part of the <br><span class=\"text-gradient\">EcoTech Movement</span>",
      description: "Join 150+ students who are already building the future of sustainability. No matter your major, your passion for the planet is what matters.",
      button: { label: "Apply to Join Us", url: "join.html" }
    }
  },

  // ── DEPARTMENTS PAGE (departments.html) ──────────────────
  departments: {
    hero: {
      title: "Our Specialized <span class=\"text-gradient\">Departments</span>",
      description: "EcoTech Club is divided into four main departments, each focusing on a unique aspect of green innovation and environmental science.",
      image: "media/club/heroImage.jpg"
    },
    items: [
      {
        num: "01 / 04",
        title: "SensibiliGreen Tech Department",
        text: "Focuses on developing technical and innovative solutions that combine technology with sustainability.",
        tags: ["Innovation", "Green Tech", "Sustainability"],
        image: "media/departments/SensibiliGreen Tech Department.jpg"
      },
      {
        num: "02 / 04",
        title: "Environmental & Research Department",
        text: "Dedicated to studying environmental challenges and ensuring that projects follow sustainability principles.",
        tags: ["Research", "Environment", "Sustainability"],
        image: "media/departments/Environmental & Research Department.jpg"
      },
      {
        num: "03 / 04",
        title: "Media & Design Department",
        text: "Manages the club’s visual identity and communication across platforms.",
        tags: ["Design", "Media", "Communication"],
        image: "media/departments/Media & Design Department.jpg"
      },
      {
        num: "04 / 04",
        title: "Projects & Events Department",
        text: "Responsible for organizing events and building partnerships with other clubs and institutions.",
        tags: ["Events", "Projects", "Partnerships"],
        image: "media/departments/Projects & Events Department.JPG"
      }
    ]
  },

  // ── EVENTS PAGE (events.html) ───────────────────────────
  events: {
    hero: {
      title: "Experience <span class=\"text-gradient\">Eco-Innovation</span>",
      description: "From intense hackathons to hands-on workshops, our events are designed to spark creativity and drive real-world environmental impact.",
      image: "media/club/heroImage3.jpg"
    },
    items: [
      {
        status: "upcoming",
        date: "May 2026",
        title: "EcoTech Project Showcase",
        text: "Presentation of EcoTech members’ projects combining AI, technology, and environmental protection.",
        info: "ENPC",
        cta: "Upcoming",
        image: "media/events/EcoTech Project Showcase.jpg"
      },
      {
        status: "upcoming",
        date: "February 2026",
        title: "AI for Sustainability Workshop",
        text: "Participation in a competition on smart agriculture (winning the #3 spot).",
        info: "ENSC-conference room",
        cta: "Upcoming",
        image: "media/events/AI for Sustainability Workshop.png"
      },
      {
        status: "past",
        date: "February 16, 2026",
        title: "EcoTech Opening Day",
        text: "Official opening of the EcoTech Club featuring project exhibitions, department presentations, and interactive activities focused on technology and sustainability.",
        info: "ENPC – Main Hall",
        cta: "Completed",
        image: "media/events/EcoTech Opening Day.jpg"
      },
      {
        status: "past",
        date: "February 11, 2026",
        title: "Blood Donation Campaign",
        text: "A humanitarian initiative organized by EcoTech to encourage blood donation and promote health awareness among students.",
        info: "ENPC Campus",
        cta: "Completed",
        image: "media/events/Blood Donation Campaign.jpg"
      },
      {
        status: "past",
        date: "February 2026",
        title: "National Green Technology Forum",
        text: "Participation in a competition on smart agriculture (winning the #3 spot).",
        info: "ENSC-conference room",
        cta: "Completed",
        image: "media/events/Fourth edition of the National Green Technology Forum.jpg"
      }
    ]
  },

  // ── TEAM PAGE (team.html) ──────────────────────────────
  team: {
    hero: {
      title: "The <span class=\"text-gradient\">Eco-Innovators</span>",
      description: "Meet the dedicated students leading our mission at the National Polytechnic School of Constantine. Passionate leaders, engineers, and researchers building a sustainable future.",
      image: "media/club/heroImage2.jpg"
    },
    members: [
      {
        name: "Mezaache Mohamed",
        role: "President",
        bio: "the President of the EcoTech Club at ENPC. leads the club’s mission to integrate technology and environmental sustainability through innovative student-led projects, scientific competitions, and awareness initiatives at both national and international levels.",
        image: "media/team/Mezaache Mohamed.jpg",
        socials: { linkedin: "https://www.linkedin.com/in/mezaache-mohamed-261433352?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://instagram.com/mez_moh1" }
      },
      {
        name: "Adjal Ouissal",
        role: "Vice President",
        bio: "Curious mind, determined heart",
        image: "media/team/Adjal Ouissal.jpg",
        socials: { linkedin: "https://www.linkedin.com/in/adjal-ouissal-a06b282a1/", instagram: "https://instagram.com/wissou_ad" }
      },
      {
        name: "Mansouri Ihcen",
        role: "HR & Project Coordinator",
        bio: "Responsible for team coordination, project organization, and event planning within the club.",
        image: "media/team/Mansouri Ihcen.jpg",
        socials: { linkedin: "https://www.linkedin.com/in/ihcen-mansouri-41510a390", instagram: "https://www.instagram.com/ihxeene?igsh=MWlkbDB2dWd6cnV5Mg==" }
      },
      {
        name: "Hounaida Belhour",
        role: "Office Secretary",
        bio: "4th-Year Environmental & Process Engineering Student at ENP Constantine | Passionate about Water & Waste Management | Exploring Sustainable and Innovative Solutions",
        image: "media/team/Hounaida Belhour.jpg",
        socials: { linkedin: "https://www.linkedin.com/in/hounaida-belhour-4a8b5b350/", instagram: "https://instagram.com/blhounaida" }
      },
      {
        name: "Azizi Mohammed",
        role: "External Relations Manager",
        bio: "ENPC student in 3rd year of Mechanical Engineering (automotive industry). Ambitious, solution-focused, curious, project-driven, and future-ready.",
        image: "media/team/Azizi Mohammed.jpg",
        socials: { linkedin: "https://www.linkedin.com/in/azizi-mohammed-4b33113b2?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://instagram.com/m.e.d_az" }
      },
      {
        name: "Yaakoub Bouhoun",
        role: "GreenTech Department Coordinator",
        bio: "ENPC student passionate about artificial intelligence, smart industrial systems, and innovative tech solutions. He builds practical projects combining automation, sustainability, and digital entrepreneurship in Algeria.",
        image: "media/team/Yaakoub Bouhoun.jpg",
        socials: { linkedin: "https://www.linkedin.com/in/yaakoub-bouhoun-b7a0863a9/", instagram: "https://www.instagram.com/yakoen.elnano/#" }
      },
      {
        name: "Mahdi Ahmed Taha",
        role: "Photographer",
        bio: "ENPC Student photographer.",
        image: "media/team/Mahdi Ahmed Taha.jpg",
        socials: { linkedin: "", instagram: "https://instagram.com/tahamxhdi" }
      }
    ]
  },

  // ── JOIN PAGE (join.html) ──────────────────────────────
  join: {
    hero: {
      title: "Join the <span class=\"text-gradient\">Movement</span>",
      description: "Ready to contribute your skills to a sustainable future? Apply to join EcoTech Club today and start building the solutions of tomorrow.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&auto=format&fit=crop&q=80"
    },
    perks: [
      {
        title: "Learn & Grow",
        text: "Access exclusive workshops, mentorship from seniors, and hands-on experience with real-world tech projects."
      },
      {
        title: "Make an Impact",
        text: "Your work directly contributes to building a greener university and community through innovation."
      },
      {
        title: "Expand Network",
        text: "Connect with like-minded students, researchers, and professionals in the tech and sustainability sectors."
      }
    ]
  }
};