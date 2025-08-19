// Exportar la función de inicialización para que pueda ser llamada después de cargar el componente
function initChat() {
  const chatWidget = document.getElementById('chat-widget');
  const chatBubble = document.getElementById('chat-bubble');
  const minimizeButton = document.getElementById('chat-minimize');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatMessages = document.getElementById('chat-messages');

  // Maximizar el chat
  chatBubble.addEventListener('click', () => {
    chatWidget.classList.remove('minimized');
    chatInput.focus();
  });

  // Minimizar el chat
  minimizeButton.addEventListener('click', () => {
    chatWidget.classList.add('minimized');
  });

  // Función para enviar un mensaje
  function sendMessage() {
    const message = chatInput.value.trim();
    if (message.length === 0) return;

    // Añadir mensaje del usuario
    addMessage(message, 'user');
    
    // Limpiar input
    chatInput.value = '';
    
    // Procesar y responder
    setTimeout(() => {
      const response = getBotResponse(message);
      addMessage(response, 'bot');
    }, 500);
  }

  // Añadir mensaje al chat
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
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Respuestas de la IA (simplificado)
  // TODO: Implementar Gemini (v1)
  // TODO: Implementar OpenSource AI (v2)
  function getBotResponse(message) {
    message = message.toLowerCase();
    
    // Respuestas predefinidas para preguntas comunes
    if (message.includes('hola') || message.includes('buenas')) {
      return '¡Hola! ¿En qué puedo ayudarte sobre LinuxUPC?';
    } 
    else if (message.includes('qué es linux') || message.includes('que es linux')) {
      return 'Linux es un sistema operativo de código abierto basado en Unix, creado por Linus Torvalds en 1991.';
    }
    else if (message.includes('qué es linuxupc') || message.includes('que es linuxupc')) {
      return 'LinuxUPC es una asociación universitaria de la UPC dedicada a la promoción del software libre y Linux. Organizamos talleres, eventos y ayudamos a la comunidad universitaria con temas relacionados a Linux y el software libre.';
    }
    else if (message.includes('actividad') || message.includes('evento') || message.includes('taller')) {
      return 'Organizamos diversas actividades como Install Parties, talleres de programación, charlas sobre software libre, y eventos de networking. ¡Consulta nuestra sección de actividades para ver los próximos eventos!';
    }
    else if (message.includes('contacto') || message.includes('unirme') || message.includes('participar')) {
      return 'Para unirte o contactar con nosotros puedes escribir a nuestro correo linuxupc@gmail.com o seguirnos en redes sociales. ¡Estamos abiertos a nuevos miembros interesados en Linux y el software libre!';
    }
    else if (message.includes('ubicacion') || message.includes('donde') || message.includes('lugar')) {
      return 'Nuestra sede principal está en el Campus Norte de la UPC, en Barcelona. Nos reunimos regularmente en la sala B5-S102.';
    }
    else {
      return 'Lo siento, no tengo información específica sobre eso. ¿Puedes reformular tu pregunta o preguntarme sobre actividades, qué es LinuxUPC, o cómo contactarnos?';
    }
  }

  // Eventos para enviar mensajes
  chatSend.addEventListener('click', sendMessage);
  
  chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
}

// Ejecutar inicialización si se carga el script después del DOM
document.addEventListener('DOMContentLoaded', function() {
  // Solo inicializar si el componente ya está en el DOM
  if (document.getElementById('chat-widget')) {
    initChat();
  }
  // Si no, se inicializará cuando el componente se cargue mediante components.js
});

// Exponer la función de inicialización globalmente
window.initChat = initChat;
