const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.MONGODB_URI);
const app = express();


app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
});


const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log('Server is running on port' + PORT);
});