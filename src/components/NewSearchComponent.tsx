import { useState, useRef, useEffect } from 'react';
import svgPaths from "../imports/svg-8fz255jd3i";
import { obterCategorias } from '../lib/search';

interface NewSearchComponentProps {
  onSearch: (params: { query: string; location: string; category?: string; isOnline?: boolean }) => void;
}

// Dados das cidades organizadas por país
const CITIES_BY_COUNTRY = {
  'Irlanda': ['Dublin', 'Cork', 'Galway'],
  'Espanha': ['Madrid', 'Valencia', 'Barcelona'],
  'França': ['Paris', 'Lyon', 'Marseille'],
  'Portugal': ['Lisboa', 'Porto', 'Braga'],
  'Malta': ['Sliema', 'Valletta', 'St. Julian\'s'],
  'Alemanha': ['Berlin', 'Munich', 'Hamburg']
};

function MaterialSymbolsLightSearch() {
  return (
    <div className="relative shrink-0 size-6" data-name="material-symbols-light:search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols-light:search">
          <path d={svgPaths.p37f90580} fill="var(--fill-0, #005A22)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LineMdChevronUp() {
  return (
    <div className="relative size-3" data-name="line-md:chevron-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="line-md:chevron-up">
          <path d="M2.5 7.5L6 4L9.5 7.5" id="Vector" stroke="var(--stroke-0, #B0FF0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-4" data-name="icones">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ic_search">
          <path d={svgPaths.p9283620} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function NewSearchComponent({ onSearch }: NewSearchComponentProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCities, setSelectedCities] = useState<string[]>(['Dublin']);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [expandedCountries, setExpandedCountries] = useState<string[]>([]);
  const [searchAnywhere, setSearchAnywhere] = useState(false);

  const categoryRef = useRef<HTMLDivElement>(null);
  const categories = obterCategorias();

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setShowCategoryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowCategoryDropdown(false);
  };

  const handleCountryToggle = (country: string) => {
    if (expandedCountries.includes(country)) {
      setExpandedCountries(expandedCountries.filter(c => c !== country));
    } else {
      setExpandedCountries([...expandedCountries, country]);
    }
  };

  const handleCountrySelect = (country: string) => {
    const countryCities = CITIES_BY_COUNTRY[country as keyof typeof CITIES_BY_COUNTRY];
    const allSelected = countryCities.every(city => selectedCities.includes(city));
    
    if (allSelected) {
      // Desmarcar todas as cidades do país
      setSelectedCities(selectedCities.filter(city => !countryCities.includes(city)));
    } else {
      // Marcar todas as cidades do país
      setSelectedCities([...new Set([...selectedCities, ...countryCities])]);
    }
  };

  const handleCityToggle = (city: string) => {
    if (selectedCities.includes(city)) {
      setSelectedCities(selectedCities.filter(c => c !== city));
    } else {
      setSelectedCities([...selectedCities, city]);
    }
  };

  const handleSearchAnywhere = () => {
    if (searchAnywhere) {
      setSelectedCities(['Dublin']);
      setSearchAnywhere(false);
    } else {
      const allCities = Object.values(CITIES_BY_COUNTRY).flat();
      setSelectedCities(allCities);
      setSearchAnywhere(true);
    }
  };

  const handleSearch = () => {
    const searchParams = {
      query: selectedCategory || 'Todos os negócios disponíveis',
      location: searchAnywhere ? '' : selectedCities.join(', '),
      category: selectedCategory,
      isOnline: searchAnywhere
    };
    onSearch(searchParams);
  };

  const getCategoryDisplayText = () => {
    if (selectedCategory) return selectedCategory;
    return "O que você precisa hoje?";
  };

  const getLocationDisplayText = () => {
    if (searchAnywhere) return "qualquer lugar";
    if (selectedCities.length === 1) {
      const city = selectedCities[0];
      // Encontrar o país da cidade
      const country = Object.entries(CITIES_BY_COUNTRY).find(([_, cities]) => 
        cities.includes(city)
      )?.[0];
      return `${city}${country === 'Irlanda' ? ', Irlanda' : ''}`;
    }
    if (selectedCities.length > 1) {
      return `${selectedCities.length} cidades`;
    }
    return "Dublin, Irlanda";
  };

  return (
    <div className="relative size-full" data-name="Container">
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-start flex flex-wrap gap-6 items-start justify-center px-6 py-0 relative size-full">
          
          {/* Seção principal de busca */}
          <div className="content-stretch flex flex-col gap-6 items-center justify-start relative shrink-0">
            
            {/* Campo de categoria (autocomplete) */}
            <div ref={categoryRef} className="relative w-full max-w-[506px] min-w-[328px]">
              <div 
                className="bg-white box-border content-stretch flex gap-2 items-center justify-start p-[12px] relative rounded-[48px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.12)] shrink-0 cursor-pointer"
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              >
                <MaterialSymbolsLightSearch />
                <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[14px] text-nowrap">
                  <p className="leading-[20px] whitespace-pre">{getCategoryDisplayText()}</p>
                </div>
              </div>

              {/* Dropdown de categorias */}
              {showCategoryDropdown && (
                <div className="absolute top-full left-0 right-0 bg-white rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] mt-2 max-h-[300px] overflow-y-auto z-50">
                  <div className="p-4">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="p-3 hover:bg-[#fff8e2] rounded-[12px] cursor-pointer text-[14px] text-[#005a22]"
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Seção de localização */}
            <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
              <div className="font-['Manrope:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
                <p className="leading-[1.45] whitespace-pre">Buscar em </p>
              </div>
              <div 
                className="content-stretch flex gap-1 items-center justify-start relative shrink-0 cursor-pointer"
                onClick={() => setShowLocationModal(true)}
              >
                <div className="font-['Manrope:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#b0ff0b] text-[14px] text-nowrap">
                  <p className="leading-[1.45] whitespace-pre">{getLocationDisplayText()}</p>
                </div>
                <div className="flex items-center justify-center relative shrink-0">
                  <div className="flex-none rotate-[180deg]">
                    <LineMdChevronUp />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botão de busca */}
          <div 
            className="bg-[#ff6c0e] box-border content-stretch flex gap-1 items-center justify-center px-6 py-4 relative rounded-[24px] shrink-0 cursor-pointer hover:bg-[#e55a0a] transition-colors"
            onClick={handleSearch}
          >
            <SearchIcon />
            <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
              <p className="leading-[normal] whitespace-pre text-[14px]">Buscar</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de seleção de localização */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[24px] max-w-[400px] w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-[18px] font-medium text-[#005a22] mb-4">Selecionar localização</h3>
              
              {/* Opção "Pesquisar em qualquer lugar" */}
              <div 
                className="flex items-center gap-3 p-3 hover:bg-[#fff8e2] rounded-[12px] cursor-pointer"
                onClick={handleSearchAnywhere}
              >
                <input 
                  type="checkbox" 
                  checked={searchAnywhere}
                  readOnly
                  className="w-4 h-4 text-[#005a22] bg-gray-100 border-gray-300 rounded focus:ring-[#005a22] focus:ring-2"
                />
                <span className="text-[14px] font-medium text-[#005a22]">Pesquisar em qualquer lugar</span>
              </div>
            </div>

            <div className="overflow-y-auto max-h-[400px] p-4">
              {Object.entries(CITIES_BY_COUNTRY).map(([country, cities]) => {
                const isExpanded = expandedCountries.includes(country);
                const allSelected = cities.every(city => selectedCities.includes(city));
                const someSelected = cities.some(city => selectedCities.includes(city));

                return (
                  <div key={country} className="mb-2">
                    <div className="flex items-center justify-between p-3 hover:bg-[#fff8e2] rounded-[12px]">
                      <div 
                        className="flex items-center gap-3 flex-1 cursor-pointer"
                        onClick={() => handleCountrySelect(country)}
                      >
                        <input 
                          type="checkbox" 
                          checked={allSelected}
                          ref={input => {
                            if (input) input.indeterminate = someSelected && !allSelected;
                          }}
                          readOnly
                          className="w-4 h-4 text-[#005a22] bg-gray-100 border-gray-300 rounded focus:ring-[#005a22] focus:ring-2"
                        />
                        <span className="text-[14px] font-medium text-[#005a22]">{country}</span>
                      </div>
                      <div 
                        className="cursor-pointer p-1"
                        onClick={() => handleCountryToggle(country)}
                      >
                        <div className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                          <LineMdChevronUp />
                        </div>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="ml-6 space-y-1">
                        {cities.map(city => (
                          <div 
                            key={city}
                            className="flex items-center gap-3 p-2 hover:bg-[#fff8e2] rounded-[8px] cursor-pointer"
                            onClick={() => handleCityToggle(city)}
                          >
                            <input 
                              type="checkbox" 
                              checked={selectedCities.includes(city)}
                              readOnly
                              className="w-4 h-4 text-[#005a22] bg-gray-100 border-gray-300 rounded focus:ring-[#005a22] focus:ring-2"
                            />
                            <span className="text-[14px] text-[#005a22]">{city}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => setShowLocationModal(false)}
                className="w-full bg-[#005a22] text-white py-3 px-6 rounded-[24px] text-[14px] font-medium hover:bg-[#008934] transition-colors"
              >
                Confirmar seleção
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}