export interface OutcomeMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  category: "Reels" | "Campaigns" | "Branding" | "Video Production" | "Instagram handling";
  subtitle: string;
  clientName: string;
  location: string;
  instagramHandle?: string;
  image?: string; // Screenshot of the IG Profile to show inside the phone
  videos: string[]; // List of Reel URLs
  posts?: string[]; // List of Post image URLs
  outcome: {
    metrics: OutcomeMetric[];
    text: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Vidhatri Bhavan ",
    category: "Instagram handling",
    subtitle: "Shivamogga's Iconic South Indian Restaurant",
    clientName: "Vidhatri Bhavan",
    location: "Gandhi Nagar, Jayanagar , Gopala, Vinoba Nagar, Shivamogga",
    instagramHandle: "@vidhatribhavan",
    image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782025134/vidhatribhavan_nwzvbi.jpg",
    videos: [
      "https://res.cloudinary.com/dokrpo5fl/video/upload/v1782025201/vidha-opening_mvxsw9.mp4",
      "https://res.cloudinary.com/dokrpo5fl/video/upload/v1782025448/vid-3_tyixbf.mp4",
      "https://res.cloudinary.com/dokrpo5fl/video/upload/v1782025136/vidhatribhavan-1_e3ijll.mp4"
    ],
    outcome: {
      text: "Achieved massive local virality within 7 days, resulting in packed dining halls from day one, consistent weekend surges, and massive digital engagement with over 300K+ cumulative video views.",
      metrics: [
        { label: "Reach & Views", value: "300K+" },
        { label: "Foot Traffic", value: "3.5x Surge" },
        { label: "Engagement Rate", value: "18.4%" }
      ]
    }
  },
  {
    id: 2,
    title: "Simple One Showroom",
    category: "Instagram handling",
    subtitle: "Electric Scooter Showroom",
    clientName: "Simple One",
    location: "Shivamogga, Karnataka",
    instagramHandle: "@simple_shimoga",
    image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782026974/Simple_one_image_ugzab1.jpg",
    videos: [
      "https://res.cloudinary.com/dokrpo5fl/video/upload/v1782027478/simpel-v-1_hdf1or.mp4",
      "https://res.cloudinary.com/dokrpo5fl/video/upload/v1782027475/simple-v-2_fpw34g.mp4",
      "https://res.cloudinary.com/dokrpo5fl/video/upload/v1782027477/simple-v3_nis6m1.mp4"
    ],
    posts: [
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782027167/722364056_17890546149556356_8182428391365809439_n_tt2vyj.jpg",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782027165/723931213_17890718067556356_6871431121040219254_n_qrmf72.jpg",
      "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782027164/717298293_17889489129556356_4926847847981686736_n_xprniy.jpg"
    ],
    outcome: {
      text: "Designed and executed an organic launch strategy combining cinematic Reels and high-aesthetic grid posts. The campaign generated over 200K+ impressions, established a premium online identity, and led to a sold-out launch week.",
      metrics: [
        { label: "Impressions", value: "200K+" },
        { label: "Enquiries", value: "50+" },
        { label: "Showroom visits", value: "100+" }
      ]
    }
  },
  {
    id: 3,
    title: "Barbell Culture Gym",
    category: "Reels",
    subtitle: "High-Octane Fitness Brand Transformation",
    clientName: "Barbell Culture",
    location: "100ft Road Gopala and Gandhi Nagar, Shivamogga",
    instagramHandle: "@the_barbel_culture",
    image: "https://res.cloudinary.com/dokrpo5fl/image/upload/v1782027770/barbel_gym_wm6zje.jpg",
    videos: [
      "https://res.cloudinary.com/dokrpo5fl/video/upload/v1782028160/barbel-1_rzve22.mp4",
      "https://res.cloudinary.com/dokrpo5fl/video/upload/v1782028257/barbel-2_dgo97v.mp4",
      "https://res.cloudinary.com/dokrpo5fl/video/upload/v1782028455/barbel-3_isvxjp.mp4"
    ],
    outcome: {
      text: "Produced high-energy cinematic promotional videos and motivational short-form videos to drive local community action. Successfully doubled monthly membership sign-ups and boosted brand search query volume.",
      metrics: [
        { label: "Enquiries", value: "200+" },
        { label: "Reels Views", value: "180K+" },
        { label: "Inquiry Growth", value: "+200%" }
      ]
    }
  },
  
];
