import { GoogleGenerativeAI } from "@google/generative-ai";
import { first_prompt, welcomeMessage} from './geminiBehaviour.js';

// API key for Gemini
// TODO: Change this to a secure method of storing the API key
const GEMINI_API_KEY = "..."; 

// Initialize Gemini api client
const ai = new GoogleGenerativeAI(GEMINI_API_KEY);

// Select model
const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });

// Initialize the chat session
let chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: first_prompt }],
    },
    {
      role: "model",
      parts: [{ text: welcomeMessage }],
    },
  ],
  generationConfig: {
    maxOutputTokens: 800,
  },
});


/**
 * Gets a response from the Gemini API
 * @param {string} message - The user's message
 * @returns {Promise<string>} - The bot's response
 */
export async function getGeminiResponse(userMessage) {
  try {
    const result = await chat.sendMessage(userMessage);
    const responseText = result.response.text();
    return responseText;
    
  } catch (error) {
    console.error('Error getting Gemini response:', error);
    return 'Sorry, an error occurred while connecting to the virtual assistant.';
  }
}

/**
 * Resets the chat history keeping only the initial prompt
 */
export function resetChatHistory() {
  chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: first_prompt }],
      },
      {
        role: "model",
        parts: [{ text: welcomeMessage }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 800,
    },
  });
}