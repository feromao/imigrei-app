import svgPaths from "./svg-r31p3ypuy6";
import imgImigreiLogoWhiteBg1 from "figma:asset/7cf39a8a103779f629bf0cb4e66ecf5ecc4f2ba3.png";
import imgImigreiLogoSemBordaLogoPadrao1 from "figma:asset/5cab391189e0afc65d102c0ed1e997be82570304.png";
import imgImigreiIcHavaianas from "figma:asset/647c005ae5f550b7c67a0b2759883b43c4af2436.png";
import imgImigreiIcCopoAmericano from "figma:asset/4070f80c566f604fdf9d98fcbf1d6d7aa80d7d06.png";
import imgImigreiIcPassaporte from "figma:asset/b956872a7f0928d7b5fd2a3436285453f2abd40a.png";
import imgImigreiIcPin1 from "figma:asset/2401e2bbdc7fa4676669c7da465c13e413c1eef1.png";
import imgImigreiIcCaipirinha from "figma:asset/cf79cd26b73cb484a8e1638ea5469b3864a4da82.png";
import imgImigreiIcMundo from "figma:asset/2035facb4988558e747798b173e37ea8f9511133.png";
import imgImigreiIcManicure from "figma:asset/9fe3542782fb5ddcace6dc119dd18c8d84cd3054.png";
import imgImigreiIcPaoDeQueijo1 from "figma:asset/c8d5d9929c480d250ed830f65f5105755a4c03ea.png";
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

function Frame25() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-center justify-start pb-12 pt-0 px-0 relative shrink-0">
      <div className="bg-center bg-cover bg-no-repeat h-[72px] shrink-0 w-[200px]" data-name="imigrei logo_SemBorda_Logo_padrao 1" style={{ backgroundImage: `url('${imgImigreiLogoSemBordaLogoPadrao1}')` }} />
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
    <div className="basis-0 bg-white grow max-w-[506px] min-h-px min-w-[328px] relative rounded-[48px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.12)] shrink-0" data-name="Container">
      <div className="flex flex-row items-center max-w-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start max-w-inherit min-w-inherit p-[12px] relative w-full">
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

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-center flex flex-wrap gap-3 items-center justify-center px-6 py-0 relative w-full">
          <Container />
          <IButton5 />
        </div>
      </div>
    </div>
  );
}

function Pesquisa() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-center justify-start min-w-[328px] relative shrink-0 w-full" data-name="PESQUISA">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] min-w-[328px] not-italic relative shrink-0 text-[0px] text-black text-center w-full">
        <p className="leading-[56px] text-[36px]">
          <span className="text-white">
            Encontre negócios brasileiros
            <br aria-hidden="true" />
          </span>
          <span className="text-[#b0ff0b]">{`no `}</span>
          <span className="text-[#b0ff0b]">mundo todo</span>
        </p>
      </div>
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#005a22] box-border content-stretch flex flex-col items-center justify-start pb-24 pt-16 px-0 relative shrink-0 w-full" data-name="Container">
      <Frame25 />
      <Pesquisa />
    </div>
  );
}

function Container3() {
  return <div className="bg-[#005a22] shrink-0 size-[125px]" data-name="Container" />;
}

function Container4() {
  return (
    <div className="bg-[#b0ff0b] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[60px]" data-name="imigrei_ic_havaianas" style={{ backgroundImage: `url('${imgImigreiIcHavaianas}')` }} />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#93fbff] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[54px]" data-name="imigrei_ic_copo americano" style={{ backgroundImage: `url('${imgImigreiIcCopoAmericano}')` }} />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#005a22] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-12" data-name="imigrei_ic_passaporte" style={{ backgroundImage: `url('${imgImigreiIcPassaporte}')` }} />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#883ae1] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[49px]" data-name="imigrei_ic_pin 1" style={{ backgroundImage: `url('${imgImigreiIcPin1}')` }} />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#ff6c0e] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[60px]" data-name="imigrei_ic_caipirinha" style={{ backgroundImage: `url('${imgImigreiIcCaipirinha}')` }} />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#fff8e2] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[71px]" data-name="imigrei_ic_mundo" style={{ backgroundImage: `url('${imgImigreiIcMundo}')` }} />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#b0ff0b] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[57px]" data-name="imigrei_ic_manicure" style={{ backgroundImage: `url('${imgImigreiIcManicure}')` }} />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#883ae1] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[73px]" data-name="imigrei_ic_pao de queijo 1" style={{ backgroundImage: `url('${imgImigreiIcPaoDeQueijo1}')` }} />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full">
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container3 />
    </div>
  );
}

function Chip() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-1 relative rounded-[24px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[#ff6c0e] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ff6c0e] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Restaurantes</p>
      </div>
    </div>
  );
}

