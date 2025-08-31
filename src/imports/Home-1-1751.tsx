import svgPaths from "./svg-vkqil028zc";
import imgImigreiLogoWhiteBg1 from "figma:asset/7cf39a8a103779f629bf0cb4e66ecf5ecc4f2ba3.png";
import imgImigreiLogoSemBordaLogoPadrao1 from "figma:asset/5cab391189e0afc65d102c0ed1e997be82570304.png";
import imgImage from "figma:asset/ee3c16460e8e361350daf085cb522d4df38938b6.png";
import imgImage1 from "figma:asset/2e005d40b98d8712126033e90aac89d7fe4d172f.png";
import imgImage2 from "figma:asset/4b284ebd3e36517122ae5099a6f29d30444cc8d8.png";

function Icones() {
  return (
    <div className="relative shrink-0 size-4" data-name="icones">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ic_search">
          <path d={svgPaths.p9283620} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IButton() {
  return (
    <div className="bg-white box-border content-stretch flex gap-1 items-center justify-center px-6 py-4 relative rounded-[24px] shrink-0" data-name="I_button">
      <Icones />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">Buscar</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%_16.67%]" data-name="Group">
      <div className="absolute inset-[-5%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 15">
          <g id="Group">
            <path d={svgPaths.peb0b480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p1582df00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcMap() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="ic_map">
      <Group />
    </div>
  );
}

function Icones1() {
  return (
    <div className="relative shrink-0 size-4" data-name="icones">
      <IcMap />
    </div>
  );
}

function IButton1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-1 items-center justify-center px-6 py-4 relative rounded-[24px] shrink-0" data-name="I_button">
      <Icones1 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">Mapa</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Group">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <g id="Group">
            <path d={svgPaths.p323da940} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p306c3280} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IcLanguage() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="ic_language">
      <Group1 />
    </div>
  );
}

function Icones2() {
  return (
    <div className="relative shrink-0 size-4" data-name="icones">
      <IcLanguage />
    </div>
  );
}

function IButton2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-1 items-center justify-center px-6 py-4 relative rounded-[24px] shrink-0" data-name="I_button">
      <Icones2 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">Português</p>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-3 h-12 items-center justify-start relative shrink-0 w-[360px]" data-name="Menu">
      <IButton />
      <IButton1 />
      <IButton2 />
    </div>
  );
}

function IButton3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-1 items-center justify-center px-6 py-4 relative rounded-[24px] shrink-0" data-name="I_button">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">Login</p>
      </div>
    </div>
  );
}

