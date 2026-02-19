import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const heroImage =
  "https://images.unsplash.com/photo-1765219311015-31ba1c260e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwaGVybyUyMGNpdHlzY2FwZSUyMG5pZ2h0fGVufDF8fHx8MTc3MTUxNzYyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(150.945deg, rgb(26, 26, 46) 0%, rgb(22, 33, 62) 35.355%, rgb(26, 26, 46) 70.711%)",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury cityscape"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-8 w-full py-20 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div
            className={`transition-all duration-1000 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1
              className="text-[40px] sm:text-[50px] lg:text-[60px] leading-[1.2] tracking-[-0.5px] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              <span className="text-white block">Khám phá</span>
              <span className="text-[#c9a96e] block">Bất động sản</span>
              <span className="text-white block">Đẳng cấp</span>
            </h1>
            <p
              className="text-[#e5e7eb] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] tracking-[-0.5px] mb-10 max-w-[520px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Chúng tôi mang đến những giải pháp bất động sản cao cấp, từ căn hộ
              sang trọng đến biệt thự đẳng cấp quốc tế.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="h-[56px] sm:h-[60px] px-8 rounded-lg bg-[#c9a96e] text-[#1a1a2e] text-[16px] tracking-[-0.5px] hover:bg-[#d4b87e] transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a96e]/30 hover:-translate-y-0.5"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                Xem dự án
              </button>
              <button
                className="h-[56px] sm:h-[60px] px-8 rounded-lg border-2 border-white text-white text-[16px] tracking-[-0.5px] hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
              >
                Liên hệ ngay
              </button>
            </div>
          </div>

          {/* Right: Search Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3
                className="text-[24px] text-white tracking-[-0.5px] mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                }}
              >
                Tìm kiếm nhanh
              </h3>
              <div className="flex flex-col gap-5">
                {/* Property Type */}
                <div>
                  <label
                    className="text-[14px] text-[#e5e7eb] mb-2 block tracking-[-0.5px]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Loại bất động sản
                  </label>
                  <div className="relative">
                    <select
                      className="w-full h-[48px] bg-white/20 border border-white/30 rounded-lg px-4 text-white text-[16px] appearance-none cursor-pointer focus:outline-none focus:border-[#c9a96e] transition-colors [&>option]:text-[#1a1a2e] [&>option]:bg-white"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <option value="apartment">Căn hộ</option>
                      <option value="villa">Biệt thự</option>
                      <option value="townhouse">Nhà phố</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
                      size={20}
                    />
                  </div>
                </div>

                {/* Area */}
                <div>
                  <label
                    className="text-[14px] text-[#e5e7eb] mb-2 block tracking-[-0.5px]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Khu vực
                  </label>
                  <div className="relative">
                    <select
                      className="w-full h-[48px] bg-white/20 border border-white/30 rounded-lg px-4 text-white text-[16px] appearance-none cursor-pointer focus:outline-none focus:border-[#c9a96e] transition-colors [&>option]:text-[#1a1a2e] [&>option]:bg-white"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <option value="q1">Quận 1</option>
                      <option value="q2">Quận 2</option>
                      <option value="q7">Quận 7</option>
                      <option value="bt">Bình Thạnh</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
                      size={20}
                    />
                  </div>
                </div>

                {/* Price Range */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-[14px] text-[#e5e7eb] mb-2 block tracking-[-0.5px]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Giá từ
                    </label>
                    <input
                      type="text"
                      placeholder="1 tỷ"
                      className="w-full h-[48px] bg-white/20 border border-white/30 rounded-lg px-4 text-white placeholder-white/50 text-[16px] focus:outline-none focus:border-[#c9a96e] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label
                      className="text-[14px] text-[#e5e7eb] mb-2 block tracking-[-0.5px]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Giá đến
                    </label>
                    <input
                      type="text"
                      placeholder="10 tỷ"
                      className="w-full h-[48px] bg-white/20 border border-white/30 rounded-lg px-4 text-white placeholder-white/50 text-[16px] focus:outline-none focus:border-[#c9a96e] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Search Button */}
                <button
                  className="w-full h-[48px] rounded-lg bg-[#c9a96e] text-[#1a1a2e] text-[16px] tracking-[-0.5px] hover:bg-[#d4b87e] transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a96e]/30"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}