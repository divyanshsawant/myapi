const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/hello', (req, res) => {
    const language = req.query.language || '';
    const greeting = getGreeting(language.toLowerCase());
    res.json({ message: greeting });
});

function getGreeting(language) {
    const greetings = {
        english: 'Hello world',
        french: 'Bonjour le monde',
        hindi: 'Namastey sansar'
    };
    return greetings[language] || 'Hello';
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
