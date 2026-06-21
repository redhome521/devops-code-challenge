const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        const response = await fetch('http://10.0.3.160:8080');
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

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});