const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        const response = await fetch('http://backend-test:8080');
        const data = await response.json();

        res.send(`
            <h1>${data.message}</h1>
            <p>${data.id}</p>
        `);
    } catch (error) {
    console.error('Frontend error:', error);
    res.send('<h1>Error connecting to backend</h1>');
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running on port ${PORT}`);
});