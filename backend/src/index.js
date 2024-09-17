const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({
  path: '../frontend/.env'
})

const groqRoutes = require('./routes/groqRoutes');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', groqRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
