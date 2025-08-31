import svgPaths from "../imports/svg-r31p3ypuy6";

// Logo placeholder simples
function LogoPlaceholder() {
  return (
    <div className="font-['Manrope',_sans-serif] font-bold text-[24px] text-black">
      imigrei
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ic_search">
          <path d={svgPaths.p9283620} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function MapIcon() {
  return (
    <div className="relative shrink-0 size-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
        <g>
          <path d={svgPaths.peb0b480} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1582df00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function LanguageIcon() {
  return (
    <div className="relative shrink-0 size-4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g>
          <path d={svgPaths.p323da940} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p306c3280} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function HeaderButton({ children, onClick, variant = "default" }: { 
  children: React.ReactNode; 
  onClick?: () => void;
  variant?: "default" | "primary" | "secondary";
}) {
  const baseClasses = "flex gap-1 items-center justify-center px-3 sm:px-6 py-2 sm:py-4 rounded-[24px] shrink-0 cursor-pointer transition-colors text-[12px] font-['Manrope',_sans-serif] font-medium tracking-[0.45px]";
  
  let variantClasses = "";
  if (variant === "primary") {
    variantClasses = "bg-[#ff6c0e] text-white hover:bg-orange-600";
  } else if (variant === "secondary") {
    variantClasses = "bg-[#005a22] text-white hover:bg-[#008934]";
  } else {
    variantClasses = "bg-white text-black hover:bg-gray-50 border border-gray-200";
  }

  return (
    <div 
      className={`${baseClasses} ${variantClasses}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

type HeaderProps = {
  onSearchClick?: () => void;
  onLogoClick?: () => void;
  onBusinessRegisterClick?: () => void;
  onLoginClick?: () => void;
  isLoggedIn?: boolean;
  onMyAccountClick?: () => void;
};

export default function Header({ 
  onSearchClick, 
  onLogoClick, 
  onBusinessRegisterClick,
  onLoginClick,
  isLoggedIn = false,
  onMyAccountClick
}: HeaderProps) {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-200 w-full">
      <div className="flex flex-row items-center justify-between px-4 sm:px-8 lg:px-12 py-3 w-full">
        {/* Logo */}
        <div onClick={onLogoClick} className="cursor-pointer">
          <LogoPlaceholder />
        </div>

        {/* Login/Register or Account */}
        <div className="flex gap-2 sm:gap-3 items-center">
          {isLoggedIn ? (
            <HeaderButton onClick={onMyAccountClick}>
              <span className="px-[0px] py-[4px] mx-[0px] my-[4px]">Minha Conta</span>
            </HeaderButton>
          ) : (
            <>
              <HeaderButton onClick={onLoginClick}>
                <span className="px-[0px] py-[4px] my-[2px] mx-[0px] m-[0px]">Entrar</span>
              </HeaderButton>
              <HeaderButton variant="primary" onClick={onBusinessRegisterClick}>
                <span className="font-bold font-normal text-[12px] py-[4px] px-[0px] my-[2px] mx-[0px] m-[0px]">Cadastrar Negócio Grátis</span>
              </HeaderButton>
            </>
          )}
        </div>
      </div>
    </div>
  );
}