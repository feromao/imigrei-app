import svgPaths from "./svg-8fz255jd3i";

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
    <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start max-w-[506px] min-w-[328px] p-[12px] relative rounded-[48px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="Container">
      <MaterialSymbolsLightSearch />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">O que você precisa hoje?</p>
      </div>
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

function Frame91() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <div className="font-['Manrope:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#b0ff0b] text-[14px] text-nowrap">
        <p className="leading-[1.45] whitespace-pre">Dublin, Irlanda</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <LineMdChevronUp />
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0">
      <div className="font-['Manrope:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[1.45] whitespace-pre">{`Buscar em `}</p>
      </div>
      <Frame91 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-center justify-start relative shrink-0">
      <Container />
      <Frame94 />
    </div>
  );
}

function Icones() {
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

function IButton() {
  return (
    <div className="bg-[#ff6c0e] box-border content-stretch flex gap-1 items-center justify-center px-6 py-4 relative rounded-[24px] shrink-0" data-name="I_button">
      <Icones />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Buscar</p>
      </div>
    </div>
  );
}

export default function Container1() {
  return (
    <div className="relative size-full" data-name="Container">
      <div className="flex flex-row justify-center relative size-full">
        <div className="box-border content-start flex flex-wrap gap-6 items-start justify-center px-6 py-0 relative size-full">
          <Frame95 />
          <IButton />
        </div>
      </div>
    </div>
  );
}