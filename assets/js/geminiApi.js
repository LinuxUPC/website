import { GoogleGenerativeAI } from "@google/generative-ai";
import { first_prompt, welcomeMessage} from './geminiBehaviour.js';
import CryptoJS from 'crypto-js';

// URL of the Gist where the encrypted key is located.
const GIST_URL = 'https://gist.githubusercontent.com/PokeDavid04/1582817ad9a201a135672195bdcf197d/raw/5468d77694891cee191e32c54b91fdc0c0fd18e6/gemini_key.txt';

// The hardcoded encryption key for decryption.
const ENCRYPTION_KEY = 'LinuxUPCSecretKey123';

// Declare global variables for the API client and chat object.
// They will be initialized once the API key is loaded.
let ai;
let chat;
let model;

// State to track if the chat is ready for messages.
let isChatReady = false;

/**
 * Initializes the Gemini API by loading the key from the Gist.
 */
export async function initializeGemini() {
  try {
    // 1. Get the encrypted key from the Gist
    const response = await fetch(GIST_URL);
    const encryptedKey = await response.text();

    // 2. Decrypt the key
    const decryptedKey = CryptoJS.AES.decrypt(encryptedKey, ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8);

    // 3. Initialize the API with the decrypted key
    ai = new GoogleGenerativeAI(decryptedKey);
    model = ai.getGenerativeModel({ model: "gemini-2.0-flash-lite" });

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

    isChatReady = true;

    console.log("Gemini API initialized successfully.");
  } catch (error) {
    console.error("Error initializing Gemini API:", error);
  }
}

/**
 * Gets a response from the Gemini API
 * @param {string} message - The user's message
 * @returns {Promise<string>} - The bot's response
 */
export async function getGeminiResponse(userMessage) {
  if (!isChatReady) {
    return "L'assistent virtual encara s'està inicialitzant. Si us plau, espera uns moments i torna-ho a intentar.";
  }

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