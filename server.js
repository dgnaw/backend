const express = require('express');
const cors = require('cors');  // Import the CORS package
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all origins (or specify your frontend URL for more security)
app.use(cors({
  origin: 'https://frontend-git-dgnaw-dev.apps.rm3.7wse.p1.openshiftapps.com', // Set your frontend URL here
}));

// Route API
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Backend!' });
});

// Start server
app.listen(port, () => {
  console.log(`Backend server đang chạy tại cổng ${port}`);
});
