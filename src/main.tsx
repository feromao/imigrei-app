import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: 'green' }}>✅ App Funcionando!</h1>
      <p>Projeto funcionando sem erros de build</p>
      <button 
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
        onClick={() => alert('Clique funcionando!')}
      >
        Teste Clique
      </button>
    </div>
  );
}

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);