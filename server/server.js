const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const userRoutes = require('./routes/userRoutes');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Sample route
// app.get('/', (req, res) => {
//     res.send('Welcome to the MERN Stack API');
// });

app.get('/', (req, res) => {
    res.redirect('http://localhost:3000'); // Replace with your frontend URL
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});