import svgPaths from "./svg-71nosye7sm";
import imgImg from "figma:asset/006bbcb0520b57b52e3bb9f4ee20cd462fd4d65f.png";
import imgImg1 from "figma:asset/6906eee40e2fbbbc3c26ecf03e22a67e608ef429.png";
import imgImg2 from "figma:asset/43472fff57d75e7dd1be1aa7f80314ff935a4158.png";
import imgImg3 from "figma:asset/8fcaafcbeeb57479930b79fb614f1ed7e1bc3d9a.png";

function Div() {
  return <div className="absolute bg-[rgba(0,0,0,0.2)] border-0 border-[#e5e7eb] border-solid h-[800px] left-0 top-0 w-[1440px]" data-name="div" />;
}

function Img() {
  return (
    <div className="absolute left-0 opacity-30 pointer-events-none size-[1440px] top-0" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImg} />
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0" />
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[800px] left-0 overflow-clip top-0 w-[1440px]" data-name="div">
      <Img />
    </div>
  );
}

function H() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[225px] left-0 top-0 w-[584px]" data-name="h1">
      <div className="absolute font-['Inter:Regular',sans-serif] font-['Playfair_Display:Bold',sans-serif] font-bold font-normal leading-[75px] left-0 not-italic text-[0px] text-[60px] text-black top-[-3px] tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0 text-white">Khám phá</p>
        <p className="mb-0 text-[#c9a96e]">Bất động sản</p>
        <p className="text-white">{` Đẳng cấp`}</p>
      </div>
    </div>
  );
}

function P() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[65px] left-0 top-[249px] w-[584px]" data-name="p">
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[33px] left-0 not-italic text-[#e5e7eb] text-[20px] top-[4px] tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">{`Chúng tôi mang đến những giải pháp bất động sản cao cấp, `}</p>
        <p>từ căn hộ sang trọng đến biệt thự đẳng cấp quốc tế.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#c9a96e] border-0 border-[#e5e7eb] border-solid h-[60px] left-0 rounded-[8px] top-0 w-[146.297px]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[73.15px] not-italic text-[#1a1a2e] text-[16px] text-center top-[20px] tracking-[-0.5px] w-[154.297px] whitespace-pre-wrap">Xem dự án</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-2 border-solid border-white h-[60px] left-[162.3px] rounded-[8px] top-0 w-[165.953px]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[80.98px] not-italic text-[16px] text-center text-white top-[18px] tracking-[-0.5px] w-[173.953px] whitespace-pre-wrap">Liên hệ ngay</p>
    </div>
  );
}

function Div5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[60px] left-0 top-[346px] w-[584px]" data-name="div">
      <Button />
      <Button1 />
    </div>
  );
}

function Div4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[406px] left-0 top-[21px] w-[584px]" data-name="div">
      <H />
      <P />
      <Div5 />
    </div>
  );
}

function H2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[32px] left-[32px] top-[32px] w-[518px]" data-name="h3">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[32px] left-0 text-[24px] text-white top-0 tracking-[-0.5px]">Tìm kiếm nhanh</p>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[20px] left-0 top-0 w-[518px]" data-name="label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[#e5e7eb] text-[14px] top-px tracking-[-0.5px] w-[526px] whitespace-pre-wrap">Loại bất động sản</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[477px] size-[32px] top-[7px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.pfd263c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Select() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.3)] border-solid h-[48px] left-0 rounded-[8px] top-[28px] w-[518px]" data-name="select">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-[11px] not-italic overflow-hidden text-[16px] text-ellipsis text-white top-[23px] tracking-[-0.5px] w-[52px] whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden">Căn hộ</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Div9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[76px] left-0 top-0 w-[518px]" data-name="div">
      <Label />
      <Select />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[20px] left-0 top-0 w-[518px]" data-name="label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[#e5e7eb] text-[14px] top-px tracking-[-0.5px] w-[526px] whitespace-pre-wrap">Khu vực</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[477px] size-[32px] top-[7px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path clipRule="evenodd" d={svgPaths.pfd263c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Select1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.3)] border-solid h-[48px] left-0 rounded-[8px] top-[28px] w-[518px]" data-name="select">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[48px] justify-center leading-[0] left-[11px] not-italic overflow-hidden text-[16px] text-ellipsis text-white top-[23px] tracking-[-0.5px] w-[50px] whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden">Quận 1</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Div10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[76px] left-0 top-[92px] w-[518px]" data-name="div">
      <Label1 />
      <Select1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[20px] left-0 top-0 w-[251px]" data-name="label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[#e5e7eb] text-[14px] top-px tracking-[-0.5px] w-[259px] whitespace-pre-wrap">Giá từ</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.3)] border-solid h-[50px] left-0 rounded-[8px] top-[28px] w-[251px]" data-name="input">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[50px] justify-center leading-[0] left-[15px] not-italic text-[16px] text-[rgba(255,255,255,0.5)] top-[24px] tracking-[-0.5px] w-[219px]">
        <p className="leading-[24px] whitespace-pre-wrap">1 tỷ</p>
      </div>
    </div>
  );
}

function Div12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[78px] left-0 top-0 w-[251px]" data-name="div">
      <Label2 />
      <Input />
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[20px] left-0 top-0 w-[251px]" data-name="label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17px] left-0 not-italic text-[#e5e7eb] text-[14px] top-px tracking-[-0.5px] w-[259px] whitespace-pre-wrap">Giá đến</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.3)] border-solid h-[50px] left-0 rounded-[8px] top-[28px] w-[251px]" data-name="input">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[50px] justify-center leading-[0] left-[15px] not-italic text-[16px] text-[rgba(255,255,255,0.5)] top-[24px] tracking-[-0.5px] w-[219px]">
        <p className="leading-[24px] whitespace-pre-wrap">10 tỷ</p>
      </div>
    </div>
  );
}

