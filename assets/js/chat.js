// Importa les funcions necessàries des dels mòduls de l'API de Gemini i del comportament del xat.
import { initializeGemini, getGeminiResponse, resetChatHistory } from './geminiApi.js';
import { welcomeMessage } from './geminiBehaviour.js';

/**
 * Inicialitza el component del xat i gestiona la seva interactivitat.
 * Aquesta funció s'exporta per poder ser cridada després de carregar el component del xat.
 */
function initChat() {
  // Obté les referències als elements del DOM del xat.
  const chatWidget = document.getElementById('chat-widget');
  const chatBubble = document.getElementById('chat-bubble');
  const minimizeButton = document.getElementById('chat-minimize');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatMessages = document.getElementById('chat-messages');

  // Inicialitza la connexió amb l'API de Gemini.
  initializeGemini();

  // Mostra el missatge de benvinguda inicial al xat.
  addMessage(welcomeMessage, 'bot');

  // Afegeix un esdeveniment per maximitzar el xat quan es fa clic a la bombolla.
  chatBubble.addEventListener('click', () => {
    chatWidget.classList.remove('minimized');
    chatInput.focus(); // Posa el focus a l'input de text.
  });

  // Afegeix un esdeveniment per minimitzar el xat.
  minimizeButton.addEventListener('click', () => {
    chatWidget.classList.add('minimized');
  });

  /**
   * Envia el missatge de l'usuari a l'API de Gemini i mostra la resposta.
   * Aquesta funció és asíncrona per esperar la resposta de l'API.
   */
  async function sendMessage() {
    const message = chatInput.value.trim(); // Obté i neteja el missatge de l'input.
    if (message.length === 0) return; // No fa res si el missatge és buit.

    // Afegeix el missatge de l'usuari a la finestra del xat.
    addMessage(message, 'user');
    
    // Neteja el camp d'entrada de text.
    chatInput.value = '';
    
    // Mostra l'indicador de "escrivint...".
    const typingIndicator = showTypingIndicator();
    
    try {
      // Obté la resposta de l'API de Gemini.
      const response = await getGeminiResponse(message);
      
      // Elimina l'indicador de "escrivint...".
      typingIndicator.remove();
      
      // Afegeix la resposta del bot a la finestra del xat.
      addMessage(response, 'bot');
    } catch (error) {
      console.error('Error getting response:', error);
      
      // Elimina l'indicador de "escrivint..." en cas d'error.
      typingIndicator.remove();
      
      // Mostra un missatge d'error a l'usuari.
      addMessage('Ho sento, ha ocorregut un error en processar la teva consulta.', 'bot');
    }
  }

  /**
   * Afegeix un missatge a la finestra del xat.
   * @param {string} text - El text del missatge.
   * @param {string} sender - El remitent del missatge ('user' o 'bot').
   */
  function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    
    contentDiv.appendChild(paragraph);
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Fa scroll automàtic cap avall per mostrar l'últim missatge.
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  /**
   * Mostra un indicador visual de que el bot està "escrivint".
   * @returns {HTMLElement} L'element de l'indicador per poder eliminar-lo posteriorment.
   */
  function showTypingIndicator() {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'bot', 'typing-indicator');
    
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('message-content');
    
    const indicator = document.createElement('div');
    indicator.classList.add('typing');
    
    // Crea els tres punts de l'animació.
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span');
      indicator.appendChild(dot);
    }
    
    contentDiv.appendChild(indicator);
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Fa scroll automàtic cap avall.
    chatMessages.scrollTop = chatMessages.scrollHeight;

    return messageDiv;
  }

  // Afegeix esdeveniments per enviar el missatge (clic al botó o prémer Enter).
  chatSend.addEventListener('click', sendMessage);
  
  chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
}

// Executa la inicialització del xat un cop el contingut del DOM s'ha carregat.
document.addEventListener('DOMContentLoaded', function() {
  // Només inicialitza si el component del xat ja existeix al DOM.
  if (document.getElementById('chat-widget')) {
    initChat();
  }
  // Si no, s'inicialitzarà quan el component es carregui mitjançant components.js
});

// Exposa la funció d'inicialització globalment per poder-la cridar des d'altres scripts.
window.initChat = initChat;
