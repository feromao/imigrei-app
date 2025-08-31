import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-r31p3ypuy6";
import Header from './Header';
import Footer from './Footer';
import AnimatedHeroText from './AnimatedHeroText';
import BusinessCard from './BusinessCard';
import Frame23 from '../imports/Frame23';
import NewSearchComponent from './NewSearchComponent';
import { buscarNegocios, obterCidades, calcularContagens, type Negocio } from '../lib/search';
import { SearchParams } from '../App';
import imigreiLogo from 'figma:asset/e6073ce3ec6ee9c0d9052729b6c469d36ad4f39a.png';

type HomeProps = {
  onSearch: (params: SearchParams) => void;
};

// Componentes de busca movidos para NewSearchComponent.tsx

function HeroSection({ onSearch }: { onSearch: (params: SearchParams) => void }) {
  return (
    <div className="bg-[#005a22] flex flex-col items-center justify-start sm:pb-16 sm:pt-8 sm:px-0 w-full py-[64px] px-[14px] pt-[64px] pr-[14px] pb-[16px] pl-[14px]">
      {/* Logo */}
      <div className="flex flex-col gap-2 items-center justify-start pb-4 sm:pb-8 pt-0 px-0">
        <img 
          src={imigreiLogo} 
          alt="imigrei" 
          className="h-[126px] lg:h-[144px] w-auto"
        />
      </div>
      
      {/* Search Section */}
      <div className="content-stretch flex flex-col gap-6 items-center justify-start w-full max-w-4xl">
        <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-center w-full">
          <AnimatedHeroText />
        </div>
        
        <div className="relative w-full max-w-[600px]">
          <NewSearchComponent onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
}

function CategoryChip({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <div 
      className="bg-[rgba(168,212,181,1)] box-border content-stretch flex gap-2 items-center justify-center px-3 py-1 relative rounded-[24px] shrink-0 cursor-pointer hover:bg-gray-100 transition-colors" 
      onClick={onClick}
    >
      <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] text-nowrap tracking-[0.45px]">
        <p className="leading-[normal] whitespace-pre">{label}</p>
      </div>
    </div>
  );
}

