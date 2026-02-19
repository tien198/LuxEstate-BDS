import svgPaths from "../../imports/svg-71nosye7sm";

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#c9a96e] to-[#c9a96e]/80 flex items-center justify-center">
                <svg
                  width="13.5"
                  height="18"
                  viewBox="0 0 13.5 18"
                  fill="none"
                >
                  <path d={svgPaths.p2e8ebd00} fill="#1a1a2e" />
                </svg>
              </div>
              <span
                className="text-[24px] text-white tracking-[-0.5px]"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                }}
              >
                LuxEstate
              </span>
            </div>
            <p
              className="text-[#d1d5db] text-[16px] leading-[26px] tracking-[-0.5px] mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Đối tác tin cậy trong lĩnh vực bất động sản cao cấp, mang đến
              những giải pháp tối ưu cho khách hàng.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: svgPaths.pcfcb900, viewBox: "0 0 16 16" },
                { icon: svgPaths.p757b300, viewBox: "0 0 14 16" },
                { icon: svgPaths.p21171b80, viewBox: "0 0 14 16" },
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#c9a96e]/20 transition-colors duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox={social.viewBox}
                    fill="none"
                  >
                    <path d={social.icon} fill="white" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-[20px] text-white tracking-[-0.5px] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
              }}
            >
              Dịch vụ
            </h4>
            <ul className="space-y-3">
              {["Mua bán BĐS", "Cho thuê", "Tư vấn đầu tư", "Định giá BĐS"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#d1d5db] text-[16px] tracking-[-0.5px] hover:text-[#c9a96e] transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4
              className="text-[20px] text-white tracking-[-0.5px] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
              }}
            >
              Khu vực
            </h4>
            <ul className="space-y-3">
              {["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Nha Trang"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#d1d5db] text-[16px] tracking-[-0.5px] hover:text-[#c9a96e] transition-colors duration-300"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[20px] text-white tracking-[-0.5px] mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
              }}
            >
              Liên hệ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="mt-1 shrink-0"
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                  fill="none"
                >
                  <path d={svgPaths.p30aca800} fill="#c9a96e" />
                </svg>
                <span
                  className="text-[#d1d5db] text-[16px] leading-[24px] tracking-[-0.5px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  123 Nguyễn Huệ, Q1, TP.HCM
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d={svgPaths.p9204100} fill="#c9a96e" />
                </svg>
                <span
                  className="text-[#d1d5db] text-[16px] tracking-[-0.5px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  0123 456 789
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d={svgPaths.pa71cb00} fill="#c9a96e" />
                </svg>
                <span
                  className="text-[#d1d5db] text-[16px] tracking-[-0.5px]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  info@luxestate.vn
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8">
          <p
            className="text-center text-[#d1d5db] text-[16px] tracking-[-0.5px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            &copy; 2024 LuxEstate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
