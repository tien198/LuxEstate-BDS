import { useState, useEffect } from "react";
import svgPaths from "../../imports/svg-71nosye7sm";
import { Search, Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["Trang chủ", "Dự án", "Dịch vụ", "Tin tức", "Liên hệ"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/95 border-b border-gray-100"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#1a1a2e] to-[#c9a96e] flex items-center justify-center">
            <svg width="13.5" height="18" viewBox="0 0 13.5 18" fill="none">
              <path d={svgPaths.p2e8ebd00} fill="white" />
            </svg>
          </div>
          <span
            className="text-[24px] text-[#1a1a2e] tracking-[-0.5px]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            LuxEstate
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={item}
              href="#"
              className={`text-[16px] tracking-[-0.5px] transition-colors duration-300 hover:text-[#c9a96e] ${
                i === 0
                  ? "text-[#1a1a2e]"
                  : "text-[#4b5563]"
              }`}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: i === 0 ? 500 : 400,
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right: Search + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 text-[#4b5563] hover:text-[#c9a96e] transition-colors">
            <Search size={16} />
          </button>
          <button
            className="h-[44px] px-6 rounded-lg bg-gradient-to-r from-[#1a1a2e] to-[#c9a96e] text-white text-[16px] tracking-[-0.5px] hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a96e]/20"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            Tư vấn miễn phí
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#1a1a2e]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-white ${
          mobileOpen ? "max-h-[400px] border-b border-gray-100" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[16px] text-[#4b5563] hover:text-[#c9a96e] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item}
            </a>
          ))}
          <button
            className="h-[44px] px-6 rounded-lg bg-gradient-to-r from-[#1a1a2e] to-[#c9a96e] text-white text-[16px] w-full"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            Tư vấn miễn phí
          </button>
        </div>
      </div>
    </header>
  );
}
