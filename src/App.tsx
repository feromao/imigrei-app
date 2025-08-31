import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🚀 Lovable App
          </h1>
          <p className="text-gray-600 mb-6">
            Projeto atualizado para a versão mais recente do Lovable
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-2xl font-semibold text-gray-800">
                Contador: {count}
              </p>
            </div>
            
            <div className="space-x-2">
              <button
                onClick={() => setCount(count + 1)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                +1
              </button>
              <button
                onClick={() => setCount(count - 1)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                -1
              </button>
              <button
                onClick={() => setCount(0)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            ✅ ComponentTagger ativo<br/>
            ✅ Tailwind CSS funcionando<br/>
            ✅ Configuração atualizada
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;