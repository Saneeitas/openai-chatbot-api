#openai-chatbot-api

# AI Response and Follow-Up Questions API

This project is an API that uses the OpenAI API to generate responses and follow-up questions based on user input. It is built using Node.js and Express.

## Setup Instructions

1. Clone the repository:
    ```sh
    git clone https://github.com/Saneeitas/openai-chatbot-api.git
    cd <your dir name>
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your OpenAI API key:
    ```env
    OPENAI_API_KEY=your-openai-api-key
    ```

4. Start the server:
    ```sh
    npm start
    ```

5. The API will be running on `http://localhost:3000`.

## API Endpoint

### POST /api/generate-response

#### Request Body
```json
{
    "message": "Your message here"
}
