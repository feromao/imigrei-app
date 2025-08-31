import { useState, useEffect, useMemo } from 'react';
import svgPaths from "../imports/svg-vkqil028zc";
import Header from './Header';
import Footer from './Footer';
import BusinessCard from './BusinessCard';
import NewSearchComponent from './NewSearchComponent';
import { Button } from './ui/button';
import { SearchParams } from '../App';
import { buscarPorQuery, buscarNegocios, type Negocio } from '../lib/search';

type SearchResultsProps = {
  searchParams: SearchParams;
  onNewSearch: (params: SearchParams) => void;
  onBackToHome: () => void;
  onViewBusiness: () => void;
};

// Componentes de busca antigos removidos - agora utilizamos NewSearchComponent

function Frame73({ onSearch }: { onSearch: (params: SearchParams) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-center relative shrink-0 w-full max-w-[770px] px-4">
      <NewSearchComponent onSearch={onSearch} />
    </div>
  );
}

// Results section
function Frame71({ resultsCount, searchParams }: { resultsCount: number; searchParams: SearchParams }) {
  const getResultsText = () => {
    if (searchParams.isOnline) {
      return `${resultsCount} negócios encontrados`;
    } else if (searchParams.location) {
      return `${resultsCount} negócios encontrados em ${searchParams.location}`;
    }
    return `${resultsCount} negócios encontrados`;
  };

  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start w-full mb-[4px] mt-[0px] mr-[0px] ml-[0px]">
      <div className="font-['Manrope',_sans-serif] font-bold relative shrink-0 text-[16px] text-white w-full tracking-[0.6px]">

      </div>
      <div className="font-['Manrope',_sans-serif] font-medium relative shrink-0 text-[#b0ff0b] text-[14px] w-full tracking-[0.6px]">
        <p className="leading-[20px]">{getResultsText()}</p>
      </div>
    </div>
  );
}

function Frames({ resultsCount, searchParams }: { resultsCount: number; searchParams: SearchParams }) {
  return (
    <div className="w-full sm:basis-0 sm:grow sm:min-h-px sm:min-w-px relative shrink-0" data-name="Frames">
      <Frame71 resultsCount={resultsCount} searchParams={searchParams} />
    </div>
  );
}

// View toggle buttons
function Icones6() {
  return (
    <div className="relative shrink-0 size-4" data-name="icones">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icones">
          <path d={svgPaths.p1bf35080} fill="var(--fill-0, #062f1a)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="bg-white box-border content-stretch flex gap-1 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-50" data-name="Item">
      <Icones6 />
      <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#062f1a] text-[12px] text-nowrap tracking-[0.6px]">
        <p className="leading-[normal] whitespace-pre">Lista</p>
      </div>
    </div>
  );
}

function Icones7() {
  return (
    <div className="relative shrink-0 size-4" data-name="icones">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icones">
          <path d={svgPaths.p34075680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="bg-[#0d2a14] box-border content-stretch flex gap-1 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0" data-name="Item">
      <Icones7 />
      <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-white text-[12px] text-nowrap tracking-[0.6px]">
        <p className="leading-[normal] whitespace-pre">Mapa</p>
      </div>
    </div>
  );
}

function Itens() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start sm:justify-end relative shrink-0 w-full sm:w-auto" data-name="Itens">
      <Item />
      <Item1 />
    </div>
  );
}

function Frame74({ resultsCount, searchParams }: { resultsCount: number; searchParams: SearchParams }) {
  return (
    <div className="content-stretch flex flex-col gap-4 relative shrink-0 w-full max-w-[770px] px-4 px-[16px] py-[0px]">
      {/* Mobile Layout */}
      <div className="sm:hidden w-full">
        <Frames resultsCount={resultsCount} searchParams={searchParams} />
      </div>
      <div className="sm:hidden w-full">
        <Itens />
      </div>
      
      {/* Desktop Layout */}
      <div className="hidden sm:flex sm:flex-row sm:items-end sm:justify-between sm:w-full">
        <Frames resultsCount={resultsCount} searchParams={searchParams} />
        <Itens />
      </div>
    </div>
  );
}



// Todos os componentes de card foram substituídos pelo BusinessCard padronizado

function Frame70({ negocios, onViewBusiness }: { negocios: Negocio[]; onViewBusiness: () => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-[1200px] px-4 sm:px-0">
      {negocios.map((negocio) => (
        <BusinessCard key={negocio.id} negocio={negocio} onViewDetails={onViewBusiness} variant="grid" />
      ))}
    </div>
  );
}

