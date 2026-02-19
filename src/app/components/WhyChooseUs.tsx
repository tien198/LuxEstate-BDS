import { useEffect, useRef, useState } from "react";
import svgPaths from "../../imports/svg-71nosye7sm";

const features = [
  {
    icon: svgPaths.p2f501700,
    iconViewBox: "0 0 18 24",
    iconSize: { w: 18, h: 24 },
    title: "Uy tín hàng đầu",
    description:
      "Được tin tưởng bởi hàng nghìn khách hàng với chất lượng dịch vụ xuất sắc và độ uy tín cao.",
  },
  {
    icon: svgPaths.pba1a780,
    iconViewBox: "0 0 30 24",
    iconSize: { w: 30, h: 24 },
    title: "Đội ngũ chuyên nghiệp",
    description:
      "Đội ngũ chuyên gia giàu kinh nghiệm, tư vấn tận tình và hỗ trợ 24/7 cho khách hàng.",
  },
  {
    icon: svgPaths.p3bdf84c0,
    iconViewBox: "0 0 24 24",
    iconSize: { w: 24, h: 24 },
    title: "Tăng trưởng bền vững",
    description:
      "Cam kết mang lại giá trị đầu tư tối ưu với tỷ suất sinh lời hấp dẫn và bền vững.",
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f8f9fa] py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Title */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className="text-[28px] sm:text-[32px] lg:text-[36px] text-[#1a1a2e] tracking-[-0.5px] mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Tại sao chọn chúng tôi
          </h2>
          <p
            className="text-[16px] lg:text-[18px] text-[#4b5563] tracking-[-0.5px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Với kinh nghiệm hơn 15 năm trong lĩnh vực bất động sản cao cấp
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white rounded-2xl p-8 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.05),0px_10px_15px_0px_rgba(0,0,0,0.05)] hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#1a1a2e] to-[#c9a96e] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  width={feature.iconSize.w}
                  height={feature.iconSize.h}
                  viewBox={feature.iconViewBox}
                  fill="none"
                >
                  <path d={feature.icon} fill="white" />
                </svg>
              </div>
              <h3
                className="text-[20px] lg:text-[24px] text-[#1a1a2e] tracking-[-0.5px] mb-4"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                }}
              >
                {feature.title}
              </h3>
              <p
                className="text-[15px] lg:text-[16px] text-[#4b5563] leading-[26px] tracking-[-0.5px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