function Div13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[78px] left-[267px] top-0 w-[251px]" data-name="div">
      <Label3 />
      <Input1 />
    </div>
  );
}

function Div11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[78px] left-0 top-[184px] w-[518px]" data-name="div">
      <Div12 />
      <Div13 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#c9a96e] border-0 border-[#e5e7eb] border-solid h-[48px] left-0 rounded-[8px] top-[278px] w-[518px]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[259px] not-italic text-[#1a1a2e] text-[16px] text-center top-[14px] tracking-[-0.5px] w-[526px] whitespace-pre-wrap">Tìm kiếm</p>
    </div>
  );
}

function Div8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[326px] left-[32px] top-[88px] w-[518px]" data-name="div">
      <Div9 />
      <Div10 />
      <Div11 />
      <Button2 />
    </div>
  );
}

function Div7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] border-solid h-[448px] left-0 rounded-[16px] top-0 w-[584px]" data-name="div">
      <H2 />
      <Div8 />
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[448px] left-[632px] top-0 w-[584px]" data-name="div">
      <Div7 />
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[448px] left-[32px] top-0 w-[1216px]" data-name="div">
      <Div4 />
      <Div6 />
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[448px] left-[80px] top-0 w-[1280px]" data-name="div">
      <Div3 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute border-0 border-[#e5e7eb] border-solid h-[800px] left-0 overflow-clip top-[81px] w-[1440px]" data-name="section" style={{ backgroundImage: "linear-gradient(150.945deg, rgb(26, 26, 46) 0%, rgb(22, 33, 62) 35.355%, rgb(26, 26, 46) 70.711%)" }}>
      <Div />
      <Div1 />
      <Div2 />
    </div>
  );
}

function H1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[40px] left-0 top-0 w-[1216px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[40px] left-[608px] text-[#1a1a2e] text-[36px] text-center top-[-4px] tracking-[-0.5px]">Tại sao chọn chúng tôi</p>
    </div>
  );
}

function P1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[28px] left-[272px] top-[56px] w-[672px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[336px] not-italic text-[#4b5563] text-[18px] text-center top-[3px] tracking-[-0.5px]">Với kinh nghiệm hơn 15 năm trong lĩnh vực bất động sản cao cấp</p>
    </div>
  );
}

function Div15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[84px] left-[32px] top-0 w-[1216px]" data-name="div">
      <H1 />
      <P1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 24">
        <g id="Frame">
          <g clipPath="url(#clip0_1_325)">
            <path d={svgPaths.p2f501700} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_325">
            <path d="M0 0H18V24H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-0 top-[3px] w-[18px]" data-name="svg">
      <Frame3 />
    </div>
  );
}

function I() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[32px] left-[23px] top-[16px] w-[18px]" data-name="i">
      <Svg />
    </div>
  );
}

function Div18() {
  return (
    <div className="absolute bg-gradient-to-r border-0 border-[#e5e7eb] border-solid from-[#1a1a2e] left-[32px] rounded-[12px] size-[64px] to-[#c9a96e] top-[32px]" data-name="div">
      <I />
    </div>
  );
}

function H3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[32px] left-[32px] top-[120px] w-[320px]" data-name="h3">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#1a1a2e] text-[24px] top-0 tracking-[-0.5px]">Uy tín hàng đầu</p>
    </div>
  );
}

function Div17() {
  return (
    <div className="absolute bg-white border-0 border-[#e5e7eb] border-solid h-[278px] left-0 rounded-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)] top-0 w-[384px]" data-name="div">
      <Div18 />
      <H3 />
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[32px] not-italic text-[#4b5563] text-[16px] top-[171px] tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">{`Được tin tưởng bởi hàng nghìn khách `}</p>
        <p className="mb-0">{`hàng với chất lượng dịch vụ xuất sắc và `}</p>
        <p>độ uy tín cao.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[30px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 24">
        <g id="Frame">
          <g clipPath="url(#clip0_1_346)">
            <path d={svgPaths.pba1a780} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_346">
            <path d="M0 0H30V24H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg1() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-0 top-[3px] w-[30px]" data-name="svg">
      <Frame4 />
    </div>
  );
}

function I1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[32px] left-[17px] top-[16px] w-[30px]" data-name="i">
      <Svg1 />
    </div>
  );
}