function IButton4() {
  return (
    <div className="bg-[#ff6c0e] box-border content-stretch flex gap-1 items-center justify-center px-6 py-4 relative rounded-[24px] shrink-0" data-name="I_button">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Cadastrar Negócio Grátis</p>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="Login">
      <IButton3 />
      <IButton4 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white min-w-[375px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="box-border content-stretch flex items-center justify-between min-w-inherit px-12 py-0 relative w-full">
          <div className="bg-no-repeat bg-size-[100.21%_100%] bg-top h-[98px] shrink-0 w-[179px]" data-name="imigrei_Logo_WhiteBG 1" style={{ backgroundImage: `url('${imgImigreiLogoWhiteBg1}')` }} />
          <Menu />
          <Login />
        </div>
      </div>
    </div>
  );
}

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

function Container() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-[328px] relative rounded-[48px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="Container">
      <div className="flex flex-row items-center min-w-inherit relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start min-w-inherit p-[12px] relative w-full">
          <MaterialSymbolsLightSearch />
          <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[14px] text-nowrap">
            <p className="leading-[20px] whitespace-pre">Nome, cidade ou tipo de negócio...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icones5() {
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

function IButton5() {
  return (
    <div className="bg-[#ff6c0e] box-border content-stretch flex gap-1 items-center justify-center px-6 py-4 relative rounded-[24px] shrink-0" data-name="I_button">
      <Icones5 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Buscar</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-full">
      <Container />
      <IButton5 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-[770px]">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[0px] text-white w-full">
        <p className="leading-[24px] text-[20px]">
          <span className="text-white">Encontre</span> <span className="text-[#b0ff0b]">negócios brasileiros</span> <span className="text-white">perto de você</span>{" "}
        </p>
      </div>
      <Frame72 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="absolute content-stretch flex flex-col gap-2 items-start justify-start leading-[0] left-0 not-italic top-0 w-44">
      <div className="font-['Inter:Bold',_sans-serif] font-bold relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[normal]">Resultados da busca</p>
      </div>
      <div className="font-['Inter:Medium',_sans-serif] font-medium relative shrink-0 text-[#b0ff0b] text-[14px] w-full">
        <p className="leading-[20px]">13 negócios encontrados</p>
      </div>
    </div>
  );
}

function Frames() {
  return (
    <div className="basis-0 grow h-12 min-h-px min-w-px relative shrink-0" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame71 />
    </div>
  );
}

function Icones6() {
  return (
    <div className="relative shrink-0 size-4" data-name="icones">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icones">
          <path d={svgPaths.p1bf35080} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="bg-[#0d2a14] box-border content-stretch flex gap-1 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0" data-name="Item">
      <Icones6 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
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
          <path d={svgPaths.p34075680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-1 items-center justify-start px-4 py-3 relative rounded-[8px] shrink-0" data-name="Item">
      <Icones7 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#062f1a] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Mapa</p>
      </div>
    </div>
  );
}

function Itens() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name="Itens">
      <Item />
      <Item1 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[770px]">
      <Frames />
      <Itens />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="h-[12.25px] relative shrink-0 w-3.5" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13">
          <path d={svgPaths.p3f207d00} fill="var(--fill-0, #062F1A)" id="Vector" />
        </svg>
      </div>
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#062f1a] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Filtros</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1761)" id="Frame">
          <path d={svgPaths.p207cd600} fill="var(--fill-0, #1C77F6)" id="Vector" stroke="var(--stroke-0, #1C77F6)" strokeWidth="2" />
          <path d={svgPaths.p2cd91080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1761">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[104px]">
        <p className="leading-[20px]">Todos</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1761)" id="Frame">
          <path d={svgPaths.p207cd600} fill="var(--fill-0, #1C77F6)" id="Vector" stroke="var(--stroke-0, #1C77F6)" strokeWidth="2" />
          <path d={svgPaths.p2cd91080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1761">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame1 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[104px]">
        <p className="leading-[20px]">Restaurantes</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1761)" id="Frame">
          <path d={svgPaths.p207cd600} fill="var(--fill-0, #1C77F6)" id="Vector" stroke="var(--stroke-0, #1C77F6)" strokeWidth="2" />
          <path d={svgPaths.p2cd91080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1761">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame2 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[104px]">
        <p className="leading-[20px]">Manicure</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1761)" id="Frame">
          <path d={svgPaths.p207cd600} fill="var(--fill-0, #1C77F6)" id="Vector" stroke="var(--stroke-0, #1C77F6)" strokeWidth="2" />
          <path d={svgPaths.p2cd91080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1761">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame3 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[104px]">
        <p className="leading-[20px]">Contabilidade</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1761)" id="Frame">
          <path d={svgPaths.p207cd600} fill="var(--fill-0, #1C77F6)" id="Vector" stroke="var(--stroke-0, #1C77F6)" strokeWidth="2" />
          <path d={svgPaths.p2cd91080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1761">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame4 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[104px]">
        <p className="leading-[20px]">Cabeleireiro</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1761)" id="Frame">
          <path d={svgPaths.p207cd600} fill="var(--fill-0, #1C77F6)" id="Vector" stroke="var(--stroke-0, #1C77F6)" strokeWidth="2" />
          <path d={svgPaths.p2cd91080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1761">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame5 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[104px]">
        <p className="leading-[20px]">Mercado</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1761)" id="Frame">
          <path d={svgPaths.p207cd600} fill="var(--fill-0, #1C77F6)" id="Vector" stroke="var(--stroke-0, #1C77F6)" strokeWidth="2" />
          <path d={svgPaths.p2cd91080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1761">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame6 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[104px]">
        <p className="leading-[20px]">Aulas</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1761)" id="Frame">
          <path d={svgPaths.p207cd600} fill="var(--fill-0, #1C77F6)" id="Vector" stroke="var(--stroke-0, #1C77F6)" strokeWidth="2" />
          <path d={svgPaths.p2cd91080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1761">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame7 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[104px]">
        <p className="leading-[20px]">Limpeza</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1761)" id="Frame">
          <path d={svgPaths.p207cd600} fill="var(--fill-0, #1C77F6)" id="Vector" stroke="var(--stroke-0, #1C77F6)" strokeWidth="2" />
          <path d={svgPaths.p2cd91080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1761">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame8 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[104px]">
        <p className="leading-[20px]">Saúde</p>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
      <Frame77 />
      <Frame78 />
      <Frame79 />
      <Frame80 />
      <Frame81 />
      <Frame82 />
      <Frame83 />
      <Frame84 />
      <Frame85 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start justify-start relative shrink-0 w-full">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#062f1a] text-[14px] w-full">
        <p className="leading-[20px]">Categoria</p>
      </div>
      <Frame91 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1761)" id="Frame">
          <path d={svgPaths.p207cd600} fill="var(--fill-0, #1C77F6)" id="Vector" stroke="var(--stroke-0, #1C77F6)" strokeWidth="2" />
          <path d={svgPaths.p2cd91080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1761">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame9 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[104px]">
        <p className="leading-[20px]">Todos</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1761)" id="Frame">
          <path d={svgPaths.p207cd600} fill="var(--fill-0, #1C77F6)" id="Vector" stroke="var(--stroke-0, #1C77F6)" strokeWidth="2" />
          <path d={svgPaths.p2cd91080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1761">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame10 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[104px]">
        <p className="leading-[20px]">Espanha</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1761)" id="Frame">
          <path d={svgPaths.p207cd600} fill="var(--fill-0, #1C77F6)" id="Vector" stroke="var(--stroke-0, #1C77F6)" strokeWidth="2" />
          <path d={svgPaths.p2cd91080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1761">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame11 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[104px]">
        <p className="leading-[20px]">Irlanda</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1761)" id="Frame">
          <path d={svgPaths.p207cd600} fill="var(--fill-0, #1C77F6)" id="Vector" stroke="var(--stroke-0, #1C77F6)" strokeWidth="2" />
          <path d={svgPaths.p2cd91080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1761">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame12 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[104px]">
        <p className="leading-[20px]">Malta</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_1_1761)" id="Frame">
          <path d={svgPaths.p207cd600} fill="var(--fill-0, #1C77F6)" id="Vector" stroke="var(--stroke-0, #1C77F6)" strokeWidth="2" />
          <path d={svgPaths.p2cd91080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1761">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame13 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[14px] w-[104px]">
        <p className="leading-[20px]">Portugal</p>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0">
      <Frame92 />
      <Frame93 />
      <Frame94 />
      <Frame95 />
      <Frame96 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start justify-start relative shrink-0 w-full">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[#062f1a] text-[14px]" style={{ width: "min-content" }}>
        <p className="leading-[20px]">País</p>
      </div>
      <Frame97 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-full">
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-3.5 items-start justify-start relative shrink-0 w-40">
      <Frame76 />
      <Frame88 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[116px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 116">
        <g clipPath="url(#clip0_1_1755)" id="Frame">
          <path d="M116 0H0V116H116V0Z" fill="var(--fill-0, #DDDDDD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1755">
            <rect fill="white" height="116" width="116" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Topo() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',_sans-serif] font-medium gap-0.5 items-start justify-start leading-[0] not-italic relative shrink-0 text-[#005a22] w-full" data-name="Topo">
      <div className="relative shrink-0 text-[0px] w-full">
        <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[20px] text-[14px]">Sabor do Brasil</p>
      </div>
      <div className="relative shrink-0 text-[12px] w-full">
        <p className="leading-[normal]">Restaurante Brasileiro</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p258c0f00} fill="var(--fill-0, #005A22)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LocationContainer() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="Location container">
      <Frame15 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Valência, Espanha</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.pd0be400} fill="var(--fill-0, #F5C518)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RatingContainer() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="Rating container">
      <Frame16 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">4.8 (127)</p>
      </div>
    </div>
  );
}

function Frames1() {
  return (
    <div className="content-center flex flex-wrap gap-2.5 items-center justify-start relative shrink-0 w-full" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <LocationContainer />
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#005a22] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[19px] whitespace-pre">•</p>
      </div>
      <RatingContainer />
    </div>
  );
}

function Meio() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Meio">
      <Frames1 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] w-full">
        <p className="leading-[normal]">Autêntica culinária brasileira no coração de Valência.</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
      <Topo />
      <Meio />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-4" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d={svgPaths.p21262700} fill="var(--fill-0, #0D9942)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frames2() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame17 />
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#0d9942] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[19px] whitespace-pre">Aberto agora</p>
      </div>
    </div>
  );
}

