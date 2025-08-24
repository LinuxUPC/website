import CryptoJS from 'crypto-js';

// Tu clave real de Gemini
const geminiKey = '...'; 

// Una clave de encriptación secreta (¡no la subas a GitHub!)
const encryptionKey = 'LinuxUPCSecretKey123';

// Encriptar la clave
const encryptedKey = CryptoJS.AES.encrypt(geminiKey, encryptionKey).toString();

console.log("Clave encriptada:", encryptedKey);
