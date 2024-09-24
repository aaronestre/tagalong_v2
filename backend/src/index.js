const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({
  path: '../../frontend/.env'
})

const groqRoutes = require('./routes/groqRoutes');
const elevenRoutes = require('./routes/elevenlabsRoutes');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', groqRoutes);
app.use('/eleven', elevenRoutes);

app.get('/', (req, res) => {
  res.send("<h1>Welcome to the backend!</h1>")
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
