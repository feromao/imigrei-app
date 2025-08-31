import { useState, useEffect } from 'react';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import BusinessDetails from './components/BusinessDetails';
import BusinessRegisterWizard from './components/BusinessRegisterWizard';
import HowItWorks from './components/HowItWorks';
import Login from './components/Login';
import MyAccount from './components/MyAccount';

export type SearchParams = {
  query: string;
  location?: string;
  category?: string;
  isOnline?: boolean;
};

type ViewType = 'home' | 'search' | 'business' | 'register-wizard' | 'how-it-works' | 'login' | 'my-account';

// Funções auxiliares para URL params
function getURLParams(): SearchParams {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    query: urlParams.get('q') || '',
    location: urlParams.get('cidade') || '',
    category: urlParams.get('categoria') || '',
    isOnline: urlParams.get('online') === 'true'
  };
}

function setURLParams(params: SearchParams, view?: ViewType) {
  const urlParams = new URLSearchParams();
  
  if (params.query) urlParams.set('q', params.query);
  if (params.location) urlParams.set('cidade', params.location);
  if (params.category) urlParams.set('categoria', params.category);
  if (params.isOnline) urlParams.set('online', 'true');
  
  const newURL = `${window.location.pathname}${urlParams.toString() ? '?' + urlParams.toString() : ''}`;
  window.history.pushState({}, '', newURL);
}

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [searchParams, setSearchParams] = useState<SearchParams>({ query: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Inicializar com parâmetros da URL
  useEffect(() => {
    const urlParams = getURLParams();
    
    // Se há parâmetros de busca na URL, vai direto para busca
    if (urlParams.query || urlParams.location || urlParams.category || urlParams.isOnline) {
      setSearchParams(urlParams);
      setCurrentView('search');
    }
    
    // Escutar mudanças de navegação (back/forward)
    const handlePopState = () => {
      const params = getURLParams();
      
      if (params.query || params.location || params.category || params.isOnline) {
        setSearchParams(params);
        setCurrentView('search');
      } else {
        setCurrentView('home');
        setSearchParams({ query: '' });
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSearch = (params: SearchParams) => {
    setSearchParams(params);
    setCurrentView('search');
    setURLParams(params, 'search');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSearchParams({ query: '' });
    // Limpar URL params
    window.history.pushState({}, '', window.location.pathname);
  };

  const handleViewBusiness = () => {
    setCurrentView('business');
  };

  const handleBackToSearch = () => {
    setCurrentView('search');
  };

  const handleShowBusinessRegister = () => {
    setCurrentView('register-wizard');
  };

  const handleShowHowItWorks = () => {
    setCurrentView('how-it-works');
  };

  const handleShowLogin = () => {
    setCurrentView('login');
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentView('my-account');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('home');
  };

  const handleRegisterSuccess = () => {
    setIsLoggedIn(true);
    setCurrentView('my-account');
  };

  return (
    <div className="bg-white">
      {currentView === 'home' && (
        <Home 
          onSearch={handleSearch} 
          onViewBusiness={handleViewBusiness}
          onBusinessRegisterClick={handleShowBusinessRegister}
          onHowItWorksClick={handleShowHowItWorks}
          isLoggedIn={isLoggedIn}
          onLoginClick={handleShowLogin}
          onMyAccountClick={() => setCurrentView('my-account')}
        />
      )}
      
      {currentView === 'search' && (
        <SearchResults 
          searchParams={searchParams}
          onNewSearch={handleSearch}
          onBackToHome={handleBackToHome}
          onViewBusiness={handleViewBusiness}
        />
      )}
      
      {currentView === 'business' && (
        <BusinessDetails 
          onBackToSearch={handleBackToSearch}
          onBackToHome={handleBackToHome}
        />
      )}
      
      {currentView === 'register-wizard' && (
        <BusinessRegisterWizard 
          onBackToHome={handleBackToHome}
          onSuccess={handleRegisterSuccess}
          onLogin={handleShowLogin}
        />
      )}
      
      {currentView === 'how-it-works' && (
        <HowItWorks 
          onBackToHome={handleBackToHome}
          onSearchClick={() => handleSearch({ query: '', location: '', category: '' })}
          onBusinessRegisterClick={handleShowBusinessRegister}
        />
      )}

      {currentView === 'login' && (
        <Login
          onBackToHome={handleBackToHome}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {currentView === 'my-account' && (
        <MyAccount
          onBackToHome={handleBackToHome}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
}