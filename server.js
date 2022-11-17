const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());
app.use(express.json());

// connect to mongoose
mongoose.connect('mongodb+srv://jj289:Codesmith123@cluster2.dutgbc6.mongodb.net/dgmuDB');


app.use('/', require('./routes/userRoute'));

app.get('/community',
  (req, res) => {
    res.sendFile(path.resolve(__dirname, './src/components/community.jsx'));
  });

app.listen(3000, () => {
  console.log('express server is running on port 3000')
})