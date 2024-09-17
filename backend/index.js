const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api', (req, res) => { 
    res.send({message: "Hello from Node.js backend!"});
})

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});