function Div20() {
  return (
    <div className="absolute bg-gradient-to-r border-0 border-[#e5e7eb] border-solid from-[#1a1a2e] left-[32px] rounded-[12px] size-[64px] to-[#c9a96e] top-[32px]" data-name="div">
      <I1 />
    </div>
  );
}

function H4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[32px] left-[32px] top-[120px] w-[320px]" data-name="h3">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#1a1a2e] text-[24px] top-0 tracking-[-0.5px]">Đội ngũ chuyên nghiệp</p>
    </div>
  );
}

function Div19() {
  return (
    <div className="absolute bg-white border-0 border-[#e5e7eb] border-solid h-[278px] left-[416px] rounded-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)] top-0 w-[384px]" data-name="div">
      <Div20 />
      <H4 />
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[32px] not-italic text-[#4b5563] text-[16px] top-[171px] tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">{`Đội ngũ chuyên gia giàu kinh nghiệm, tư `}</p>
        <p className="mb-0">{`vấn tận tình và hỗ trợ 24/7 cho khách `}</p>
        <p>hàng.</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d="M24 24H0V0H24V24Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path d={svgPaths.p3bdf84c0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[24px] top-[3px]" data-name="svg">
      <Frame5 />
    </div>
  );
}

function I2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[32px] left-[20px] top-[16px] w-[24px]" data-name="i">
      <Svg2 />
    </div>
  );
}

function Div22() {
  return (
    <div className="absolute bg-gradient-to-r border-0 border-[#e5e7eb] border-solid from-[#1a1a2e] left-[32px] rounded-[12px] size-[64px] to-[#c9a96e] top-[32px]" data-name="div">
      <I2 />
    </div>
  );
}

function H5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[32px] left-[32px] top-[120px] w-[320px]" data-name="h3">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#1a1a2e] text-[24px] top-0 tracking-[-0.5px]">Tăng trưởng bền vững</p>
    </div>
  );
}

function Div21() {
  return (
    <div className="absolute bg-white border-0 border-[#e5e7eb] border-solid h-[278px] left-[832px] rounded-[16px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_10px_15px_0px_rgba(0,0,0,0.1)] top-0 w-[384px]" data-name="div">
      <Div22 />
      <H5 />
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[32px] not-italic text-[#4b5563] text-[16px] top-[171px] tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">{`Cam kết mang lại giá trị đầu tư tối ưu với `}</p>
        <p>tỷ suất sinh lời hấp dẫn và bền vững.</p>
      </div>
    </div>
  );
}

function Div16() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[278px] left-[32px] top-[148px] w-[1216px]" data-name="div">
      <Div17 />
      <Div19 />
      <Div21 />
    </div>
  );
}

function Div14() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[426px] left-[80px] top-[80px] w-[1280px]" data-name="div">
      <Div15 />
      <Div16 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#f8f9fa] border-0 border-[#e5e7eb] border-solid h-[586px] left-0 top-[800px] w-[1440px]" data-name="section">
      <Div14 />
    </div>
  );
}

function H6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[40px] left-0 top-0 w-[1216px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[40px] left-[608px] text-[#1a1a2e] text-[36px] text-center top-[-4px] tracking-[-0.5px]">Dự án nổi bật</p>
    </div>
  );
}

function P2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[28px] left-[272px] top-[56px] w-[672px]" data-name="p">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-[336px] not-italic text-[#4b5563] text-[18px] text-center top-[3px] tracking-[-0.5px]">Khám phá những dự án bất động sản cao cấp đang được quan tâm nhất</p>
    </div>
  );
}

function Div24() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[84px] left-[32px] top-0 w-[1216px]" data-name="div">
      <H6 />
      <P2 />
    </div>
  );
}

function Img1() {
  return (
    <div className="absolute h-[256px] left-0 pointer-events-none top-0 w-[384px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImg1} />
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0" />
    </div>
  );
}

function Div28() {
  return (
    <div className="absolute bg-[#c9a96e] border-0 border-[#e5e7eb] border-solid h-[28px] left-[16px] rounded-[9999px] top-[16px] w-[128.391px]" data-name="div">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17px] left-[64.2px] not-italic text-[#1a1a2e] text-[14px] text-center top-[5px] tracking-[-0.5px] w-[136.391px] whitespace-pre-wrap">Căn hộ cao cấp</p>
    </div>
  );
}

function Div27() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[256px] left-0 overflow-clip rounded-[16px] top-0 w-[384px]" data-name="div">
      <Img1 />
      <Div28 />
    </div>
  );
}

function H7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[32px] left-0 top-[280px] w-[384px]" data-name="h3">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#1a1a2e] text-[24px] top-0 tracking-[-0.5px]">Vinhomes Central Park</p>
    </div>
  );
}

