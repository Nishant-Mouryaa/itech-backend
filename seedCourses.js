const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');

dotenv.config();

const sampleCourses = [
  // Web Development Courses
  {
    title: "HTML & CSS Fundamentals",
    description: "Learn the basics of HTML and CSS to build responsive and accessible web pages.",
    longDescription: "This comprehensive course takes you from HTML/CSS basics to advanced responsive design techniques. You'll build real-world projects while learning semantic HTML, CSS Grid, Flexbox, animations, and accessibility best practices.",
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    instructor: "Jane Doe",
    instructorAvatar: "/avatars/jane-doe.jpg",
    instructorTitle: "Senior Frontend Developer",
    instructorBio: "Jane has 8+ years of experience building web applications for Fortune 500 companies. She specializes in creating accessible, performant web experiences.",
    category: "web",
    level: "Beginner",
    duration: "8 hours",
    lessonsCount: 42,
    videoHours: 6.5,
    resourcesCount: 12,
    students: 1250,
    rating: 4.7,
    reviewsCount: 342,
    icon: "/icons/html-css.png",
    image: "https://linknagar.wordpress.com/wp-content/uploads/2025/04/chatgpt-image-apr-5-2025-12_15_15-am.png",
    previewVideo: "https://youtube.com/embed/htmlcssdemo",
    learningOutcomes: [
      "Build responsive websites with HTML5 & CSS3",
      "Master CSS Grid and Flexbox layouts",
      "Implement animations and transitions",
      "Create accessible web content",
      "Optimize sites for performance"
    ],
    requirements: [
      "Basic computer skills",
      "No prior coding experience needed",
      "Text editor (we recommend VS Code)"
    ],
    curriculum: [
      {
        title: "HTML Fundamentals",
        lessons: [
          { title: "Introduction to HTML", duration: "12:45" },
          { title: "HTML Document Structure", duration: "18:30" },
          { title: "Working with Text and Links", duration: "15:20" }
        ]
      },
      {
        title: "CSS Styling",
        lessons: [
          { title: "CSS Selectors and Properties", duration: "22:10" },
          { title: "The Box Model", duration: "25:45" },
          { title: "Positioning Elements", duration: "19:30" }
        ]
      }
    ],
    reviews: [
      {
        userName: "Alex Johnson",
        userAvatar: "/avatars/alex-johnson.jpg",
        rating: 5,
        date: "2023-05-15",
        content: "This course completely changed my approach to web development. The instructor explains concepts clearly with practical examples."
      },
      {
        userName: "Sam Wilson",
        userAvatar: "/avatars/sam-wilson.jpg",
        rating: 4,
        date: "2023-04-22",
        content: "Great content, but some sections could use more advanced examples. Overall very helpful for beginners."
      }
    ],
    isFeatured: true,
    tags: ["frontend", "beginners", "responsive-design"]
  },
  {
    title: "JavaScript Essentials",
    description: "Master the fundamentals of JavaScript for creating interactive web experiences.",
    longDescription: "From variables to async programming, this course covers all JavaScript fundamentals you need to build modern web applications. Includes hands-on projects and real-world coding challenges.",
    price: 39.99,
    originalPrice: 79.99,
    discount: 50,
    instructor: "John Smith",
    instructorAvatar: "/avatars/john-smith.jpg",
    instructorTitle: "JavaScript Architect",
    instructorBio: "John has been teaching JavaScript for 10+ years and has contributed to popular open-source projects like React and Node.js.",
    category: "web",
    level: "Beginner",
    duration: "12 hours",
    lessonsCount: 56,
    videoHours: 10,
    resourcesCount: 18,
    students: 3200,
    rating: 4.8,
    reviewsCount: 890,
    icon: "/icons/javascript.png",
    image: "https://linknagar.wordpress.com/wp-content/uploads/2025/04/chatgpt-image-apr-5-2025-12_21_39-am.png",
    previewVideo: "https://youtube.com/embed/jsessentialsdemo",
    learningOutcomes: [
      "Understand JavaScript fundamentals",
      "Work with arrays, objects and functions",
      "Handle asynchronous operations",
      "Manipulate the DOM",
      "Debug JavaScript effectively"
    ],
    requirements: [
      "Basic HTML/CSS knowledge",
      "No prior JavaScript experience needed"
    ],
    curriculum: [
      {
        title: "JavaScript Basics",
        lessons: [
          { title: "Variables and Data Types", duration: "15:20" },
          { title: "Operators and Expressions", duration: "18:45" }
        ]
      },
      {
        title: "Functions and Scope",
        lessons: [
          { title: "Function Declarations", duration: "22:10" },
          { title: "Arrow Functions", duration: "14:30" }
        ]
      }
    ],
    isFeatured: true,
    tags: ["javascript", "es6", "frontend"]
  },
  {
    title: "React for Beginners",
    description: "Dive into React and learn how to build modern, responsive web applications.",
    longDescription: "Learn React from the ground up with this project-based course. You'll build a complete application while learning components, hooks, context API, and React Router.",
    price: 49.99,
    originalPrice: 99.99,
    discount: 50,
    instructor: "Alice Johnson",
    instructorAvatar: "/avatars/alice-johnson.jpg",
    instructorTitle: "React Specialist",
    instructorBio: "Alice has built React applications for startups and enterprises alike, with a focus on performance optimization.",
    category: "web",
    level: "Intermediate",
    duration: "15 hours",
    lessonsCount: 68,
    videoHours: 12,
    resourcesCount: 24,
    students: 4800,
    rating: 4.9,
    reviewsCount: 1250,
    icon: "/icons/react.png",
    image: "https://linknagar.wordpress.com/wp-content/uploads/2025/04/chatgpt-image-apr-5-2025-12_24_23-am.png",
    previewVideo: "https://youtube.com/embed/reactbeginnersdemo",
    learningOutcomes: [
      "Build React applications from scratch",
      "Understand component lifecycle",
      "Work with React Hooks",
      "Manage state effectively",
      "Integrate with REST APIs"
    ],
    requirements: [
      "JavaScript fundamentals",
      "Basic HTML/CSS knowledge"
    ],
    curriculum: [
      {
        title: "React Fundamentals",
        lessons: [
          { title: "Introduction to React", duration: "20:15" },
          { title: "JSX Syntax", duration: "18:30" }
        ]
      },
      {
        title: "Components and Props",
        lessons: [
          { title: "Functional Components", duration: "25:45" },
          { title: "Class Components", duration: "22:10" }
        ]
      }
    ],
    isFeatured: true,
    tags: ["react", "frontend", "hooks"]
  },
  // Mobile Development Courses
  {
    title: "Intro to Mobile App Development",
    description: "Get started with building cross-platform mobile applications using React Native.",
    longDescription: "This comprehensive course teaches you how to build iOS and Android apps with React Native. You'll learn core concepts, navigation, state management, and how to publish your apps.",
    price: 59.99,
    instructor: "Michael Brown",
    instructorAvatar: "/avatars/michael-brown.jpg",
    instructorTitle: "Mobile Developer",
    instructorBio: "Michael has published over 20 apps to both app stores and specializes in cross-platform development.",
    category: "mobile",
    level: "Beginner",
    duration: "20 hours",
    lessonsCount: 75,
    videoHours: 16,
    resourcesCount: 30,
    students: 2100,
    rating: 4.6,
    reviewsCount: 520,
    icon: "/icons/mobile.png",
    image: "https://linknagar.wordpress.com/wp-content/uploads/2025/04/chatgpt-image-apr-5-2025-12_28_33-am.png",
    previewVideo: "https://youtube.com/embed/reactnativedemo",
    learningOutcomes: [
      "Build cross-platform mobile apps",
      "Understand React Native fundamentals",
      "Implement navigation",
      "Work with device APIs",
      "Publish to app stores"
    ],
    requirements: [
      "JavaScript knowledge",
      "Basic React understanding"
    ],
    tags: ["react-native", "mobile", "cross-platform"]
  },
  // Data Science Courses
  {
    title: "Data Science Foundations",
    description: "Understand the fundamentals of data science, including data analysis and visualization.",
    longDescription: "This course provides a comprehensive introduction to data science, covering data cleaning, analysis, visualization, and basic machine learning concepts using Python.",
    price: 89.99,
    instructor: "Emily Davis",
    instructorAvatar: "/avatars/emily-davis.jpg",
    instructorTitle: "Data Scientist",
    instructorBio: "Emily has worked as a data scientist at Google and now runs her own AI consultancy.",
    category: "data",
    level: "Beginner",
    duration: "25 hours",
    lessonsCount: 90,
    videoHours: 20,
    resourcesCount: 35,
    students: 3800,
    rating: 4.7,
    reviewsCount: 950,
    icon: "/icons/data.png",
    image: "https://via.placeholder.com/400x300",
    previewVideo: "https://youtube.com/embed/datasciencedemo",
    learningOutcomes: [
      "Clean and prepare data",
      "Perform exploratory data analysis",
      "Create data visualizations",
      "Understand basic ML concepts",
      "Present data insights"
    ],
    requirements: [
      "Basic Python knowledge",
      "High school math"
    ],
    tags: ["data-science", "python", "pandas"]
  },
  // Cloud Computing Courses
  {
    title: "Cloud Computing Basics",
    description: "An introduction to cloud services, deployment, and management on major platforms.",
    longDescription: "Learn cloud computing fundamentals with hands-on labs using AWS, Azure and Google Cloud. Covers compute, storage, networking, security and serverless architectures.",
    price: 79.99,
    instructor: "Laura Martinez",
    instructorAvatar: "/avatars/laura-martinez.jpg",
    instructorTitle: "Cloud Architect",
    instructorBio: "Laura is a certified AWS Solutions Architect with experience designing cloud infrastructure for enterprises.",
    category: "cloud",
    level: "Beginner",
    duration: "18 hours",
    lessonsCount: 65,
    videoHours: 15,
    resourcesCount: 28,
    students: 2900,
    rating: 4.5,
    reviewsCount: 680,
    icon: "/icons/cloud.png",
    image: "https://via.placeholder.com/400x300",
    previewVideo: "https://youtube.com/embed/cloudcomputingdemo",
    learningOutcomes: [
      "Understand cloud service models",
      "Deploy virtual machines",
      "Configure cloud storage",
      "Set up networking",
      "Implement security best practices"
    ],
    requirements: [
      "Basic IT knowledge",
      "No cloud experience needed"
    ],
    tags: ["aws", "azure", "cloud"]
  }
];

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    console.log("Connected to MongoDB");
    // Clear existing courses if needed
    await Course.deleteMany({});
    // Insert sample courses
    await Course.insertMany(sampleCourses);
    console.log("Sample courses added.");
    process.exit();
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });