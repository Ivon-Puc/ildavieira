import React, { useEffect, useState } from 'react';
import './ChatbotWidget.scss';

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setHasLoaded(false);
      setShowFallback(false);
      return;
    }

    const timer = window.setTimeout(() => {
      if (!hasLoaded) {
        setShowFallback(true);
      }
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [isOpen, hasLoaded]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleLoad = () => {
    setHasLoaded(true);
    setShowFallback(false);
  };

  const dialogflowUrl = 'https://dialogflow.cloud.google.com/api-client/demo/embedded/96a79b61-798d-4632-a1ce-1c62d81b1553';

  return (
    <>
      {/* Botão flutuante */}
      <button 
        className={`chatbot-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleChatbot}
        aria-label="Abrir chat de atendimento"
        title="Fale conosco"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      {/* Container do chatbot */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Atendimento Escola Ilda Vieira</h3>
            <button 
              onClick={toggleChatbot}
              className="close-button"
              aria-label="Fechar chat"
            >
              ✕
            </button>
          </div>
          <div className="chatbot-content">
            <iframe
              allow="microphone;"
              width="100%"
              height="100%"
              src={dialogflowUrl}
              title="Chatbot Escola Ilda Vieira Vilela"
              onLoad={handleLoad}
            />
            {showFallback && (
              <div className="chatbot-fallback" role="status">
                <p>Não foi possível carregar o atendente automático no momento.</p>
                <p>
                  Acesse diretamente em{' '}
                  <a href={dialogflowUrl} target="_blank" rel="noopener noreferrer">
                    dialogflow.cloud.google.com
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