function Chip1() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-1 relative rounded-[24px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[#ff6c0e] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ff6c0e] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Manicure</p>
      </div>
    </div>
  );
}

function Chip2() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-1 relative rounded-[24px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[#ff6c0e] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ff6c0e] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Mercado</p>
      </div>
    </div>
  );
}

function Chip3() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-1 relative rounded-[24px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[#ff6c0e] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ff6c0e] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Contador</p>
      </div>
    </div>
  );
}

function Chip4() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-1 relative rounded-[24px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[#ff6c0e] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ff6c0e] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Cabeleireiro</p>
      </div>
    </div>
  );
}

function Chip5() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-1 relative rounded-[24px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[#ff6c0e] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ff6c0e] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Aulas</p>
      </div>
    </div>
  );
}

function Chip6() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center px-3 py-1 relative rounded-[24px] shrink-0" data-name="Chip">
      <div aria-hidden="true" className="absolute border border-[#ff6c0e] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#ff6c0e] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Limpeza</p>
      </div>
    </div>
  );
}

function ChipContainer() {
  return (
    <div className="content-center flex flex-wrap gap-2 items-center justify-center relative shrink-0 w-full" data-name="Chip Container">
      <Chip />
      <Chip1 />
      <Chip2 />
      <Chip3 />
      <Chip4 />
      <Chip5 />
      <Chip6 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0 w-full" data-name="Container">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center w-full">
        <p className="leading-[20px]">Descubra restaurantes, lojas e profissionais brasileiros fora do Brasil</p>
      </div>
      <ChipContainer />
    </div>
  );
}

function DescriptionContainer() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name="Description Container">
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#fff8e2] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-center px-4 py-12 relative w-full">
          <DescriptionContainer />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return <div className="bg-[#005a22] shrink-0 size-[125px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="bg-[#883ae1] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[73px]" data-name="imigrei_ic_pao de queijo 1" style={{ backgroundImage: `url('${imgImigreiIcPaoDeQueijo1}')` }} />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#ff6c0e] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[60px]" data-name="imigrei_ic_caipirinha" style={{ backgroundImage: `url('${imgImigreiIcCaipirinha}')` }} />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#93fbff] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[54px]" data-name="imigrei_ic_copo americano" style={{ backgroundImage: `url('${imgImigreiIcCopoAmericano}')` }} />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#b0ff0b] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[57px]" data-name="imigrei_ic_manicure" style={{ backgroundImage: `url('${imgImigreiIcManicure}')` }} />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#fff8e2] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[71px]" data-name="imigrei_ic_mundo" style={{ backgroundImage: `url('${imgImigreiIcMundo}')` }} />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#883ae1] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[49px]" data-name="imigrei_ic_pin 1" style={{ backgroundImage: `url('${imgImigreiIcPin1}')` }} />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#b0ff0b] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[60px]" data-name="imigrei_ic_havaianas" style={{ backgroundImage: `url('${imgImigreiIcHavaianas}')` }} />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#005a22] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-12" data-name="imigrei_ic_passaporte" style={{ backgroundImage: `url('${imgImigreiIcPassaporte}')` }} />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full">
      <Container15 />
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
      <Container15 />
    </div>
  );
}

function IContador() {
  return (
    <div className="bg-[#b0ff0b] box-border content-stretch flex gap-2 items-center justify-center px-3 py-1 relative rounded-[24px] shrink-0" data-name="I_contador">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">18</p>
      </div>
    </div>
  );
}

function IChip() {
  return (
    <div className="bg-[#005a22] box-border content-stretch flex gap-2 items-center justify-center pl-3 pr-1 py-1 relative rounded-[24px] shrink-0" data-name="I_Chip">
      <div aria-hidden="true" className="absolute border border-[#005a22] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Valência</p>
      </div>
      <IContador />
    </div>
  );
}

function IContador1() {
  return (
    <div className="bg-[#005a22] box-border content-stretch flex gap-2 items-center justify-center px-3 py-1 relative rounded-[24px] shrink-0" data-name="I_contador">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">18</p>
      </div>
    </div>
  );
}

function IChip1() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center pl-3 pr-1 py-1 relative rounded-[24px] shrink-0" data-name="I_Chip">
      <div aria-hidden="true" className="absolute border border-[#005a22] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Dublin</p>
      </div>
      <IContador1 />
    </div>
  );
}

function IContador2() {
  return (
    <div className="bg-[#005a22] box-border content-stretch flex gap-2 items-center justify-center px-3 py-1 relative rounded-[24px] shrink-0" data-name="I_contador">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">18</p>
      </div>
    </div>
  );
}