function P3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[320px] w-[384px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4b5563] text-[16px] top-[2px] tracking-[-0.5px]">Quận Bình Thạnh, TP.HCM</p>
    </div>
  );
}

function Div29() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[28px] left-0 not-italic top-[360px] tracking-[-0.5px] w-[384px]" data-name="div">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#c9a96e] text-[20px] top-[2px]">Từ 3.5 tỷ</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[286.88px] text-[#6b7280] text-[14px] top-[5px]">120m² - 150m²</p>
    </div>
  );
}

function Div26() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[388px] left-0 top-0 w-[384px]" data-name="div">
      <Div27 />
      <H7 />
      <P3 />
      <Div29 />
    </div>
  );
}

function Img2() {
  return (
    <div className="absolute h-[256px] left-0 pointer-events-none top-0 w-[384px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImg2} />
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0" />
    </div>
  );
}

function Div32() {
  return (
    <div className="absolute bg-[#c9a96e] border-0 border-[#e5e7eb] border-solid h-[28px] left-[16px] rounded-[9999px] top-[16px] w-[76.234px]" data-name="div">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17px] left-[38.12px] not-italic text-[#1a1a2e] text-[14px] text-center top-[5px] tracking-[-0.5px] w-[84.234px] whitespace-pre-wrap">Biệt thự</p>
    </div>
  );
}

function Div31() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[256px] left-0 overflow-clip rounded-[16px] top-0 w-[384px]" data-name="div">
      <Img2 />
      <Div32 />
    </div>
  );
}

function H8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[32px] left-0 top-[280px] w-[384px]" data-name="h3">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#1a1a2e] text-[24px] top-0 tracking-[-0.5px]">Saigon Mystery Villas</p>
    </div>
  );
}

function P4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[320px] w-[384px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4b5563] text-[16px] top-[2px] tracking-[-0.5px]">Quận 2, TP.HCM</p>
    </div>
  );
}

function Div33() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[28px] left-0 not-italic top-[360px] tracking-[-0.5px] w-[384px]" data-name="div">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#c9a96e] text-[20px] top-[2px]">Từ 15 tỷ</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[280.5px] text-[#6b7280] text-[14px] top-[5px]">300m² - 500m²</p>
    </div>
  );
}

function Div30() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[388px] left-[416px] top-0 w-[384px]" data-name="div">
      <Div31 />
      <H8 />
      <P4 />
      <Div33 />
    </div>
  );
}

function Img3() {
  return (
    <div className="absolute h-[256px] left-0 pointer-events-none top-0 w-[384px]" data-name="img">
      <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgImg3} />
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0" />
    </div>
  );
}

function Div36() {
  return (
    <div className="absolute bg-[#c9a96e] border-0 border-[#e5e7eb] border-solid h-[28px] left-[16px] rounded-[9999px] top-[16px] w-[80.609px]" data-name="div">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17px] left-[40.3px] not-italic text-[#1a1a2e] text-[14px] text-center top-[5px] tracking-[-0.5px] w-[88.609px] whitespace-pre-wrap">Nhà phố</p>
    </div>
  );
}

function Div35() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[256px] left-0 overflow-clip rounded-[16px] top-0 w-[384px]" data-name="div">
      <Img3 />
      <Div36 />
    </div>
  );
}

function H9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[32px] left-0 top-[280px] w-[384px]" data-name="h3">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[32px] left-0 text-[#1a1a2e] text-[24px] top-0 tracking-[-0.5px]">Lakeview Residences</p>
    </div>
  );
}

function P5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[320px] w-[384px]" data-name="p">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4b5563] text-[16px] top-[2px] tracking-[-0.5px]">Quận 7, TP.HCM</p>
    </div>
  );
}

function Div37() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[28px] left-0 not-italic top-[360px] tracking-[-0.5px] w-[384px]" data-name="div">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#c9a96e] text-[20px] top-[2px]">Từ 8.5 tỷ</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[280.91px] text-[#6b7280] text-[14px] top-[5px]">200m² - 250m²</p>
    </div>
  );
}

function Div34() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[388px] left-[832px] top-0 w-[384px]" data-name="div">
      <Div35 />
      <H9 />
      <P5 />
      <Div37 />
    </div>
  );
}

function Div25() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[388px] left-[32px] top-[148px] w-[1216px]" data-name="div">
      <Div26 />
      <Div30 />
      <Div34 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-gradient-to-r border-0 border-[#e5e7eb] border-solid from-[#1a1a2e] h-[56px] left-[511.33px] rounded-[8px] to-[#c9a96e] top-0 w-[193.344px]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[96.67px] not-italic text-[16px] text-center text-white top-[18px] tracking-[-0.5px] w-[201.344px] whitespace-pre-wrap">Xem tất cả dự án</p>
    </div>
  );
}