function EmptyState({ onClearFilters }: { onClearFilters: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-6 items-center justify-start relative shrink-0 w-full pt-[10px] pr-[10px] pb-[32px] pl-[10px]">
      <div className="bg-white box-border content-stretch flex flex-col items-center justify-center p-6 sm:p-12 relative rounded-[8px] shrink-0 w-full max-w-[1200px] min-h-[300px]">
        <div className="text-center max-w-md">
          {/* Ícone de busca vazia */}
          <div className="w-16 h-16 mx-auto mb-4 bg-[#f0f9ff] rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-[#005a22] opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <h3 className="font-['Manrope',_sans-serif] font-medium text-[18px] text-[#005a22] mb-3 tracking-[0.45px]">
            Nenhum negócio encontrado
          </h3>
          <p className="font-['Manrope',_sans-serif] text-[14px] text-[#005a22] opacity-70 mb-6 tracking-[0.45px] leading-relaxed">
            Não encontramos negócios que correspondam aos seus critérios de busca. Tente ajustar os filtros ou fazer uma nova busca.
          </p>
          
          <Button
            onClick={onClearFilters}
            className="bg-[#ff6c0e] hover:bg-orange-600 text-white px-6 py-2 text-[14px] tracking-[0.45px]"
          >
            Limpar filtros
          </Button>
        </div>
      </div>
    </div>
  );
}

function Frame90({ negocios, onViewBusiness, onClearFilters }: { 
  negocios: Negocio[]; 
  onViewBusiness: () => void;
  onClearFilters: () => void;
}) {
  if (negocios.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} />;
  }

  return (
    <div className="content-stretch flex flex-col gap-6 items-center justify-start relative shrink-0 w-full pt-[10px] pr-[10px] pb-[32px] pl-[10px]">
      <Frame70 negocios={negocios} onViewBusiness={onViewBusiness} />
    </div>
  );
}

function Frame75({ onSearch, resultsCount, onViewBusiness, searchParams, negocios, onClearFilters }: { 
  onSearch: (params: SearchParams) => void;
  resultsCount: number;
  onViewBusiness: () => void;
  searchParams: SearchParams;
  negocios: Negocio[];
  onClearFilters: () => void;
}) {
  return (
    <div className="bg-[#0d2a14] box-border content-stretch flex flex-col gap-6 sm:gap-8 items-center justify-start px-0 sm:py-12 relative shrink-0 w-full py-[8px] py-[12px] px-[0px]">
      <Frame73 onSearch={onSearch} />
      <Frame74 resultsCount={resultsCount} searchParams={searchParams} />
      <div className="w-full flex justify-center px-[16px] py-[0px] p-[0px]">
        <Frame90 negocios={negocios} onViewBusiness={onViewBusiness} onClearFilters={onClearFilters} />
      </div>
    </div>
  );
}

function Tudo({ onSearch, onBackToHome, resultsCount, onViewBusiness, searchParams, negocios, onClearFilters }: { 
  onSearch: (params: SearchParams) => void;
  onBackToHome: () => void;
  resultsCount: number;
  onViewBusiness: () => void;
  searchParams: SearchParams;
  negocios: Negocio[];
  onClearFilters: () => void;
}) {
  return (
    <div className="flex flex-col items-start justify-start w-full min-h-screen">
      <Header onLogoClick={onBackToHome} />
      <div className="flex-1 w-full">
        <Frame75 
          onSearch={onSearch}
          resultsCount={resultsCount}
          onViewBusiness={onViewBusiness}
          searchParams={searchParams}
          negocios={negocios}
          onClearFilters={onClearFilters}
        />
      </div>
      <Footer />
    </div>
  );
}

export default function SearchResults({ searchParams, onNewSearch, onBackToHome, onViewBusiness }: SearchResultsProps) {

  // Memoizar resultados da busca para melhor performance
  const negocios = useMemo(() => {
    let resultados: Negocio[];
    
    if (searchParams.isOnline) {
      // Pesquisar em qualquer lugar - busca categoria em todas as cidades
      if (searchParams.category) {
        // Se tem categoria específica, busca essa categoria em todas as cidades
        resultados = buscarNegocios(undefined, searchParams.category);
      } else {
        // Se não tem categoria específica, busca todas as categorias online
        resultados = buscarNegocios(undefined, 'Aulas').concat(buscarNegocios(undefined, 'Contador'));
      }
    } else if (searchParams.location && searchParams.category) {
      // Busca por cidade e categoria
      resultados = buscarNegocios(searchParams.location, searchParams.category);
    } else if (searchParams.location) {
      // Busca apenas por cidade
      resultados = buscarNegocios(searchParams.location);
    } else if (searchParams.category) {
      // Busca apenas por categoria
      resultados = buscarNegocios(undefined, searchParams.category);
    } else if (searchParams.query) {
      // Busca por query livre
      resultados = buscarPorQuery(searchParams.query);
    } else {
      // Sem filtros, retorna array vazio para mostrar empty state
      resultados = [];
    }
    
    return resultados;
  }, [searchParams]);

  const handleClearFilters = () => {
    onNewSearch({ 
      query: '',
      location: '',
      category: ''
    });
  };

  return (
    <div className="bg-white flex flex-col gap-2 items-start justify-start size-full">
      <Tudo 
        onSearch={onNewSearch}
        onBackToHome={onBackToHome}
        resultsCount={negocios.length}
        onViewBusiness={onViewBusiness}
        searchParams={searchParams}
        negocios={negocios}
        onClearFilters={handleClearFilters}
      />
    </div>
  );
}