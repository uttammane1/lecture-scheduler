const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import routes
const instructorRoutes = require('./routes/instructorRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Use API routes
app.use('/api/instructors', instructorRoutes);

const PORT = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