function Div38() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[56px] left-[32px] top-[584px] w-[1216px]" data-name="div">
      <Button3 />
    </div>
  );
}

function Div23() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[640px] left-[80px] top-[80px] w-[1280px]" data-name="div">
      <Div24 />
      <Div25 />
      <Div38 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-white border-0 border-[#e5e7eb] border-solid h-[800px] left-0 top-[1386px] w-[1440px]" data-name="section">
      <Div23 />
    </div>
  );
}

function Div42() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[40px] left-0 top-0 w-[280px]" data-name="div">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[44px] left-[140px] not-italic text-[#c9a96e] text-[36px] text-center top-[-2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">500+</p>
    </div>
  );
}

function Div43() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[48px] w-[280px]" data-name="div">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[140px] not-italic text-[16px] text-center text-white top-[2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">Dự án hoàn thành</p>
    </div>
  );
}

function Div41() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[72px] left-0 top-0 w-[280px]" data-name="div">
      <Div42 />
      <Div43 />
    </div>
  );
}

function Div45() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[40px] left-0 top-0 w-[280px]" data-name="div">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[44px] left-[140px] not-italic text-[#c9a96e] text-[36px] text-center top-[-2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">10K+</p>
    </div>
  );
}

function Div46() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[48px] w-[280px]" data-name="div">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[140px] not-italic text-[16px] text-center text-white top-[2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">Khách hàng hài lòng</p>
    </div>
  );
}

function Div44() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[72px] left-[312px] top-0 w-[280px]" data-name="div">
      <Div45 />
      <Div46 />
    </div>
  );
}

function Div48() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[40px] left-0 top-0 w-[280px]" data-name="div">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[44px] left-[140px] not-italic text-[#c9a96e] text-[36px] text-center top-[-2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">15+</p>
    </div>
  );
}

function Div49() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[48px] w-[280px]" data-name="div">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[140px] not-italic text-[16px] text-center text-white top-[2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">Năm kinh nghiệm</p>
    </div>
  );
}

function Div47() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[72px] left-[624px] top-0 w-[280px]" data-name="div">
      <Div48 />
      <Div49 />
    </div>
  );
}

function Div51() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[40px] left-0 top-0 w-[280px]" data-name="div">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[44px] left-[140px] not-italic text-[#c9a96e] text-[36px] text-center top-[-2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">95%</p>
    </div>
  );
}

function Div52() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[48px] w-[280px]" data-name="div">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[140px] not-italic text-[16px] text-center text-white top-[2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">Tỷ lệ hài lòng</p>
    </div>
  );
}

function Div50() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[72px] left-[936px] top-0 w-[280px]" data-name="div">
      <Div51 />
      <Div52 />
    </div>
  );
}

function Div40() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[72px] left-[32px] top-0 w-[1216px]" data-name="div">
      <Div41 />
      <Div44 />
      <Div47 />
      <Div50 />
    </div>
  );
}

function Div39() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[72px] left-[80px] top-[80px] w-[1280px]" data-name="div">
      <Div40 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-gradient-to-r border-0 border-[#e5e7eb] border-solid from-[#1a1a2e] h-[232px] left-0 to-[#16213e] top-[2186px] w-[1440px]" data-name="section">
      <Div39 />
    </div>
  );
}

function H10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[40px] left-[32px] top-0 w-[832px]" data-name="h2">
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[40px] left-[416px] text-[#1a1a2e] text-[36px] text-center top-[-4px] tracking-[-0.5px]">Sẵn sàng tìm kiếm ngôi nhà mơ ước?</p>
    </div>
  );
}

function P6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[58.5px] left-[32px] top-[64px] w-[832px]" data-name="p">
      <div className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-[416px] not-italic text-[#4b5563] text-[18px] text-center top-[4px] tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">{`Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và tìm kiếm bất động sản phù hợp `}</p>
        <p>với nhu cầu của bạn.</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <g clipPath="url(#clip0_1_340)">
            <path d={svgPaths.p9204100} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_340">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg3() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-[2px]" data-name="svg">
      <Frame6 />
    </div>
  );
}

function I3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[20px] left-[32px] top-[20px] w-[16px]" data-name="i">
      <Svg3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-gradient-to-r border-0 border-[#e5e7eb] border-solid from-[#1a1a2e] h-[60px] left-[150.67px] rounded-[8px] to-[#c9a96e] top-0 w-[274.938px]" data-name="button">
      <I3 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[149.47px] not-italic text-[16px] text-center text-white top-[20px] tracking-[-0.5px] w-[194.938px] whitespace-pre-wrap">{` Gọi ngay: 0123 456 789`}</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path d={svgPaths.pa71cb00} fill="var(--fill-0, #1A1A2E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg4() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-[2px]" data-name="svg">
      <Frame7 />
    </div>
  );
}

