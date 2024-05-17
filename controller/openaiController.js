const OpenAI = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const generateResponse = async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: `${userMessage}\nRespond with an answer and suggest four follow-up questions.` }],
            max_tokens: 150,
            temperature: 0.7,
        });

        const responseText = completion.choices[0].message.content.trim();

        const responseLines = responseText.split('\n').filter(line => line.trim() !== '');
        const mainResponse = responseLines[0];
        const followUpQuestions = responseLines.slice(1, 5).map(line => ({ question: line.trim() }));

        res.json({
            response: mainResponse,
            follow_up_questions: followUpQuestions
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request' });
    }
};

module.exports = {
    generateResponse,
};
