// backend/seedCourses.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course'); // Adjust the path as necessary

dotenv.config();

const sampleCourses = [
  {
    title: "Introduction to JavaScript",
    description: "Learn the basics of JavaScript, the most popular programming language for web development.",
    price: 49.99,
    instructor: "Jane Doe",
    image: "https://via.placeholder.com/400x300"
  },
  {
    title: "Advanced React",
    description: "Deep dive into React and build powerful web applications.",
    price: 99.99,
    instructor: "John Smith",
    image: "https://via.placeholder.com/400x300"
  },
  {
    title: "Node.js for Beginners",
    description: "Master the fundamentals of Node.js and build server-side applications.",
    price: 59.99,
    instructor: "Alice Johnson",
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
 
