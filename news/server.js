const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/ask', async (req, res) => {
    const userInput = req.body.question;
    const apiKey = '';

    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: "gpt-4",
            prompt: userInput,
            max_tokens: 150,
            temperature: 0.7,
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });

        res.json({ answer: response.data.choices[0].text });
    } catch (error) {
        res.status(500).send('Error processing request');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
