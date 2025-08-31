import imgImigreiIcHavaianas from "figma:asset/647c005ae5f550b7c67a0b2759883b43c4af2436.png";
import imgImigreiIcCopoAmericano from "figma:asset/4070f80c566f604fdf9d98fcbf1d6d7aa80d7d06.png";
import imgImigreiIcPassaporte from "figma:asset/b956872a7f0928d7b5fd2a3436285453f2abd40a.png";
import imgImigreiIcPin1 from "figma:asset/2401e2bbdc7fa4676669c7da465c13e413c1eef1.png";
import imgImigreiIcCaipirinha from "figma:asset/cf79cd26b73cb484a8e1638ea5469b3864a4da82.png";
import imgImigreiIcMundo from "figma:asset/2035facb4988558e747798b173e37ea8f9511133.png";
import imgImigreiIcManicure from "figma:asset/9fe3542782fb5ddcace6dc119dd18c8d84cd3054.png";
import imgImigreiIcPaoDeQueijo1 from "figma:asset/c8d5d9929c480d250ed830f65f5105755a4c03ea.png";

function Container() {
  return <div className="bg-[#005a22] shrink-0 size-[125px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="bg-[#b0ff0b] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[60px]" data-name="imigrei_ic_havaianas" style={{ backgroundImage: `url('${imgImigreiIcHavaianas}')` }} />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#93fbff] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[54px]" data-name="imigrei_ic_copo americano" style={{ backgroundImage: `url('${imgImigreiIcCopoAmericano}')` }} />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#005a22] box-border content-stretch flex gap-2 items-center justify-center relative shrink-0 size-[125px] py-[8px] p-[8px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-16" data-name="imigrei_ic_passaporte" style={{ backgroundImage: `url('${imgImigreiIcPassaporte}')` }} />
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#883ae1] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[49px]" data-name="imigrei_ic_pin 1" style={{ backgroundImage: `url('${imgImigreiIcPin1}')` }} />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#ff6c0e] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[60px]" data-name="imigrei_ic_caipirinha" style={{ backgroundImage: `url('${imgImigreiIcCaipirinha}')` }} />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#fff8e2] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[71px]" data-name="imigrei_ic_mundo" style={{ backgroundImage: `url('${imgImigreiIcMundo}')` }} />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#b0ff0b] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[57px]" data-name="imigrei_ic_manicure" style={{ backgroundImage: `url('${imgImigreiIcManicure}')` }} />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#883ae1] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-[125px]" data-name="Container">
      <div className="bg-center bg-cover bg-no-repeat h-[70px] shrink-0 w-[73px]" data-name="imigrei_ic_pao de queijo 1" style={{ backgroundImage: `url('${imgImigreiIcPaoDeQueijo1}')` }} />
    </div>
  );
}

export default function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center relative size-full">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container />
    </div>
  );
}