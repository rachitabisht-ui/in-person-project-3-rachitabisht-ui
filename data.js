// Week 4 JavaScript Portfolio Project - Data Organization
// Students will learn to organize their portfolio data using JavaScript objects and arrays

// TODO: Fill in your personal information
const portfolio = {
    owner: {
        name: "Rachita Bisht",
        title: "UX Researcher",
        email: "rachitabisht@berkeley.edu",
        location: "Berkeley, CA",
        bio: "UX researcher with six years of experience, now pursuing a MIMS at UC Berkeley's School of Information. I previously led research at ShareChat, focusing on helping multilingual and first-time internet users become confident content creators."
    },

    skills: [
        "Mixed-Methods User Research",
        "Building Research Functions",
        "Multilingual & Emerging-Market Research",
        "Usability Testing",
        "HTML5 & Semantic Markup",
        "CSS3 & Responsive Design",
        "JavaScript Fundamentals"
    ],

    projects: [
        {
            title: "ShareChat Creator Research",
            description: "Research to understand what holds back first-time creators and how to turn passive viewers into active creators.",
            technologies: ["User Interviews", "Field Research", "Survey Design"],
            completionDate: "2024-06-01",
            featured: true
        },
        {
            title: "Ask Me Twice",
            description: "An LLM evaluation tool built during my internship at the Internet Archive.",
            technologies: ["JavaScript", "Research", "LLM Evaluation"],
            completionDate: "2026-08-15",
            featured: true
        },
        {
            title: "Data-Driven Portfolio",
            description: "This site: portfolio content stored as JavaScript data and rendered with template literals.",
            technologies: ["HTML", "CSS", "JavaScript"],
            completionDate: "2026-09-28",
            featured: false
        }
    ],

    availability: {
        freelance: false,
        fullTime: true,
        partTime: false
    }
};

// Let's explore our data structure in the console
console.log("=== PORTFOLIO DATA EXPLORER ===");
console.log("Full portfolio object:", portfolio);

// TODO: During class, we'll add more console.log() statements to explore the data
// Examples students will try:
// console.log("Owner name:", portfolio.owner.name);
// console.log("First skill:", portfolio.skills[0]);
// console.log("Number of projects:", portfolio.projects.length);

// TODO: Students will learn to access nested properties
// console.log("Email:", portfolio.owner.email);
// console.log("Second project:", portfolio.projects[1]);
// console.log("Available for freelance?", portfolio.availability.freelance);

// TODO: Students will create summary strings using template literals
// let summary = `${portfolio.owner.name} is a ${portfolio.owner.title} with ${portfolio.skills.length} skills.`;
// console.log("Summary:", summary);