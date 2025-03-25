const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');

dotenv.config();

const sampleCourses = [
  // Web Development Courses
  {
    title: "HTML & CSS Fundamentals",
    description:
      "Learn the basics of HTML and CSS to build responsive and accessible web pages.",
    price: 29.99,
    instructor: "Jane Doe",
    category: "web",
    icon: "/icons/html-css.png", // Place this image in public/icons folder
    image: "https://linknagar.wordpress.com/wp-content/uploads/2025/03/chatgpt-image-mar-26-2025-02_21_51-am.png"
  },
  {
    title: "JavaScript Essentials",
    description:
      "Master the fundamentals of JavaScript for creating interactive web experiences.",
    price: 39.99,
    instructor: "John Smith",
    category: "web",
    icon: "/icons/javascript.png",
    image: "https://linknagar.wordpress.com/wp-content/uploads/2025/03/chatgpt-image-mar-26-2025-02_24_56-am.png"
  },
  {
    title: "React for Beginners",
    description:
      "Dive into React and learn how to build modern, responsive web applications.",
    price: 49.99,
    instructor: "Alice Johnson",
    category: "web",
    icon: "/icons/react.png",
    image: "https://linknagar.wordpress.com/wp-content/uploads/2025/03/chatgpt-image-mar-26-2025-02_28_34-am.png"
  },

  // Mobile Development Courses
  {
    title: "Intro to Mobile App Development",
    description:
      "Get started with building cross-platform mobile applications using React Native.",
    price: 59.99,
    instructor: "Michael Brown",
    category: "mobile",
    icon: "/icons/mobile.png",
    image: "https://via.placeholder.com/400x300"
  },
  {
    title: "Advanced Android Development",
    description:
      "Learn advanced techniques to build high-performance Android applications.",
    price: 69.99,
    instructor: "Sarah Lee",
    category: "mobile",
    icon: "/icons/android.png",
    image: "https://via.placeholder.com/400x300"
  },
  {
    title: "iOS Development with Swift",
    description:
      "Master Swift and develop robust iOS applications with a focus on modern design.",
    price: 79.99,
    instructor: "David Kim",
    category: "mobile",
    icon: "/icons/ios.png",
    image: "https://via.placeholder.com/400x300"
  },

  // Data Science Courses
  {
    title: "Data Science Foundations",
    description:
      "Understand the fundamentals of data science, including data analysis and visualization.",
    price: 89.99,
    instructor: "Emily Davis",
    category: "data",
    icon: "/icons/data.png",
    image: "https://via.placeholder.com/400x300"
  },
  {
    title: "Python for Data Analysis",
    description:
      "Learn how to use Python and popular libraries to analyze and visualize data effectively.",
    price: 99.99,
    instructor: "Robert Wilson",
    category: "data",
    icon: "/icons/python.png",
    image: "https://via.placeholder.com/400x300"
  },

  // Cloud Computing Courses
  {
    title: "Cloud Computing Basics",
    description:
      "An introduction to cloud services, deployment, and management on major platforms.",
    price: 79.99,
    instructor: "Laura Martinez",
    category: "cloud",
    icon: "/icons/cloud.png",
    image: "https://via.placeholder.com/400x300"
  },

  // Cybersecurity Courses
  {
    title: "Cybersecurity Fundamentals",
    description:
      "Learn the key principles of cybersecurity and best practices to protect systems and data.",
    price: 69.99,
    instructor: "Chris Johnson",
    category: "cybersecurity",
    icon: "/icons/cybersecurity.png",
    image: "https://via.placeholder.com/400x300"
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