function IChip2() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center pl-3 pr-1 py-1 relative rounded-[24px] shrink-0" data-name="I_Chip">
      <div aria-hidden="true" className="absolute border border-[#005a22] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Madrid</p>
      </div>
      <IContador2 />
    </div>
  );
}

function IContador3() {
  return (
    <div className="bg-[#005a22] box-border content-stretch flex gap-2 items-center justify-center px-3 py-1 relative rounded-[24px] shrink-0" data-name="I_contador">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">18</p>
      </div>
    </div>
  );
}

function IChip3() {
  return (
    <div className="box-border content-stretch flex gap-2 items-center justify-center pl-3 pr-1 py-1 relative rounded-[24px] shrink-0" data-name="I_Chip">
      <div aria-hidden="true" className="absolute border border-[#005a22] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Sliema</p>
      </div>
      <IContador3 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-start flex flex-wrap gap-6 items-start justify-center relative shrink-0 w-full">
      <IChip />
      <IChip1 />
      <IChip2 />
      <IChip3 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-center justify-start relative shrink-0 w-full">
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[32px] text-black text-center w-full">
        <p className="leading-[36px]">Explore cidades populares</p>
      </div>
      <Frame26 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-16" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_1074)" id="Frame">
          <path d="M64 0H0V64H64V0Z" fill="var(--fill-0, #DDDDDD)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1074">
            <rect fill="white" height="64" width="64" />
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

function Frame1() {
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
      <Frame1 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Valência, Espanha</p>
      </div>
    </div>
  );
}

function Frame2() {
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
      <Frame2 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#005a22] text-[12px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">4.8 (127)</p>
      </div>
    </div>
  );
}

function Frames() {
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
      <Frames />
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

function Frame3() {
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

function Frames1() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0 w-full" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame3 />
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#0d9942] text-[13px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[19px] whitespace-pre">Aberto agora</p>
      </div>
    </div>
  );
}

function Icones6() {
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
      <Icones6 />
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

function Frames2() {
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
      <Frames1 />
      <Frames2 />
    </div>
  );
}

function Frames3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-3 grow items-start justify-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <Frame41 />
      <Frame40 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white box-border content-stretch flex gap-4 items-start justify-start p-[17px] relative rounded-[8px] shrink-0 w-[343px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#dedede] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame />
      <Frames3 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-start flex flex-wrap gap-6 items-start justify-center min-w-[400px] relative shrink-0 w-full">
      {[...Array(6).keys()].map((_, i) => (
        <Card key={i} />
      ))}
    </div>
  );
}