function I4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[20px] left-[32px] top-[18px] w-[16px]" data-name="i">
      <Svg4 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-2 border-[#1a1a2e] border-solid h-[60px] left-[441.61px] rounded-[8px] top-0 w-[239.703px]" data-name="button">
      <I4 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[129.85px] not-italic text-[#1a1a2e] text-[16px] text-center top-[18px] tracking-[-0.5px] w-[155.703px] whitespace-pre-wrap">{` Gửi yêu cầu tư vấn`}</p>
    </div>
  );
}

function Div54() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[60px] left-[32px] top-[154.5px] w-[832px]" data-name="div">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Div53() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[214.5px] left-[272px] top-[80px] w-[896px]" data-name="div">
      <H10 />
      <P6 />
      <Div54 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-[#f8f9fa] border-0 border-[#e5e7eb] border-solid h-[374.5px] left-0 top-[2418px] w-[1440px]" data-name="section">
      <Div53 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.5px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 18">
        <g id="Frame">
          <g clipPath="url(#clip0_1_334)">
            <path d={svgPaths.p2e8ebd00} fill="var(--fill-0, #1A1A2E)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_334">
            <path d="M0 0H13.5V18H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-0 top-[4.25px] w-[13.5px]" data-name="svg">
      <Frame9 />
    </div>
  );
}

function I5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[28px] left-[13.25px] top-[6px] w-[13.5px]" data-name="i">
      <Svg5 />
    </div>
  );
}

function Div59() {
  return (
    <div className="absolute bg-gradient-to-r border-0 border-[#e5e7eb] border-solid from-[#c9a96e] left-0 rounded-[8px] size-[40px] to-[rgba(201,169,110,0.8)] top-0" data-name="div">
      <I5 />
    </div>
  );
}

function Div58() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[40px] left-0 top-0 w-[280px]" data-name="div">
      <Div59 />
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[32px] left-[48px] text-[24px] text-white top-[4px] tracking-[-0.5px]">LuxEstate</p>
    </div>
  );
}

function P7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[78px] left-0 top-[64px] w-[280px]" data-name="p">
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#d1d5db] text-[16px] top-[3px] tracking-[-0.5px] whitespace-nowrap">
        <p className="mb-0">{`Đối tác tin cậy trong lĩnh vực bất `}</p>
        <p className="mb-0">{`động sản cao cấp, mang đến những `}</p>
        <p>giải pháp tối ưu cho khách hàng.</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <g clipPath="url(#clip0_1_322)">
            <path d={svgPaths.pcfcb900} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_322">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-[4px]" data-name="svg">
      <Frame10 />
    </div>
  );
}

function I6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-[12px] top-[8px] w-[16px]" data-name="i">
      <Svg6 />
    </div>
  );
}

function Div61() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] border-0 border-[#e5e7eb] border-solid left-0 rounded-[8px] size-[40px] top-0" data-name="div">
      <I6 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="Frame">
          <g clipPath="url(#clip0_1_319)">
            <path d={svgPaths.p757b300} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_319">
            <path d="M0 0H14V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg7() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-center left-0 top-[4px] w-[14px]" data-name="svg">
      <Frame11 />
    </div>
  );
}

function I7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-[13px] top-[8px] w-[14px]" data-name="i">
      <Svg7 />
    </div>
  );
}

function Div62() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] border-0 border-[#e5e7eb] border-solid left-[56px] rounded-[8px] size-[40px] top-0" data-name="div">
      <I7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
        <g id="Frame">
          <path d="M14 16H0V0H14V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path d={svgPaths.p21171b80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg8() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-center left-0 top-[4px] w-[14px]" data-name="svg">
      <Frame12 />
    </div>
  );
}

function I8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-[13px] top-[8px] w-[14px]" data-name="i">
      <Svg8 />
    </div>
  );
}

function Div63() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] border-0 border-[#e5e7eb] border-solid left-[112px] rounded-[8px] size-[40px] top-0" data-name="div">
      <I8 />
    </div>
  );
}

function Div60() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[40px] left-0 top-[166px] w-[280px]" data-name="div">
      <Div61 />
      <Div62 />
      <Div63 />
    </div>
  );
}

function Div57() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[206px] left-0 top-0 w-[280px]" data-name="div">
      <Div58 />
      <P7 />
      <Div60 />
    </div>
  );
}

function H11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[28px] left-0 top-0 w-[280px]" data-name="h4">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[28px] left-0 text-[20px] text-white top-0 tracking-[-0.5px]">Dịch vụ</p>
    </div>
  );
}

function Div65() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[280px]" data-name="div">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5db] text-[16px] top-[2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">Mua bán BĐS</p>
    </div>
  );
}

function Li() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[280px]" data-name="li">
      <Div65 />
    </div>
  );
}

function Div66() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[280px]" data-name="div">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5db] text-[16px] top-[2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">Cho thuê</p>
    </div>
  );
}

function Li1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[36px] w-[280px]" data-name="li">
      <Div66 />
    </div>
  );
}

function Div67() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[280px]" data-name="div">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5db] text-[16px] top-[2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">Tư vấn đầu tư</p>
    </div>
  );
}

