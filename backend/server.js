const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send({
        message: "SUCCESS",
        id: Math.random().toString(36).substring(2)
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});