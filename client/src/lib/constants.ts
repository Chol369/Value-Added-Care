// Site information
export const SITE_NAME = "Value Added Care";
export const SITE_TAGLINE = "Connecting People, Empowering Lives";
export const SITE_DESCRIPTION = "At Value Added Care, we're dedicated to providing ethical, compassionate, and personalized care services that enhance the quality of life for individuals and families.";

// Feature items for the home page
export const FEATURES = [
  {
    title: "Personalized Care",
    description: "We match you with carers who fit your specific needs, preferences, and personality for the best possible support.",
    icon: "ri-home-heart-line",
    bgColor: "bg-[#8dc63f]",
  },
  {
    title: "NDIS Registered",
    description: "As a registered NDIS provider, we ensure all our services meet the highest standards of quality and compliance.",
    icon: "ri-shield-check-line",
    bgColor: "bg-[#6b2d90]",
  },
  {
    title: "Dedicated Support Team",
    description: "Our compassionate team is always available to address your concerns and ensure your care experience exceeds expectations.",
    icon: "ri-team-line",
    bgColor: "bg-[#5e8db3]",
  },
];

// Testimonials for the home page
export const TESTIMONIALS = [
  {
    text: "The support workers from Value Added Care have been incredible. They truly understand my son's needs and have become like family to us. I can't recommend them highly enough.",
    name: "Sarah M.",
    role: "Parent of NDIS Participant",
    iconBg: "bg-[#6b2d90]",
  },
  {
    text: "The team at VAC genuinely cares about my wellbeing. They take the time to understand what I need and match me with carers who share my interests. It's made a huge difference in my life.",
    name: "David R.",
    role: "NDIS Participant",
    iconBg: "bg-[#8dc63f]",
  },
  {
    text: "As a support coordinator, I've worked with many providers, but VAC stands out for their professionalism and genuine care. They're responsive, reliable, and truly put participants first.",
    name: "Jennifer L.",
    role: "Support Coordinator",
    iconBg: "bg-[#5e8db3]",
  },
];

// Values for the about page
export const VALUES = [
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our actions and relationships, ensuring transparency, honesty, and accountability in everything we do.",
    icon: "ri-heart-line",
    bgColor: "bg-[#6b2d90]",
  },
  {
    title: "Compassion",
    description: "We approach every individual with genuine empathy, kindness, and respect, recognizing their unique experiences and responding with care that comes from the heart.",
    icon: "ri-hand-heart-line",
    bgColor: "bg-[#8dc63f]",
  },
  {
    title: "Innovation",
    description: "We continuously seek new and better ways to provide care, embracing creativity and learning to improve outcomes for the people we support.",
    icon: "ri-lightbulb-line",
    bgColor: "bg-[#5e8db3]",
  },
];

// Leadership team for the about page
export const LEADERSHIP_TEAM = [
  {
    name: "Emily Johnson",
    role: "Chief Executive Officer",
    description: "With over 15 years of experience in disability and care services, Emily leads our organization with passion and vision.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    description: "Michael ensures our services run smoothly and efficiently while maintaining our high standards of care.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Sarah Rodriguez",
    role: "Support Coordinator Manager",
    description: "Sarah leads our support coordination team, ensuring participants receive the right services for their individual goals.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

// Services for the services page
export const SERVICES = [
  {
    title: "In-Home & Community Support",
    description: "Our dedicated support workers assist with daily activities, household tasks, and community participation, helping you live comfortably at home while staying connected to your community.",
    icon: "ri-home-heart-line",
    bgColor: "bg-[#6b2d90]",
    image: "https://images.unsplash.com/photo-1556758303-9582c66e053b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Assistance with personal care and daily living",
      "Household task support",
      "Community access and social participation",
    ],
  },
  {
    title: "Personal Care Assistance",
    description: "Our respectful, trained carers provide sensitive personal care assistance, maintaining your dignity and independence while ensuring your needs are met.",
    icon: "ri-user-heart-line",
    bgColor: "bg-[#8dc63f]",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Bathing and personal hygiene support",
      "Dressing and grooming assistance",
      "Medication reminders and monitoring",
    ],
  },
  {
    title: "Respite & Companionship",
    description: "Our companionship services provide meaningful social interaction and engagement, while respite care gives family carers the break they need.",
    icon: "ri-chat-smile-3-line",
    bgColor: "bg-[#5e8db3]",
    image: "https://images.unsplash.com/photo-1516727003284-a96541e51e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Regular social visits and companionship",
      "Short-term and planned respite care",
      "Engaging activities based on interests",
    ],
  },
  {
    title: "Employment & Skills Development",
    description: "We help build practical skills for employment and independent living, tailored to your goals and aspirations.",
    icon: "ri-briefcase-line",
    bgColor: "bg-[#6b2d90]",
    image: "https://images.unsplash.com/photo-1571724077256-9ac88771c53e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Job readiness training and support",
      "Life skills development",
      "Workplace support and coaching",
    ],
  },
  {
    title: "Allied Health & Therapy Support",
    description: "We coordinate access to qualified allied health professionals who provide evidence-based therapies and interventions to improve your health and wellbeing.",
    icon: "ri-mental-health-line",
    bgColor: "bg-[#8dc63f]",
    image: "https://images.unsplash.com/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Physiotherapy services",
      "Occupational therapy",
      "Speech therapy",
      "Behavioral support",
      "Psychological services",
      "Therapy program coordination",
    ],
    fullWidth: true,
  },
];

