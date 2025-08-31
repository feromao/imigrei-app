import { useState, useEffect } from 'react';

export type SearchParams = {
  query: string;
  location?: string;
  category?: string;
  isOnline?: boolean;
};

type ViewType = 'home' | 'search' | 'business' | 'register-wizard' | 'how-it-works' | 'login' | 'my-account';

function SimpleHeader({ title }: { title: string }) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-green-700">Imigrei - {title}</h1>
      </div>
    </header>
  );
}

function SimpleHome({ onNavigate }: { onNavigate: (view: ViewType) => void }) {
  return (
    <div className="min-h-screen bg-white">
      <SimpleHeader title="Home" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-gray-800">
            Encontre negócios brasileiros no exterior
          </h2>
          <p className="text-xl text-gray-600">
            A maior plataforma de negócios brasileiros no exterior
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => onNavigate('search')}
              className="w-full max-w-md mx-auto block bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
            >
              Buscar Negócios
            </button>
            
            <button
              onClick={() => onNavigate('register-wizard')}
              className="w-full max-w-md mx-auto block bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Cadastrar Meu Negócio
            </button>
            
            <button
              onClick={() => onNavigate('login')}
              className="w-full max-w-md mx-auto block border-2 border-green-600 text-green-600 py-3 px-6 rounded-lg hover:bg-green-50 transition-colors"
            >
              Fazer Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SimpleSearch({ onNavigate }: { onNavigate: (view: ViewType) => void }) {
  return (
    <div className="min-h-screen bg-white">
      <SimpleHeader title="Buscar" />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Buscar negócios..."
            className="w-full p-4 border border-gray-300 rounded-lg text-lg"
          />
          <div className="text-center">
            <p className="text-gray-600">Resultados da busca aparecerão aqui</p>
            <button
              onClick={() => onNavigate('home')}
              className="mt-4 text-green-600 hover:underline"
            >
              ← Voltar para Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SimpleLogin({ onNavigate }: { onNavigate: (view: ViewType) => void }) {
  return (
    <div className="min-h-screen bg-white">
      <SimpleHeader title="Login" />
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Entre na sua conta</h2>
          </div>
          
          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Entrar com Google
          </button>
          
          <div className="text-center">
            <button
              onClick={() => onNavigate('home')}
              className="text-green-600 hover:underline"
            >
              ← Voltar para Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  return (
    <div className="bg-white">
      {currentView === 'home' && (
        <SimpleHome onNavigate={setCurrentView} />
      )}
      
      {currentView === 'search' && (
        <SimpleSearch onNavigate={setCurrentView} />
      )}
      
      {currentView === 'login' && (
        <SimpleLogin onNavigate={setCurrentView} />
      )}
      
      {/* Placeholder para outras views */}
      {!['home', 'search', 'login'].includes(currentView) && (
        <div className="min-h-screen bg-white">
          <SimpleHeader title={currentView} />
          <div className="max-w-4xl mx-auto px-4 py-8 text-center">
            <p className="text-gray-600">Página {currentView} em construção</p>
            <button
              onClick={() => setCurrentView('home')}
              className="mt-4 text-green-600 hover:underline"
            >
              ← Voltar para Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}