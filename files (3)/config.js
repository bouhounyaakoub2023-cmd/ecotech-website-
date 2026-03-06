const CONFIG = {
  global: {
    clubName: "EcoTech Club",
    university: "National Polytechnic School of Constantine",
    logo: "media/club/logo of the web site.png",
    contactEmail: "ecotech.club2026@gmail.com",
    location: "ENPC, Constantine, Algeria",
    footer: {
      description: "EcoTech is a student club combining technology and environmental responsibility to create measurable sustainability impact.",
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

  home: {
    hero: {
      title: "Engineering a sustainable future with intelligent technology.",
      description: "EcoTech Club is a multidisciplinary student lab where environmental ambition meets advanced technology. We design practical, research-driven solutions for greener campuses and cities.",
      primaryCTA: { label: "Join the Club", url: "#join" },
      secondaryCTA: { label: "Discover Projects", url: "#projects" }
    },
    visionMission: {
      quote: "Our vision is to empower every student to become a catalyst for environmental change through technology.",
      missionText: "To build a vibrant ecosystem where technical expertise serves ecological preservation, fostering a new generation of conscious engineers and innovators.",
      valuesText: "EcoTech is built on collaboration, scientific curiosity, and measurable impact through responsible innovation."
    },
    projects: [
      {
        title: "AI Waste Sorting Assistant",
        description: "Computer vision model helping classify recyclables and reduce contamination in campus bins.",
        image: "media/club/heroImage.jpg",
        tag: "AI + Circular Economy"
      },
      {
        title: "Smart Irrigation Prototype",
        description: "IoT sensors and predictive analytics to optimize water usage for green campus zones.",
        image: "media/club/heroImage2.jpg",
        tag: "IoT + Sustainability"
      },
      {
        title: "Eco Data Observatory",
        description: "Student-led dashboard tracking energy use, emissions indicators, and environmental KPIs.",
        image: "media/club/heroImage3.jpg",
        tag: "Data + Impact"
      }
    ],
    partners: [
      { name: "ENPC Innovation Cell" },
      { name: "GreenTech Algeria" },
      { name: "Sustainable Campus Network" },
      { name: "AI4Climate Students" },
      { name: "Future Engineers Forum" }
    ]
  },

  events: {
    items: [
      {
        status: "upcoming",
        date: "May 2026",
        title: "EcoTech Project Showcase",
        text: "Presentation of student projects combining AI, engineering, and ecological impact.",
        info: "ENPC Main Hall"
      },
      {
        status: "upcoming",
        date: "June 2026",
        title: "AI for Sustainability Workshop",
        text: "Hands-on workshop on practical machine learning for environmental use-cases.",
        info: "Innovation Lab"
      },
      {
        status: "past",
        date: "February 2026",
        title: "EcoTech Opening Day",
        text: "Official launch featuring demos, department showcases, and collaboration sessions.",
        info: "ENPC Campus"
      }
    ]
  },

  team: {
    members: [
      {
        name: "Mezaache Mohamed",
        role: "President",
        bio: "Leads EcoTech's strategy and partnerships in sustainable technology projects.",
        image: "media/team/Mezaache Mohamed.jpg",
        socials: { linkedin: "https://www.linkedin.com/in/mezaache-mohamed-261433352", instagram: "https://instagram.com/mez_moh1" }
      },
      {
        name: "Adjal Ouissal",
        role: "Vice President",
        bio: "Coordinates cross-functional teams and innovation initiatives.",
        image: "media/team/Adjal Ouissal.jpg",
        socials: { linkedin: "https://www.linkedin.com/in/adjal-ouissal-a06b282a1/", instagram: "https://instagram.com/wissou_ad" }
      },
      {
        name: "Mansouri Ihcen",
        role: "HR & Project Coordinator",
        bio: "Supports team operations, project planning, and event execution.",
        image: "media/team/Mansouri Ihcen.jpg",
        socials: { linkedin: "https://www.linkedin.com/in/ihcen-mansouri-41510a390", instagram: "https://www.instagram.com/ihxeene" }
      },
      {
        name: "Hounaida Belhour",
        role: "Office Secretary",
        bio: "Contributes to organizational excellence and environmental engineering outreach.",
        image: "media/team/Hounaida Belhour.jpg",
        socials: { linkedin: "https://www.linkedin.com/in/hounaida-belhour-4a8b5b350/", instagram: "https://instagram.com/blhounaida" }
      }
    ]
  }
};
