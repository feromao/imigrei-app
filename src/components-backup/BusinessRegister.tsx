import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

type BusinessRegisterProps = {
  onBackToHome: () => void;
};

export default function BusinessRegister({ onBackToHome }: BusinessRegisterProps) {
  const [businessType, setBusinessType] = useState<'online' | 'presencial' | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onLogoClick={onBackToHome}
        onLoginClick={() => console.log('Login clicked')}
        onBusinessRegisterClick={() => console.log('Register business clicked')}
      />
      
      <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-12 sm:py-20 w-full min-h-[calc(100vh-200px)]">
        <div className="max-w-2xl w-full">
          
          {!businessType ? (
            <div className="flex flex-col gap-8 items-center text-center">
              <h1 className="font-['Manrope',_sans-serif] font-bold text-[32px] sm:text-[40px] text-[#005a22] leading-[40px] sm:leading-[48px]">
                Cadastre seu negócio
              </h1>
              
              <p className="font-['Manrope',_sans-serif] text-[18px] text-gray-600 leading-[24px]">
                Primeiro, nos conte que tipo de negócio você possui:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
                <button
                  onClick={() => setBusinessType('presencial')}
                  className="bg-[#005a22] text-white font-['Manrope',_sans-serif] font-medium px-8 py-4 rounded-[24px] hover:bg-[#008934] transition-colors flex-1"
                >
                  Negócio Presencial
                  <span className="block text-[14px] opacity-80 mt-1">Loja física, restaurante, salão</span>
                </button>
                
                <button
                  onClick={() => setBusinessType('online')}
                  className="bg-[#ff6c0e] text-white font-['Manrope',_sans-serif] font-medium px-8 py-4 rounded-[24px] hover:bg-orange-600 transition-colors flex-1"
                >
                  Negócio Online
                  <span className="block text-[14px] opacity-80 mt-1">Serviços remotos, e-commerce</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-8 items-center text-center">
              <h1 className="font-['Manrope',_sans-serif] font-bold text-[32px] sm:text-[40px] text-[#005a22] leading-[40px] sm:leading-[48px]">
                {businessType === 'presencial' ? 'Negócio Presencial' : 'Negócio Online'}
              </h1>
              
              <div className="bg-[#fff8e2] p-8 rounded-[16px] w-full">
                <p className="font-['Manrope',_sans-serif] text-[16px] text-[#005a22] leading-[24px] mb-4">
                  Ótima escolha! Em breve você poderá cadastrar seu negócio {businessType} no Imigrei.
                </p>
                <p className="font-['Manrope',_sans-serif] text-[14px] text-gray-600 leading-[20px]">
                  Nossa plataforma está em desenvolvimento. Deixe seu contato para ser notificado quando estivermos prontos!
                </p>
              </div>
              
              <button
                onClick={() => setBusinessType(null)}
                className="bg-white border-2 border-[#005a22] text-[#005a22] font-['Manrope',_sans-serif] font-medium px-6 py-3 rounded-[24px] hover:bg-[#005a22] hover:text-white transition-colors"
              >
                Voltar
              </button>
            </div>
          )}
        </div>
      </div>
      
      <Footer 
        onSearchClick={onBackToHome}
        onBusinessRegisterClick={() => console.log('Register business clicked')}
        onHowItWorksClick={() => console.log('How it works clicked')}
        onCountryClick={() => console.log('Country clicked')}
      />
    </div>
  );
}