function Li2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[72px] w-[280px]" data-name="li">
      <Div67 />
    </div>
  );
}

function Div68() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[280px]" data-name="div">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5db] text-[16px] top-[2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">Định giá BĐS</p>
    </div>
  );
}

function Li3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[108px] w-[280px]" data-name="li">
      <Div68 />
    </div>
  );
}

function Ul() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[132px] left-0 top-[52px] w-[280px]" data-name="ul">
      <Li />
      <Li1 />
      <Li2 />
      <Li3 />
    </div>
  );
}

function Div64() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[206px] left-[312px] top-0 w-[280px]" data-name="div">
      <H11 />
      <Ul />
    </div>
  );
}

function H12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[28px] left-0 top-0 w-[280px]" data-name="h4">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[28px] left-0 text-[20px] text-white top-0 tracking-[-0.5px]">Khu vực</p>
    </div>
  );
}

function Div70() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[280px]" data-name="div">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5db] text-[16px] top-[2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">TP. Hồ Chí Minh</p>
    </div>
  );
}

function Li4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[280px]" data-name="li">
      <Div70 />
    </div>
  );
}

function Div71() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[280px]" data-name="div">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5db] text-[16px] top-[2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">Hà Nội</p>
    </div>
  );
}

function Li5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[36px] w-[280px]" data-name="li">
      <Div71 />
    </div>
  );
}

function Div72() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[280px]" data-name="div">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5db] text-[16px] top-[2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">Đà Nẵng</p>
    </div>
  );
}

function Li6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[72px] w-[280px]" data-name="li">
      <Div72 />
    </div>
  );
}

function Div73() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[280px]" data-name="div">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5db] text-[16px] top-[2px] tracking-[-0.5px] w-[288px] whitespace-pre-wrap">Nha Trang</p>
    </div>
  );
}

function Li7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[108px] w-[280px]" data-name="li">
      <Div73 />
    </div>
  );
}

function Ul1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[132px] left-0 top-[52px] w-[280px]" data-name="ul">
      <Li4 />
      <Li5 />
      <Li6 />
      <Li7 />
    </div>
  );
}

function Div69() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[206px] left-[624px] top-0 w-[280px]" data-name="div">
      <H12 />
      <Ul1 />
    </div>
  );
}

function H13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[28px] left-0 top-0 w-[280px]" data-name="h4">
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[28px] left-0 text-[20px] text-white top-0 tracking-[-0.5px]">Liên hệ</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[12px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
        <g id="Frame">
          <g clipPath="url(#clip0_1_316)">
            <path d={svgPaths.p30aca800} fill="var(--fill-0, #C9A96E)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_316">
            <path d="M0 0H12V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-center justify-center left-0 top-[4px] w-[12px]" data-name="svg">
      <Frame13 />
    </div>
  );
}

function I9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[12px]" data-name="i">
      <Svg9 />
    </div>
  );
}

function Div76() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[280px]" data-name="div">
      <I9 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#d1d5db] text-[16px] top-[2px] tracking-[-0.5px]">123 Nguyễn Huệ, Q1, TP.HCM</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <g clipPath="url(#clip0_1_313)">
            <path d={svgPaths.p9204100} fill="var(--fill-0, #C9A96E)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_313">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg10() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-[4px]" data-name="svg">
      <Frame14 />
    </div>
  );
}

function I10() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[16px]" data-name="i">
      <Svg10 />
    </div>
  );
}

function Div77() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[40px] w-[280px]" data-name="div">
      <I10 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[28px] not-italic text-[#d1d5db] text-[16px] top-[2px] tracking-[-0.5px]">0123 456 789</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M16 16H0V0H16V16Z" stroke="var(--stroke-0, #E5E7EB)" />
          <path d={svgPaths.pa71cb00} fill="var(--fill-0, #C9A96E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Svg11() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-[4px]" data-name="svg">
      <Frame15 />
    </div>
  );
}

function I11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[16px]" data-name="i">
      <Svg11 />
    </div>
  );
}

function Div78() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[80px] w-[280px]" data-name="div">
      <I11 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[28px] not-italic text-[#d1d5db] text-[16px] top-[2px] tracking-[-0.5px]">info@luxestate.vn</p>
    </div>
  );
}

function Div75() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[104px] left-0 top-[52px] w-[280px]" data-name="div">
      <Div76 />
      <Div77 />
      <Div78 />
    </div>
  );
}

function Div74() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[206px] left-[936px] top-0 w-[280px]" data-name="div">
      <H13 />
      <Div75 />
    </div>
  );
}

function Div56() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[206px] left-[32px] top-0 w-[1216px]" data-name="div">
      <Div57 />
      <Div64 />
      <Div69 />
      <Div74 />
    </div>
  );
}

