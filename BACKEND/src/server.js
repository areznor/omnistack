const express = require('express');

const app = express();

// GET, POST, PUT, DELETE

app.get('/', (req, res) => {
    return res.json({ message: 'Hello, Omnistack!' })
});

app.listen(3333);