function Icones8() {
  return (
    <div className="relative shrink-0 size-4" data-name="icones">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icones">
          <path d={svgPaths.p340f1980} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IButton6() {
  return (
    <div className="bg-[#ff6c0e] box-border content-stretch flex gap-1 items-center justify-center px-3 py-2 relative rounded-[24px] shrink-0" data-name="I_button">
      <Icones8 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">WhatsApp</p>
      </div>
    </div>
  );
}

function IButton7() {
  return (
    <div className="bg-white box-border content-stretch flex gap-1 items-center justify-center px-3 py-2 relative rounded-[24px] shrink-0" data-name="I_button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">Mais detalhes</p>
      </div>
    </div>
  );
}

function Frames3() {
  return (
    <div className="content-center flex flex-wrap gap-4 items-center justify-start relative shrink-0 w-full" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <IButton6 />
      <IButton7 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
      <Frames2 />
      <Frames3 />
    </div>
  );
}

function Frames4() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative self-stretch shrink-0 w-[338px]" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame41 />
      <Frame40 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white box-border content-stretch flex gap-4 items-start justify-start p-[17px] relative rounded-[8px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#dedede] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame14 />
      <Frames4 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0">
      {[...Array(4).keys()].map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}

function Frame90() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[58px] items-start justify-start p-[24px] relative rounded-[8px] shrink-0">
      <Frame89 />
      <Frame70 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-[#0d2a14] box-border content-stretch flex flex-col gap-8 items-center justify-start px-0 py-12 relative shrink-0 w-full">
      <Frame73 />
      <Frame74 />
      <Frame90 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
      <div className="bg-center bg-cover bg-no-repeat h-11 shrink-0 w-[122px]" data-name="imigrei logo_SemBorda_Logo_padrao 1" style={{ backgroundImage: `url('${imgImigreiLogoSemBordaLogoPadrao1}')` }} />
      <div className="font-['Inter:Medium',_sans-serif] font-medium h-[79.375px] leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">A maior comunidade de negócios brasileiros no exterior. Conectando sonhos e oportunidades pelo mundo.</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="relative shrink-0 size-3" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_1083)" id="Frame">
          <path d={svgPaths.p221f6780} fill="var(--fill-0, #FF6C0E)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1083">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <Frame30 />
      <div className="font-['Roboto:Regular',_sans-serif] font-normal h-[33px] leading-[0] relative shrink-0 text-[#ff6c0e] text-[12px] w-[121.719px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[18px]">Feito com amor para a comunidade brasileira</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start justify-start relative shrink-0 w-[201.891px]">
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Medium',_sans-serif] font-medium gap-[15px] items-start justify-start leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
      <div className="relative shrink-0 w-full">
        <p className="leading-[20px]">Buscar negócios</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="leading-[20px]">Cadastrar negócio</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="leading-[20px]">Como funciona</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="leading-[20px]">Verificação</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-start relative shrink-0 w-[140px]">
      <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#d6f02a] text-[16px] w-full">
        <p className="leading-[normal]">Plataforma</p>
      </div>
      <Frame61 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',_sans-serif] font-medium items-center justify-between leading-[0] not-italic relative shrink-0 text-nowrap w-full">
      <div className="relative shrink-0 text-[14px] text-white">
        <p className="leading-[20px] text-nowrap whitespace-pre">Espanha</p>
      </div>
      <div className="relative shrink-0 text-[#d6f02a] text-[12px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">156</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',_sans-serif] font-medium items-center justify-between leading-[0] not-italic relative shrink-0 text-nowrap w-full">
      <div className="relative shrink-0 text-[14px] text-white">
        <p className="leading-[20px] text-nowrap whitespace-pre">Irlanda</p>
      </div>
      <div className="relative shrink-0 text-[#d6f02a] text-[12px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">89</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',_sans-serif] font-medium items-center justify-between leading-[0] not-italic relative shrink-0 w-full">
      <div className="relative shrink-0 text-[14px] text-white w-[51px]">
        <p className="leading-[20px]">Malta</p>
      </div>
      <div className="relative shrink-0 text-[#d6f02a] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">67</p>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex font-['Inter:Medium',_sans-serif] font-medium items-center justify-between leading-[0] not-italic relative shrink-0 w-full">
      <div className="relative shrink-0 text-[14px] text-white w-[68px]">
        <p className="leading-[20px]">Portugal</p>
      </div>
      <div className="relative shrink-0 text-[#d6f02a] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">234</p>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
      <Frame59 />
      <Frame58 />
      <Frame57 />
      <Frame56 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-start relative shrink-0 w-[140px]">
      <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#d6f02a] text-[16px] w-full">
        <p className="leading-[normal]">Países</p>
      </div>
      <Frame60 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full">
      <div className="bg-center bg-cover bg-no-repeat h-3.5 shrink-0 w-5" data-name="Image" style={{ backgroundImage: `url('${imgImage}')` }} />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white">
        <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[normal] text-[12px] whitespace-pre">Português</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="bg-center bg-cover bg-no-repeat h-[13px] shrink-0 w-5" data-name="Image" style={{ backgroundImage: `url('${imgImage1}')` }} />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white">
        <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[normal] text-[12px] whitespace-pre">Español</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <div className="bg-center bg-cover bg-no-repeat h-2.5 shrink-0 w-5" data-name="Image" style={{ backgroundImage: `url('${imgImage2}')` }} />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white">
        <p className="font-['Inter:Bold',_sans-serif] font-bold leading-[normal] text-[12px] whitespace-pre">English</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start justify-start relative shrink-0 w-full">
      <Frame53 />
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-start relative shrink-0 w-full">
      <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#d6f02a] text-[16px] w-full">
        <p className="leading-[normal]">Idiomas</p>
      </div>
      <Frame62 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-9 items-start justify-start relative shrink-0 w-[90px]">
      <Frame63 />
      <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#d6f02a] text-[16px] w-full">
        <p className="leading-[normal]">Suporte</p>
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-start flex flex-wrap gap-[93px] items-start justify-start relative shrink-0">
      <Frame65 />
      <Frame64 />
      <Frame66 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-[#0d2a14] box-border content-center flex flex-wrap gap-[41px] items-center justify-center pb-14 pt-6 px-0 relative shrink-0 w-full">
      <Frame67 />
      <Frame68 />
    </div>
  );
}

function Tudo() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Tudo">
      <Header />
      <Frame75 />
      <Frame98 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-2 items-start justify-start relative size-full" data-name="Home">
      <Tudo />
    </div>
  );
}