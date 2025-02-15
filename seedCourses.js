const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course'); // Adjust the path as necessary

dotenv.config();

const sampleCourses = [
  // Web Development Courses
  {
    title: "HTML & CSS Fundamentals",
    description: "Learn the basics of HTML and CSS to build responsive and accessible web pages.",
    price: 29.99,
    instructor: "Jane Doe",
    image: "https://via.placeholder.com/400x300",
    category: "web",
    icon: "/icons/html-css.png" // Place this file in your public/icons folder or update URL
  },
  {
    title: "JavaScript Essentials",
    description: "Master the fundamentals of JavaScript, the language that powers dynamic web experiences.",
    price: 39.99,
    instructor: "John Smith",
    image: "https://via.placeholder.com/400x300",
    category: "web",
    icon: "/icons/javascript.png"
  },
  {
    title: "React for Beginners",
    description: "Dive into React and learn how to build modern, responsive web applications.",
    price: 49.99,
    instructor: "Alice Johnson",
    image: "https://via.placeholder.com/400x300",
    category: "web",
    icon: "/icons/react.png"
  },

  // Mobile Development Courses
  {
    title: "Introduction to Mobile App Development",
    description: "Get started with building mobile applications for Android and iOS.",
    price: 59.99,
    instructor: "Michael Brown",
    image: "https://via.placeholder.com/400x300",
    category: "mobile",
    icon: "/icons/mobile.png"
  },
  {
    title: "Advanced Android Development",
    description: "Learn advanced techniques to build high-performance Android apps.",
    price: 69.99,
    instructor: "Sarah Lee",
    image: "https://via.placeholder.com/400x300",
    category: "mobile",
    icon: "/icons/android.png"
  },
  {
    title: "iOS Development with Swift",
    description: "Master Swift and develop robust iOS applications.",
    price: 79.99,
    instructor: "David Kim",
    image: "https://via.placeholder.com/400x300",
    category: "mobile",
    icon: "/icons/ios.png"
  },

  // Data Science Courses
  {
    title: "Data Science Foundations",
    description: "Understand the fundamentals of data science, including data analysis and visualization.",
    price: 89.99,
    instructor: "Emily Davis",
    image: "https://via.placeholder.com/400x300",
    category: "data",
    icon: "/icons/data.png"
  },
  {
    title: "Python for Data Analysis",
    description: "Learn how to use Python and its libraries to analyze and visualize data.",
    price: 99.99,
    instructor: "Robert Wilson",
    image: "https://via.placeholder.com/400x300",
    category: "data",
    icon: "/icons/python.png"
  },

  // Cloud Computing Courses
  {
    title: "Cloud Computing Basics",
    description: "An introduction to cloud services, deployment, and management.",
    price: 79.99,
    instructor: "Laura Martinez",
    image: "https://via.placeholder.com/400x300",
    category: "cloud",
    icon: "/icons/cloud.png"
  },

  // Cybersecurity Courses
  {
    title: "Cybersecurity Fundamentals",
    description: "Learn the key principles of cybersecurity and how to protect systems and data.",
    price: 69.99,
    instructor: "Chris Johnson",
    image: "https://via.placeholder.com/400x300",
    category: "cybersecurity",
    icon: "/icons/cybersecurity.png"
  }
];

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    console.log("Connected to MongoDB");
    // Optional: Clear existing courses
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
