import { useEffect, useRef, useState } from "react";
import imgImg1 from "../../assets/6906eee40e2fbbbc3c26ecf03e22a67e608ef429.png";
import imgImg2 from "../../assets/43472fff57d75e7dd1be1aa7f80314ff935a4158.png";
import imgImg3 from "../../assets/8fcaafcbeeb57479930b79fb614f1ed7e1bc3d9a.png";

const projects = [
  {
    image: imgImg1,
    tag: "Căn hộ cao cấp",
    title: "Vinhomes Central Park",
    location: "Quận Bình Thạnh, TP.HCM",
    price: "Từ 3.5 tỷ",
    area: "120m² - 150m²",
  },
  {
    image: imgImg2,
    tag: "Biệt thự",
    title: "Saigon Mystery Villas",
    location: "Quận 2, TP.HCM",
    price: "Từ 15 tỷ",
    area: "300m² - 500m²",
  },
  {
    image: imgImg3,
    tag: "Nhà phố",
    title: "Lakeview Residences",
    location: "Quận 7, TP.HCM",
    price: "Từ 8.5 tỷ",
    area: "200m² - 250m²",
  },
];

export function FeaturedProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className="text-[28px] sm:text-[32px] lg:text-[36px] text-[#1a1a2e] tracking-[-0.5px] mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Dự án nổi bật
          </h2>
          <p
            className="text-[16px] lg:text-[18px] text-[#4b5563] tracking-[-0.5px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Khám phá những dự án bất động sản cao cấp đang được quan tâm nhất
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group cursor-pointer transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-[220px] sm:h-[256px] rounded-2xl overflow-hidden mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div
                  className="absolute top-4 left-4 bg-[#c9a96e] text-[#1a1a2e] text-[14px] px-4 py-1.5 rounded-full tracking-[-0.5px]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {project.tag}
                </div>
              </div>

              {/* Info */}
              <h3
                className="text-[20px] lg:text-[24px] text-[#1a1a2e] tracking-[-0.5px] mb-2 group-hover:text-[#c9a96e] transition-colors duration-300"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                }}
              >
                {project.title}
              </h3>
              <p
                className="text-[16px] text-[#4b5563] tracking-[-0.5px] mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {project.location}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="text-[18px] lg:text-[20px] text-[#c9a96e] tracking-[-0.5px]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {project.price}
                </span>
                <span
                  className="text-[14px] text-[#6b7280] tracking-[-0.5px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {project.area}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            className="h-[52px] lg:h-[56px] px-8 rounded-lg bg-gradient-to-r from-[#1a1a2e] to-[#c9a96e] text-white text-[16px] tracking-[-0.5px] hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a96e]/20 hover:-translate-y-0.5"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Xem tất cả dự án
          </button>
        </div>
      </div>
    </section>
  );
}