function CategorySection({ onCategoryClick }: { onCategoryClick: (category: string) => void }) {
  const categories = ['Restaurante', 'Manicure', 'Mercado', 'Contador', 'Cabeleireiro', 'Aulas', 'Limpeza'];
  
  return (
    <div className="bg-[#005a22] w-full">
      <div className="flex flex-col items-center justify-center sm:px-8 lg:px-4 py-6 sm:py-10 w-full px-[14px] pt-[32px] pr-[14px] pb-[48px] pl-[14px]">
        <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0 w-full">
          <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-white text-center w-full tracking-[0.45px]">
            <p className="leading-[20px] text-[rgba(255,255,255,1)]">Descubra restaurantes, lojas e profissionais brasileiros fora do Brasil</p>
          </div>
          <div className="content-center flex flex-wrap gap-2 items-center justify-center relative shrink-0 w-full">
            {categories.map((category) => (
              <CategoryChip key={category} label={category} onClick={() => onCategoryClick(category)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CityChip({ city, count, isSelected, onClick }: { 
  city: string; 
  count: number; 
  isSelected?: boolean; 
  onClick?: () => void;
}) {
  return (
    <div 
      className={`${isSelected ? 'bg-[#005a22]' : 'bg-transparent'} box-border content-stretch flex gap-2 items-center justify-center pl-3 pr-1 py-1 relative rounded-[24px] shrink-0 cursor-pointer hover:bg-[#008934] group`}
      onClick={onClick}
    >
      <div aria-hidden="true" className="absolute border border-[#005a22] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className={`font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap tracking-[0.45px] ${isSelected ? 'text-white' : 'text-[#005a22] group-hover:text-white'}`}>
        <p className="leading-[normal] whitespace-pre">{city}</p>
      </div>
      <div className={`${isSelected ? 'bg-[#b0ff0b]' : 'bg-[#005a22]'} box-border content-stretch flex gap-2 items-center justify-center px-3 py-1 relative rounded-[24px] shrink-0`}>
        <div className={`font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap tracking-[0.45px] ${isSelected ? 'text-[#005a22]' : 'text-white'}`}>
          <p className="leading-[normal] whitespace-pre">{count}</p>
        </div>
      </div>
    </div>
  );
}

// BusinessCard é importado do componente padronizado

function BusinessSection({ selectedCity, onCityClick, onViewDetails }: { 
  selectedCity: string;
  onCityClick: (city: string) => void;
  onViewDetails?: () => void; 
}) {
  // Obter cidades reais do sistema de busca
  const cidades = obterCidades();
  const contagens = calcularContagens();
  
  // Mapear cidades com suas contagens reais
  const cities = cidades.map(cidade => ({
    name: cidade,
    count: contagens[cidade] || 0
  }));

  // Buscar negócios da cidade selecionada usando o sistema de busca
  const negociosFiltrados = buscarNegocios(selectedCity);

  return (
    <div className="bg-[#fff8e2] w-full">
      {/* Quadrados Decorativos Brasileiros */}
      <div className="w-full overflow-hidden">
        <Frame23 />
      </div>
      
      <div className="box-border content-stretch flex flex-col gap-8 sm:gap-12 items-center justify-start sm:pb-24 sm:pt-12 px-0 relative shrink-0 w-full pt-[48px] pr-[0px] pb-[32px] pl-[0px]">
        {/* Cities Section */}
        <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0 w-full">
          <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[28px] sm:text-[32px] text-black text-center w-full tracking-[0.45px]">
            <p className="leading-[32px] sm:leading-[36px]">Cidades populares</p>
          </div>
          <div className="content-start flex flex-wrap gap-4 items-start justify-center relative shrink-0 w-full px-4">
            {cities.map((city) => (
              <CityChip 
                key={city.name} 
                city={city.name} 
                count={city.count} 
                isSelected={selectedCity === city.name}
                onClick={() => onCityClick(city.name)}
              />
            ))}
          </div>
        </div>

        {/* Business Cards */}
        <div className="content-stretch flex flex-col gap-6 items-center justify-start relative shrink-0 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-[1200px] px-4 sm:px-0">
            {negociosFiltrados.slice(0, 6).map((negocio) => (
              <BusinessCard key={negocio.id} negocio={negocio} onViewDetails={onViewDetails} variant="grid" />
            ))}
            {negociosFiltrados.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="font-['Manrope',_sans-serif] text-[16px] text-black opacity-70">
                  Nenhum negócio encontrado para {selectedCity}
                </p>
              </div>
            )}
          </div>
          
          {/* Ver mais negócios */}
          {negociosFiltrados.length > 6 && (
            <div className="text-center">
              <button
                onClick={() => onCityClick(selectedCity)}
                className="bg-[#005a22] text-white px-6 py-3 rounded-[24px] text-[14px] font-medium hover:bg-[#008934] transition-colors"
              >
                Ver todos os {negociosFiltrados.length} negócios de {selectedCity}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CallToActionSection({ onBusinessRegisterClick }: { onBusinessRegisterClick?: () => void }) {
  return (
    <div className="bg-[#005a22] w-full">
      <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-12 sm:py-20 w-full">
        <div className="content-stretch flex flex-col gap-8 items-center justify-start relative shrink-0 w-full max-w-4xl">
          <h2 className="font-['Manrope',_sans-serif] font-bold leading-[40px] text-[28px] sm:text-[32px] text-center text-white">
            Cadastre seu negócio gratuitamente
          </h2>
          <div className="font-['Manrope',_sans-serif] font-normal leading-[24px] text-[16px] text-center text-white">
            Conecte-se com brasileiros ao redor do mundo e expanda seu negócio
          </div>
          <div className="content-stretch flex gap-6 items-center justify-center relative shrink-0">
            <div 
              className="bg-[#ff6c0e] box-border content-stretch flex gap-2 items-center justify-center px-6 py-4 relative rounded-[24px] shrink-0 cursor-pointer hover:bg-orange-600"
              onClick={onBusinessRegisterClick}
            >
              <svg className="size-6" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p1df60880} fill="white" />
              </svg>
              <div className="font-['Manrope',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-nowrap text-white">
                <p className="font-['Manrope',_sans-serif] font-normal leading-[normal] text-[16px] whitespace-pre">Cadastrar Negócio Grátis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type HomePropsExtended = HomeProps & {
  onViewBusiness?: () => void;
  onBusinessRegisterClick?: () => void;
  onHowItWorksClick?: () => void;
  isLoggedIn?: boolean;
  onLoginClick?: () => void;
  onMyAccountClick?: () => void;
};

export default function Home({ onSearch, onViewBusiness, onBusinessRegisterClick, onHowItWorksClick, isLoggedIn, onLoginClick, onMyAccountClick }: HomePropsExtended) {
  const [selectedCity, setSelectedCity] = useState('Valencia');
  
  // Garantir que a cidade selecionada existe no dataset
  useEffect(() => {
    const cidades = obterCidades();
    if (cidades.length > 0 && !cidades.includes(selectedCity)) {
      setSelectedCity(cidades[0]);
    }
  }, [selectedCity]);

  const handleCategoryClick = (category: string) => {
    if (category === 'Contador' || category === 'Aulas') {
      onSearch({
        query: '',
        location: '',
        category: category,
        isOnline: true
      });
    } else {
      onSearch({
        query: '',
        location: '',
        category: category,
        isOnline: false
      });
    }
  };

  const handleCityClick = (city: string) => {
    // Se clicou na mesma cidade ou no botão "Ver todos", vai para busca
    if (city === selectedCity) {
      onSearch({
        query: '',
        location: city,
        category: ''
      });
    } else {
      setSelectedCity(city);
    }
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header 
        onLogoClick={() => window.location.reload()}
        onLoginClick={onLoginClick}
        onBusinessRegisterClick={onBusinessRegisterClick}
        isLoggedIn={isLoggedIn}
        onMyAccountClick={onMyAccountClick}
      />
      
      <div className="flex-1">
        <HeroSection onSearch={onSearch} />
        
        <CategorySection onCategoryClick={handleCategoryClick} />
        
        <BusinessSection 
          selectedCity={selectedCity}
          onCityClick={handleCityClick}
          onViewDetails={onViewBusiness}
        />
        
        <CallToActionSection onBusinessRegisterClick={onBusinessRegisterClick} />
      </div>
      
      <Footer 
        onSearchClick={() => onSearch({ query: '', location: '', category: '' })}
        onBusinessRegisterClick={onBusinessRegisterClick}
        onHowItWorksClick={onHowItWorksClick}
        onCountryClick={(country) => onSearch({ query: '', location: country, category: '' })}
      />
    </div>
  );
}