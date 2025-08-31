import svgPaths from "../imports/svg-r31p3ypuy6";

export type Negocio = {
  id: number;
  nome: string;
  cidade: string;
  categoria: string;
  descricao: string;
  contato: string;
  logo: string;
};

interface BusinessCardProps {
  negocio: Negocio;
  onViewDetails?: () => void;
  variant?: 'grid' | 'list';
}

export default function BusinessCard({ negocio, onViewDetails, variant = 'grid' }: BusinessCardProps) {
  const getCityDisplayName = (cidade: string) => {
    const cityMap: { [key: string]: string } = {
      'Valencia': 'Valencia, Espanha',
      'Dublin': 'Dublin, Irlanda',
      'Madrid': 'Madrid, Espanha',
      'Sliema': 'Sliema, Malta',
      'Paris': 'Paris, França',
      'Lisboa': 'Lisboa, Portugal'
    };
    return cityMap[cidade] || cidade;
  };

  const getRandomRating = () => {
    const ratings = ['4.8 (127)', '4.7 (89)', '4.9 (203)', '4.6 (156)', '4.8 (92)', '4.9 (78)'];
    return ratings[Math.floor(Math.random() * ratings.length)];
  };

  if (variant === 'list') {
    // Layout horizontal para lista (usado no SearchResults)
    return (
      <div className="bg-white box-border content-stretch flex flex-row gap-3 sm:gap-4 items-start justify-start p-3 sm:p-[17px] relative rounded-[8px] shrink-0 w-full sm:max-w-[400px]">
        <div aria-hidden="true" className="absolute border border-[#dedede] border-solid inset-0 pointer-events-none rounded-[8px]" />
        
        {/* Business Image - Square */}
        <div className="relative shrink-0 size-[80px] sm:size-[116px] rounded overflow-hidden">
          <div className="relative w-full h-full bg-gradient-to-br from-[#005a22] to-[#008934]">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="30" r="12" fill="white" fillOpacity="0.9"/>
                <rect x="28" y="50" width="24" height="12" rx="3" fill="#ff6c0e"/>
                <text x="40" y="60" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">{negocio.categoria.toUpperCase()}</text>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Business Info - Horizontal Layout */}
        <div className="content-stretch flex flex-col gap-3 items-start justify-start relative flex-1 min-w-0">
          {/* Title and Category */}
          <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-full">
            <div className="relative shrink-0 w-full">
              <p className="font-['Manrope',_sans-serif] font-bold leading-[20px] text-[14px] text-[#005a22] tracking-[0.45px]">{negocio.nome}</p>
            </div>
            <div className="relative shrink-0 text-[12px] w-full">
              <p className="font-['Manrope',_sans-serif] leading-[normal] text-[#005a22] opacity-80 tracking-[0.45px]">{negocio.categoria}</p>
            </div>
          </div>
          
          {/* Location and Rating */}
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
            <div className="content-center flex flex-wrap gap-2.5 items-center justify-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
                <div className="relative shrink-0 size-4">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p258c0f00} fill="#005A22" />
                  </svg>
                </div>
                <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] text-nowrap tracking-[0.45px]">
                  <p className="leading-[normal] whitespace-pre">{getCityDisplayName(negocio.cidade)}</p>
                </div>
              </div>
              <div className="font-['Manrope',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#005a22] text-[13px] text-nowrap tracking-[0.45px]">
                <p className="leading-[19px] whitespace-pre">•</p>
              </div>
              <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
                <div className="relative shrink-0 size-4">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.pd0be400} fill="#F5C518" />
                  </svg>
                </div>
                <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] text-nowrap tracking-[0.45px]">
                  <p className="leading-[normal] whitespace-pre">{getRandomRating()}</p>
                </div>
              </div>
            </div>
            <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] w-full tracking-[0.45px]">
              <p className="leading-[normal]">{negocio.descricao}</p>
            </div>
          </div>
          
          {/* Status and Buttons */}
          <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full">
              <div className="relative shrink-0 size-4">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p21262700} fill="#0D9942" />
                </svg>
              </div>
              <div className="font-['Manrope',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#0d9942] text-[13px] text-nowrap tracking-[0.45px]">
                <p className="leading-[19px] whitespace-pre">Aberto agora</p>
              </div>
            </div>
            <div className="content-center flex flex-wrap gap-3 items-center justify-start relative shrink-0 w-full">
              <div className="bg-[#ff6c0e] box-border content-stretch flex gap-1 items-center justify-center px-3 py-2 relative rounded-[24px] shrink-0 cursor-pointer hover:bg-orange-600 transition-colors">
                <svg className="size-4" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p340f1980} fill="white" />
                </svg>
                <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.45px]">
                  <p className="leading-[normal] whitespace-pre">WhatsApp</p>
                </div>
              </div>
              <div 
                className="bg-white box-border content-stretch flex gap-1 items-center justify-center px-3 py-2 relative rounded-[24px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={onViewDetails}
              >
                <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
                <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[0.45px]">
                  <p className="leading-[normal] whitespace-pre">Mais detalhes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Layout vertical para grid (usado na Home)
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start justify-start relative rounded-[8px] shrink-0 w-full max-w-[380px] mx-auto overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[#dedede] border-solid inset-0 pointer-events-none rounded-[8px]" />
      
      {/* Business Image - Full Width */}
      <div className="relative w-full h-48 bg-gradient-to-br from-[#005a22] to-[#008934]">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="30" r="12" fill="white" fillOpacity="0.9"/>
            <rect x="28" y="50" width="24" height="12" rx="3" fill="#ff6c0e"/>
            <text x="40" y="60" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">{negocio.categoria.toUpperCase()}</text>
          </svg>
        </div>
      </div>
      
      {/* Business Info */}
      <div className="content-stretch flex flex-col gap-3 items-start justify-start relative w-full p-4">
        {/* Title and Category */}
        <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-full">
          <div className="relative shrink-0 w-full">
            <p className="font-['Manrope',_sans-serif] font-bold leading-[20px] text-[16px] text-[#005a22] tracking-[0.45px]">{negocio.nome}</p>
          </div>
          <div className="relative shrink-0 text-[12px] w-full">
            <p className="font-['Manrope',_sans-serif] leading-[normal] text-[#005a22] opacity-80 tracking-[0.45px]">{negocio.categoria}</p>
          </div>
        </div>
        
        {/* Location and Rating */}
        <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
          <div className="content-center flex flex-wrap gap-2.5 items-center justify-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
              <div className="relative shrink-0 size-4">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p258c0f00} fill="#005A22" />
                </svg>
              </div>
              <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] text-nowrap tracking-[0.45px]">
                <p className="leading-[normal] whitespace-pre">{getCityDisplayName(negocio.cidade)}</p>
              </div>
            </div>
            <div className="font-['Manrope',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#005a22] text-[13px] text-nowrap tracking-[0.45px]">
              <p className="leading-[19px] whitespace-pre">•</p>
            </div>
            <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
              <div className="relative shrink-0 size-4">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.pd0be400} fill="#F5C518" />
                </svg>
              </div>
              <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] text-nowrap tracking-[0.45px]">
                <p className="leading-[normal] whitespace-pre">{getRandomRating()}</p>
              </div>
            </div>
          </div>
          <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] w-full tracking-[0.45px]">
            <p className="leading-[normal]">{negocio.descricao}</p>
          </div>
        </div>
        
        {/* Status and Buttons */}
        <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full">
            <div className="relative shrink-0 size-4">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p21262700} fill="#0D9942" />
              </svg>
            </div>
            <div className="font-['Manrope',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#0d9942] text-[13px] text-nowrap tracking-[0.45px]">
              <p className="leading-[19px] whitespace-pre">Aberto agora</p>
            </div>
          </div>
          <div className="content-center flex flex-wrap gap-3 items-center justify-start relative shrink-0 w-full">
            <div className="bg-[#ff6c0e] box-border content-stretch flex gap-1 items-center justify-center px-4 py-2 relative rounded-[24px] shrink-0 cursor-pointer hover:bg-orange-600 transition-colors">
              <svg className="size-6" fill="none" viewBox="0 0 16 16">
                <path d={svgPaths.p340f1980} fill="white" />
              </svg>
              <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.45px]">
                <p className="leading-[normal] whitespace-pre text-[13px]">WhatsApp</p>
              </div>
            </div>
            <div 
              className="bg-white box-border content-stretch flex gap-1 items-center justify-center px-4 py-2 relative rounded-[24px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={onViewDetails}
            >
              <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
              <div className="font-['Manrope',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-black text-nowrap tracking-[0.45px]">
                <p className="leading-[normal] whitespace-pre text-[14px]">Mais detalhes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}