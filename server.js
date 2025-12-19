const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`🚀 Server started successfully!`);
  console.log(`📡 App listening at http://localhost:${port}`);
  console.log(`🔗 Open your browser and visit: http://localhost:${port}`);
});