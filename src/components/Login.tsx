import { useState } from 'react';
import Header from './Header';
import { signInWithGoogle } from '@/features/auth/auth';
import { toast } from 'sonner';

type LoginProps = {
  onBackToHome: () => void;
  onLoginSuccess: () => void;
};

export default function Login({ onBackToHome, onLoginSuccess }: LoginProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    
    try {
      await signInWithGoogle();
      onLoginSuccess();
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onLogoClick={onBackToHome} />
      
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#005a22] mb-4">
              Entre na sua conta
            </h1>
            <p className="text-gray-600">
              Acesse sua conta para gerenciar seu negócio
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#fff8e2] p-6 rounded-xl">
              <button
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="w-full bg-white border border-gray-300 py-4 px-6 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-gray-300 border-t-[#005a22] rounded-full animate-spin" />
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                )}
                {isLoading ? 'Entrando...' : 'Entrar com Google'}
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Ao entrar, você aceita nossos{' '}
              <a href="#" className="text-[#005a22] underline">Termos de Uso</a>
              {' '}e{' '}
              <a href="#" className="text-[#005a22] underline">Política de Privacidade</a>
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Ainda não tem conta?</p>
            <button
              onClick={onBackToHome}
              className="text-[#005a22] font-medium underline"
            >
              Cadastre seu negócio gratuitamente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}