function Icones18() {
  return (
    <div className="relative shrink-0 size-4" data-name="icones">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icones">
          <path d={svgPaths.p3fbf5d00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IButton18() {
  return (
    <div className="bg-white box-border content-stretch flex gap-1 items-center justify-center px-3 py-2 relative rounded-[24px] shrink-0" data-name="I_button">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Icones18 />
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[12px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">Mostrar mais</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-center justify-start relative shrink-0 w-full">
      <Frame30 />
      <IButton18 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="box-border content-stretch flex flex-col gap-14 items-center justify-start pb-24 pt-14 px-0 relative shrink-0 w-full">
      <Frame27 />
      <Frame33 />
    </div>
  );
}

function Icones19() {
  return (
    <div className="relative shrink-0 size-4" data-name="icones">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icones">
          <path d={svgPaths.p1df60880} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IButton19() {
  return (
    <div className="bg-[#ff6c0e] box-border content-stretch flex gap-1 items-center justify-center px-6 py-4 relative rounded-[24px] shrink-0" data-name="I_button">
      <Icones19 />
      <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white">
        <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[normal] text-[16px] whitespace-pre">Cadastrar Negócio Grátis</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-6 items-center justify-start relative shrink-0">
      <IButton19 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-10 items-center justify-start relative shrink-0 w-full">
      <div className="font-['Roboto:ExtraBold',_sans-serif] font-extrabold leading-[0] min-w-full relative shrink-0 text-[32px] text-black text-center" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[40px]">
          <span className="text-white">Cadastre seu negócio</span> <span className="text-[#c3e52f]">gratuitamente</span>{" "}
        </p>
      </div>
      <div className="font-['Roboto:Regular',_sans-serif] font-normal h-[49px] leading-[0] relative shrink-0 text-[18px] text-white w-[512.266px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28px]">Junte-se à maior vitrine de negócios brasileiros no exterior. Seja encontrado por quem realmente procura seus serviços.</p>
      </div>
      <Frame35 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute h-[19.948px] left-3 top-[14.03px] w-6" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 20">
        <g clipPath="url(#clip0_1_1080)" id="Frame">
          <path d={svgPaths.p8610100} fill="var(--fill-0, #0D2A14)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1080">
            <rect fill="white" height="19.9481" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frames24() {
  return (
    <div className="bg-[#c3e52f] relative rounded-[9999px] shrink-0 size-12" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Frame28 />
    </div>
  );
}

function Frames25() {
  return (
    <div className="bg-[#1f3a26] box-border content-stretch flex flex-col gap-[13px] items-center justify-start px-[85px] py-6 relative rounded-[12px] shrink-0 w-[438px]" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frames24 />
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[16px] text-center text-white" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Gratuito para sempre</p>
      </div>
      <div className="font-['Roboto:Regular',_sans-serif] font-normal h-[37px] leading-[0] relative shrink-0 text-[#d1d1d1] text-[14px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Cadastre seu negócio sem custos mensais ou taxas escondidas.</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute h-5 left-[11.5px] top-3.5 w-[25px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 20">
        <g id="Frame">
          <path d={svgPaths.p18776500} fill="var(--fill-0, #0D2A14)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frames26() {
  return (
    <div className="bg-[#c3e52f] relative rounded-[9999px] shrink-0 size-12" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Frame29 />
    </div>
  );
}

function Frames27() {
  return (
    <div className="bg-[#1f3a26] box-border content-stretch flex flex-col gap-[13px] items-center justify-start px-[84px] py-6 relative rounded-[12px] shrink-0 w-[438px]" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frames26 />
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[16px] text-center text-white" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Conecte com brasileiros</p>
      </div>
      <div className="font-['Roboto:Regular',_sans-serif] font-normal h-[37px] leading-[0] relative shrink-0 text-[#d1d1d1] text-[14px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Alcance milhares de brasileiros procurando seus serviços.</p>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="absolute h-[19.613px] left-[14.5px] top-[14.19px] w-[19px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
        <g clipPath="url(#clip0_1_1062)" id="Frame">
          <path d={svgPaths.p2c2a6900} fill="var(--fill-0, #0D2A14)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1062">
            <rect fill="white" height="19.6129" width="19" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frames28() {
  return (
    <div className="bg-[#c3e52f] relative rounded-[9999px] shrink-0 size-12" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Frame71 />
    </div>
  );
}

function Frames29() {
  return (
    <div className="bg-[#1f3a26] box-border content-stretch flex flex-col gap-[13px] items-center justify-start px-[83px] py-6 relative rounded-[12px] shrink-0 w-[438px]" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frames28 />
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[16px] text-center text-white" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Visibilidade global</p>
      </div>
      <div className="font-['Roboto:Regular',_sans-serif] font-normal h-[37px] leading-[0] relative shrink-0 text-[#d1d1d1] text-[14px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Apareça nas buscas de qualquer país onde tenha presença.</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="absolute h-[20.8px] left-[17.5px] top-[13.6px] w-[13px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 21">
        <g clipPath="url(#clip0_1_1059)" id="Frame">
          <path d={svgPaths.p25696500} fill="var(--fill-0, #0D2A14)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1059">
            <rect fill="white" height="20.8" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frames30() {
  return (
    <div className="bg-[#c3e52f] relative rounded-[9999px] shrink-0 size-12" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Frame72 />
    </div>
  );
}

function Frames31() {
  return (
    <div className="bg-[#1f3a26] box-border content-stretch flex flex-col gap-[13px] items-center justify-start px-20 py-6 relative rounded-[12px] shrink-0 w-[438px]" data-name="Frames">
      <div aria-hidden="true" className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frames30 />
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[16px] text-center text-white" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">Cadastro em 5 minutos</p>
      </div>
      <div className="font-['Roboto:Regular',_sans-serif] font-normal h-[37px] leading-[0] relative shrink-0 text-[#d1d1d1] text-[14px] text-center w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Process simples e rápido para começar hoje mesmo.</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-start flex flex-wrap gap-6 items-start justify-start max-w-[900px] relative shrink-0 w-full">
      <Frames25 />
      <Frames27 />
      <Frames29 />
      <Frames31 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_1086)" id="Frame">
          <path d={svgPaths.p20892600} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_1086">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
      <Frame73 />
      <div className="font-['Roboto:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">100% Seguro e Confiável</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0 w-full">
      <Frame37 />
      <div className="font-['Roboto:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#b3b3b3] text-[14px] text-center" style={{ width: "min-content", fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">Seus dados são protegidos e apenas você gerencia suas informações</p>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="bg-[#0d2a14] box-border content-stretch flex flex-col gap-10 items-center justify-start px-0 py-16 relative shrink-0 w-full">
      <Frame36 />
      <Frame34 />
      <Frame38 />
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

function Frame74() {
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
      <Frame74 />
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

function Frame69() {
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
      <Container2 />
      <Frame23 />
      <Container14 />
      <Frame32 />
      <Frame31 />
      <Frame39 />
      <Frame69 />
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