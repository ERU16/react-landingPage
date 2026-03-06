import { Phone, Instagram, MapPin, Clock } from "lucide-react";

export function ContactLocation() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-[#F1F5F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <div className="flex items-center gap-2 bg-[#FCBED6]/70 px-3 sm:px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-[#E50A6D] shrink-0" />
              <span className="text-[#E50A6D] font-inter text-xs sm:text-sm" style={{ fontWeight: 500 }}>
                Get in Touch
              </span>
            </div>
          </div>
          <h2 className="font-playfair text-[#E81909] mb-3 sm:mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 700 }}>
            Hubungi Kami
          </h2>
          <p className="text-[#5C8BB3] max-w-2xl mx-auto font-inter px-2" style={{ fontSize: "clamp(0.9rem, 3.5vw, 1.125rem)" }}>
            Kami siap melayani pesanan Anda setiap hari
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
          <div className="space-y-5 sm:space-y-6">
            <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="font-playfair text-[#E81909] mb-4 sm:mb-5 lg:mb-6" style={{ fontSize: "clamp(1.3rem, 4.5vw, 1.75rem)", fontWeight: 600 }}>
                Informasi Kontak
              </h3>

              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="bg-[#FCBED6]/70 p-2 sm:p-2.5 rounded-lg sm:rounded-xl group-hover:bg-[#E50A6D] transition-colors shrink-0">
                    <Phone className="w-5 h-5 text-[#E50A6D] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[#5C8BB3] mb-1 font-inter text-xs sm:text-sm" style={{ fontWeight: 600 }}>
                      WhatsApp
                    </div>
                    <a
                      href="https://wa.me/6281322227739"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E81909] hover:text-[#E50A6D] transition-colors font-inter break-all"
                      style={{ fontSize: "clamp(0.9rem, 3.5vw, 1.125rem)" }}
                    >
                      +62 813-2222-7739
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="bg-[#FCBED6]/70 p-2 sm:p-2.5 rounded-lg sm:rounded-xl group-hover:bg-[#E50A6D] transition-colors shrink-0">
                    <Instagram className="w-5 h-5 text-[#E50A6D] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[#5C8BB3] mb-1 font-inter text-xs sm:text-sm" style={{ fontWeight: 600 }}>
                      Instagram
                    </div>
                    <a
                      href="https://www.instagram.com/dimsum_teh_irma/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E81909] hover:text-[#E50A6D] transition-colors font-inter break-all"
                      style={{ fontSize: "clamp(0.9rem, 3.5vw, 1.125rem)" }}
                    >
                      @dimsum_teh_irma
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="bg-[#FCBED6]/70 p-2 sm:p-2.5 rounded-lg sm:rounded-xl group-hover:bg-[#E50A6D] transition-colors shrink-0">
                    <MapPin className="w-5 h-5 text-[#E50A6D] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[#5C8BB3] mb-1 font-inter text-xs sm:text-sm" style={{ fontWeight: 600 }}>
                      Alamat
                    </div>
                    <p className="text-[#E81909] font-inter" style={{ fontSize: "clamp(0.9rem, 3.5vw, 1.125rem)" }}>
                      Jl. Raya Dimsum No. 123
                      <br />
                      Jakarta Selatan, 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 group">
                  <div className="bg-[#FCBED6]/70 p-2 sm:p-2.5 rounded-lg sm:rounded-xl group-hover:bg-[#E50A6D] transition-colors shrink-0">
                    <Clock className="w-5 h-5 text-[#E50A6D] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[#5C8BB3] mb-1 font-inter text-xs sm:text-sm" style={{ fontWeight: 600 }}>
                      Jam Operasional
                    </div>
                    <div className="text-[#E81909] font-inter" style={{ fontSize: "clamp(0.9rem, 3.5vw, 1.125rem)" }}>
                      <div>Senin - Jumat: 09.00 - 21.00</div>
                      <div>Sabtu - Minggu: 08.00 - 22.00</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 lg:mt-7 pt-4 sm:pt-5 lg:pt-6 border-t border-[#5C8BB3]/30">
                <a
                  href="https://wa.me/6281322227739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-[#E45A4D] to-[#E50A6D] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:shadow-xl transition-all text-center font-inter text-sm sm:text-base"
                  style={{ fontWeight: 600 }}
                >
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-[350px] sm:h-[450px] lg:h-[550px]">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FCBED6] to-[#F8CFD3]">
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 grid-rows-8 h-full">
                    {[...Array(64)].map((_, i) => (
                      <div key={i} className="border border-[#5C8BB3]"></div>
                    ))}
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="bg-[#E50A6D] p-2.5 sm:p-3 lg:p-4 rounded-full shadow-lg animate-bounce">
                      <MapPin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-[#E50A6D] rounded-full animate-ping opacity-75"></div>
                  </div>

                  <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[calc(100vw-3rem)] max-w-[200px] sm:max-w-[240px]">
                    <div className="bg-white px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl shadow-lg">
                      <div className="text-center text-xs sm:text-sm">
                        <div className="text-[#E50A6D] font-playfair" style={{ fontWeight: 700 }}>
                          Dimsum Teh Irma
                        </div>
                        <div className="text-[#5C8BB3] font-inter">Jakarta Selatan</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/4 left-1/4 hidden sm:block">
                  <div className="bg-[#EDBF68] p-1.5 sm:p-2 rounded-full shadow-lg">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  </div>
                </div>
                <div className="absolute top-3/4 right-1/4 hidden sm:block">
                  <div className="bg-[#EDBF68] p-1.5 sm:p-2 rounded-full shadow-lg">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white"></div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#5C8BB3]/20"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#5C8BB3]/20"></div>

                <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6">
                  <div className="bg-white/95 backdrop-blur-sm px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl shadow-lg">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <div className="text-[#E81909] font-playfair" style={{ fontWeight: 600, fontSize: "clamp(0.9rem, 3.5vw, 1.125rem)" }}>
                          Lokasi Kami
                        </div>
                        <div className="text-[#5C8BB3] text-xs font-inter">Klik pin untuk navigasi</div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#5C8BB3] animate-pulse"></div>
                        <span className="text-[#5C8BB3] text-xs font-inter" style={{ fontWeight: 500 }}>
                          Open
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
