import { useEffect, useRef, useState } from "react";
import svgPaths from "../../imports/svg-71nosye7sm";

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f8f9fa] py-16 lg:py-20">
      <div
        className={`max-w-[900px] mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2
          className="text-[26px] sm:text-[32px] lg:text-[36px] text-[#1a1a2e] tracking-[-0.5px] mb-5"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
        >
          Sẵn sàng tìm kiếm ngôi nhà mơ ước?
        </h2>
        <p
          className="text-[16px] lg:text-[18px] text-[#4b5563] leading-[30px] tracking-[-0.5px] mb-10 max-w-[700px] mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và tìm
          kiếm bất động sản phù hợp với nhu cầu của bạn.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            className="h-[56px] sm:h-[60px] px-8 rounded-lg bg-gradient-to-r from-[#1a1a2e] to-[#c9a96e] text-white text-[16px] tracking-[-0.5px] flex items-center gap-3 hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a96e]/20 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p9204100} fill="white" />
            </svg>
            Gọi ngay: 0123 456 789
          </button>
          <button
            className="h-[56px] sm:h-[60px] px-8 rounded-lg border-2 border-[#1a1a2e] text-[#1a1a2e] text-[16px] tracking-[-0.5px] flex items-center gap-3 hover:bg-[#1a1a2e] hover:text-white transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.pa71cb00} fill="currentColor" />
            </svg>
            Gửi yêu cầu tư vấn
          </button>
        </div>
      </div>
    </section>
  );
}
