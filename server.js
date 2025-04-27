const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route API
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Backend!' });
});

// Start server
app.listen(port, () => {
  console.log(`Backend server đang chạy tại cổng ${port}`);
});