function Div79() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-[rgba(255,255,255,0.2)] border-solid border-t h-[57px] left-[32px] top-[254px] w-[1216px]" data-name="div">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[608px] not-italic text-[#d1d5db] text-[16px] text-center top-[34px] tracking-[-0.5px]">© 2024 LuxEstate. All rights reserved.</p>
    </div>
  );
}

function Div55() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[311px] left-[80px] top-[64px] w-[1280px]" data-name="div">
      <Div56 />
      <Div79 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#1a1a2e] border-0 border-[#e5e7eb] border-solid h-[439px] left-0 top-0 w-[1440px]" data-name="footer">
      <Div55 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[439px] left-0 top-[2792.5px] w-[1440px]">
      <Footer />
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[18px] relative shrink-0 w-[13.5px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 18">
        <g id="Frame">
          <g clipPath="url(#clip0_1_307)">
            <path d={svgPaths.p2e8ebd00} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_307">
            <path d="M0 0H13.5V18H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg12() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center justify-center left-0 top-[4.25px] w-[13.5px]" data-name="svg">
      <Frame16 />
    </div>
  );
}

function I12() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[28px] left-[13.25px] top-[6px] w-[13.5px]" data-name="i">
      <Svg12 />
    </div>
  );
}

function Div83() {
  return (
    <div className="absolute bg-gradient-to-r border-0 border-[#e5e7eb] border-solid from-[#1a1a2e] left-0 rounded-[8px] size-[40px] to-[#c9a96e] top-0" data-name="div">
      <I12 />
    </div>
  );
}

function Div82() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[40px] left-0 top-[20px] w-[157.719px]" data-name="div">
      <Div83 />
      <p className="absolute font-['Playfair_Display:Bold',sans-serif] font-bold leading-[32px] left-[48px] text-[#1a1a2e] text-[24px] top-[4px] tracking-[-0.5px]">LuxEstate</p>
    </div>
  );
}

function Div84() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-0 w-[77.031px]" data-name="div">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1a1a2e] text-[16px] top-[2px] tracking-[-0.5px] w-[85.031px] whitespace-pre-wrap">Trang chủ</p>
    </div>
  );
}

function Div85() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-[109.03px] top-0 w-[44.406px]" data-name="div">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4b5563] text-[16px] top-[2px] tracking-[-0.5px] w-[52.406px] whitespace-pre-wrap">Dự án</p>
    </div>
  );
}

function Div86() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-[185.44px] top-0 w-[56.984px]" data-name="div">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4b5563] text-[16px] top-[2px] tracking-[-0.5px] w-[64.984px] whitespace-pre-wrap">Dịch vụ</p>
    </div>
  );
}

function Div87() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-[274.42px] top-0 w-[52.453px]" data-name="div">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4b5563] text-[16px] top-[2px] tracking-[-0.5px] w-[60.453px] whitespace-pre-wrap">Tin tức</p>
    </div>
  );
}

function Div88() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-[358.88px] top-0 w-[55px]" data-name="div">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4b5563] text-[16px] top-[2px] tracking-[-0.5px] w-[63px] whitespace-pre-wrap">Liên hệ</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-[378.88px] top-[28px] w-[413.875px]" data-name="nav">
      <Div84 />
      <Div85 />
      <Div86 />
      <Div87 />
      <Div88 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <g clipPath="url(#clip0_1_304)">
            <path d={svgPaths.p1d73a600} fill="var(--fill-0, #4B5563)" id="Vector" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_304">
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Svg13() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 size-[16px] top-[2px]" data-name="svg">
      <Frame17 />
    </div>
  );
}

function I13() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[20px] left-0 top-[2px] w-[16px]" data-name="i">
      <Svg13 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[24px] left-0 top-[10px] w-[16px]" data-name="button">
      <I13 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-gradient-to-r border-0 border-[#e5e7eb] border-solid from-[#1a1a2e] h-[44px] left-[32px] rounded-[8px] to-[#c9a96e] top-0 w-[170.094px]" data-name="button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[85.05px] not-italic text-[16px] text-center text-white top-[12px] tracking-[-0.5px] w-[178.094px] whitespace-pre-wrap">Tư vấn miễn phí</p>
    </div>
  );
}

function Div89() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[44px] left-[1013.91px] top-[18px] w-[202.094px]" data-name="div">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Div81() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[80px] left-[32px] top-0 w-[1216px]" data-name="div">
      <Div82 />
      <Nav />
      <Div89 />
    </div>
  );
}

function Div80() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] border-0 border-[#e5e7eb] border-solid h-[80px] left-[80px] top-0 w-[1280px]" data-name="div">
      <Div81 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] border-[#f3f4f6] border-b border-solid h-[81px] left-0 top-0 w-[1440px]" data-name="header">
      <Div80 />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white h-[3231.5px] relative shrink-0 w-[1440px]" data-name="body">
      <div aria-hidden="true" className="absolute border-0 border-[#e5e7eb] border-solid inset-0 pointer-events-none" />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Frame8 />
      <Header />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Body />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#ced4da] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}