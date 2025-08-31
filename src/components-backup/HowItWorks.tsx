import Header from './Header';
import Footer from './Footer';

type HowItWorksProps = {
  onBackToHome: () => void;
  onSearchClick: () => void;
  onBusinessRegisterClick?: () => void;
};

export default function HowItWorks({ onBackToHome, onSearchClick, onBusinessRegisterClick }: HowItWorksProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header 
        onLogoClick={onBackToHome}
        onLoginClick={() => console.log('Login clicked')}
        onBusinessRegisterClick={onBusinessRegisterClick || (() => console.log('Register business clicked'))}
      />
      
      <div className="flex flex-col items-center justify-start px-4 sm:px-8 py-12 sm:py-20 w-full">
        <div className="max-w-4xl w-full">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-4xl mb-4">🚀</div>
            <h1 className="font-bold text-3xl sm:text-4xl text-[#005a22] mb-4">
              Como o Imigrei funciona
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A ponte que conecta brasileiros no exterior aos serviços que eles confiam.
            </p>
          </div>

          {/* Main Content Blocks */}
          <div className="space-y-12 mb-16">
            
            {/* Bloco 1 - Para quem busca */}
            <div className="bg-[#fff8e2] p-8 rounded-2xl">
              <h2 className="font-bold text-2xl text-[#005a22] mb-4">
                Para quem busca
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Brasileiros pelo mundo procuram todos os dias onde comer, comprar, estudar, 
                cuidar da saúde ou resolver burocracias. No Imigrei, eles encontram tudo isso 
                em português, de forma rápida e confiável. Basta buscar por categoria ou 
                localização e, em segundos, achar o que precisam.
              </p>
            </div>

            {/* Bloco 2 - Para quem tem negócio */}
            <div className="bg-[#005a22] p-8 rounded-2xl">
              <h2 className="font-bold text-2xl text-white mb-4">
                Para quem tem negócio
              </h2>
              <p className="text-gray-200 leading-relaxed">
                Aqui está a grande oportunidade: o Imigrei coloca o seu negócio na frente de 
                quem está realmente procurando por ele. De forma 100% gratuita, você cadastra 
                em minutos e já começa a aparecer nas buscas. Não precisa pagar anúncio, não 
                precisa esperar meses — sua visibilidade começa agora.
              </p>
            </div>

            {/* Bloco 3 - O potencial */}
            <div className="bg-gradient-to-br from-[#b0ff0b] to-[#8fd907] p-8 rounded-2xl">
              <h2 className="font-bold text-2xl text-[#005a22] mb-4">
                O potencial
              </h2>
              <p className="text-[#005a22] leading-relaxed">
                Quanto mais negócios entram, mais brasileiros usam, e quanto mais brasileiros 
                usam, mais negócios têm resultado. É um ciclo que faz a comunidade crescer e 
                fortalece todo mundo. O Imigrei é muito mais do que um diretório: é uma vitrine 
                coletiva que multiplica o alcance da sua marca.
              </p>
            </div>
          </div>

          {/* Diagrama/Fluxo */}
          <div className="bg-gray-50 p-8 rounded-2xl mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
                <div className="bg-[#005a22] text-white px-4 py-2 rounded-lg font-medium">
                  👉 Cadastre
                </div>
                <div className="text-gray-400 hidden sm:block">→</div>
                <div className="bg-[#ff6c0e] text-white px-4 py-2 rounded-lg font-medium">
                  Apareça
                </div>
                <div className="text-gray-400 hidden sm:block">→</div>
                <div className="bg-[#b0ff0b] text-[#005a22] px-4 py-2 rounded-lg font-medium">
                  Seja encontrado
                </div>
                <div className="text-gray-400 hidden sm:block">→</div>
                <div className="bg-[#005a22] text-white px-4 py-2 rounded-lg font-medium">
                  Conquiste clientes
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <div className="text-lg">💡</div>
              <p className="text-gray-600 font-medium mt-2">
                Simples, rápido e poderoso.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button
              onClick={onBusinessRegisterClick || (() => console.log('Cadastre seu negócio'))}
              className="bg-[#ff6c0e] text-white font-medium px-8 py-4 rounded-2xl hover:bg-orange-600 transition-colors text-lg"
            >
              Cadastre seu Negócio de Graça
            </button>
          </div>
        </div>
      </div>
      
      <Footer 
        onSearchClick={onSearchClick}
        onBusinessRegisterClick={onBusinessRegisterClick || (() => console.log('Register business clicked'))}
        onHowItWorksClick={() => console.log('How it works clicked')}
        onCountryClick={() => console.log('Country clicked')}
      />
    </div>
  );
}