// Differentiators for the Why Choose Us page
export const DIFFERENTIATORS = [
  {
    title: "Personalized Matching",
    description: "We carefully match support workers to participants based on needs, interests, and personality, ensuring a natural and effective relationship.",
    icon: "ri-user-search-line",
    bgColor: "bg-[#6b2d90]",
  },
  {
    title: "Ethical Care Standards",
    description: "Our support workers adhere to the highest ethical standards, with comprehensive screening, training, and ongoing professional development.",
    icon: "ri-shield-star-line",
    bgColor: "bg-[#8dc63f]",
  },
  {
    title: "Flexible Support Options",
    description: "We offer adaptable care schedules and service plans that can evolve with your changing needs, ensuring continuity of quality care.",
    icon: "ri-calendar-check-line",
    bgColor: "bg-[#5e8db3]",
  },
  {
    title: "Dedicated Support Team",
    description: "Our responsive coordination team is always available to address concerns, make adjustments, and ensure your experience exceeds expectations.",
    icon: "ri-customer-service-2-line",
    bgColor: "bg-[#6b2d90]",
  },
];

// Quality assurance items for the Why Choose Us page
export const QUALITY_ASSURANCE = [
  {
    title: "NDIS Registered Provider",
    description: "As a registered NDIS provider, we meet stringent quality and safeguarding requirements, ensuring all our services comply with industry best practices.",
    icon: "ri-verified-badge-line",
    bgColor: "bg-[#6b2d90]",
  },
  {
    title: "Thorough Staff Vetting",
    description: "All our support workers undergo comprehensive background checks, reference verification, and regular performance reviews to ensure the highest standards.",
    icon: "ri-user-star-line",
    bgColor: "bg-[#8dc63f]",
  },
  {
    title: "Continuous Improvement",
    description: "We actively seek and respond to feedback from participants and families, constantly refining our services to better meet your needs.",
    icon: "ri-feedback-line",
    bgColor: "bg-[#5e8db3]",
  },
];

// Testimonials for the Why Choose Us page
export const WHY_CHOOSE_US_TESTIMONIALS = [
  {
    text: "Finding VAC was life-changing for our family. Their personalized approach meant they found the perfect support worker for my son's unique needs. The difference in his confidence and independence has been remarkable.",
    name: "Rebecca T.",
    role: "Mother of NDIS Participant",
    iconBg: "bg-[#6b2d90]",
  },
  {
    text: "As someone with complex care needs, I've worked with many providers over the years. VAC stands out for their reliability and the genuine care their staff show. They don't just provide a service – they build relationships.",
    name: "Michael P.",
    role: "NDIS Participant",
    iconBg: "bg-[#8dc63f]",
  },
];

// Contact information
export const CONTACT_INFO = {
  address: "123 Care Avenue, Melbourne VIC 3000, Australia",
  phone: "(03) 1234 5678",
  email: "info@valueaddedcare.com.au",
  hours: "Monday - Friday: 9:00 AM - 5:00 PM",
  hoursNote: "After hours support available for clients",
};

// Job benefits
export const JOB_BENEFITS = [
  "Competitive pay rates",
  "Flexible working arrangements",
  "Ongoing training and development",
  "Supportive team environment",
];

// Enquiry options
export const ENQUIRY_OPTIONS = [
  { value: "services", label: "NDIS Services" },
  { value: "employment", label: "Employment Opportunities" },
  { value: "partnership", label: "Partnership/Collaboration" },
  { value: "other", label: "Other" },
];
