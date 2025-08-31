// Footer global responsivo
function FooterLogoPlaceholder() {
  return (
    <div className="font-['Manrope',_sans-serif] font-bold text-[20px] text-white">
      imigrei
    </div>
  );
}

function HeartIcon() {
  return (
    <svg className="size-3" fill="none" viewBox="0 0 12 12">
      <path d="M6 10.5S1.5 7.5 1.5 4.5C1.5 2.5 3 1.5 4.5 1.5C5.25 1.5 6 2.25 6 2.25S6.75 1.5 7.5 1.5C9 1.5 10.5 2.5 10.5 4.5C10.5 7.5 6 10.5 6 10.5Z" fill="#FF6C0E" />
    </svg>
  );
}

type FooterLinkProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

function FooterLink({ children, onClick }: FooterLinkProps) {
  return (
    <div 
      className="text-[14px] text-white hover:text-green-300 cursor-pointer transition-colors leading-[20px]"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function CountryItem({ country, count, onClick }: { country: string; count: number; onClick?: () => void }) {
  return (
    <div className="flex items-center justify-between w-full text-nowrap cursor-pointer hover:text-green-300" onClick={onClick}>
      <span className="text-[14px] text-white leading-[20px]">{country}</span>
      <span className="text-[12px] text-[#d6f02a] leading-[normal]">{count}</span>
    </div>
  );
}

type FooterProps = {
  onSearchClick?: () => void;
  onBusinessRegisterClick?: () => void;
  onHowItWorksClick?: () => void;
  onCountryClick?: (country: string) => void;
};

export default function Footer({ 
  onSearchClick, 
  onBusinessRegisterClick, 
  onHowItWorksClick,
  onCountryClick 
}: FooterProps) {
  const countries = [
    { name: 'Espanha', count: 156 },
    { name: 'Irlanda', count: 89 },
    { name: 'Malta', count: 67 },
    { name: 'Portugal', count: 234 }
  ];

  return (
    <div className="bg-[#0d2a14] w-full">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[41px] items-start lg:items-center justify-center px-4 sm:px-8 lg:px-0 py-6 pb-14 bg-[rgba(0,0,0,0.22)]">
        
        {/* Logo e descrição */}
        <div className="flex flex-col gap-4 lg:gap-[26px] w-full lg:w-[240px]">
          <div className="flex flex-col gap-4">
            <FooterLogoPlaceholder />
            <p className="font-['Manrope',_sans-serif] text-[14px] text-white leading-[20px]">
              A maior comunidade de negócios brasileiros no exterior. Conectando sonhos e oportunidades pelo mundo.
            </p>
          </div>
          
          <div className="flex gap-2 items-center">
            <HeartIcon />
            <p className="font-['Manrope',_sans-serif] text-[14px] text-[#ff6c0e] leading-[18px]">
              Feito com amor para a comunidade brasileira
            </p>
          </div>
        </div>

        {/* Links das seções */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[93px] w-full lg:w-auto">
          
          {/* Plataforma */}
          <div className="flex flex-col gap-[18px] w-full lg:w-[140px]">
            <h3 className="font-['Manrope',_sans-serif] text-[16px] text-[#d6f02a] font-bold leading-[normal]">
              Plataforma
            </h3>
            <div className="flex flex-col gap-[15px]">
              <FooterLink onClick={onSearchClick}>Buscar negócios</FooterLink>
              <FooterLink onClick={onBusinessRegisterClick}>Cadastrar negócio</FooterLink>
              <FooterLink onClick={onHowItWorksClick}>Como funciona</FooterLink>
            </div>
          </div>

          {/* Países */}
          <div className="flex flex-col gap-[18px] w-full lg:w-[140px]">
            <h3 className="font-['Manrope',_sans-serif] text-[16px] text-[#d6f02a] font-bold leading-[normal]">
              Países
            </h3>
            <div className="flex flex-col gap-4">
              {countries.map((country) => (
                <CountryItem
                  key={country.name}
                  country={country.name}
                  count={country.count}
                  onClick={() => onCountryClick?.(country.name)}
                />
              ))}
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="flex flex-col gap-[18px] w-full lg:w-[140px]">
            <h3 className="font-['Manrope',_sans-serif] text-[16px] text-[#d6f02a] font-bold leading-[normal]">
              Nos siga nas redes sociais
            </h3>
            <div className="flex flex-col gap-[15px]">
              <a 
                href="https://instagram.com/imigreiapp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[14px] text-white hover:text-green-300 cursor-pointer transition-colors leading-[20px]"
              >
                @imigreiapp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}