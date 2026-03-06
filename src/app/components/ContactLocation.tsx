import { Phone, Instagram, MapPin, Clock } from 'lucide-react';

export function ContactLocation() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-[#F1F5F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-[#FCBED6]/70 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-[#E50A6D]" />
              <span className="text-[#E50A6D] font-inter" style={{ fontWeight: 500, fontSize: '14px' }}>
                Get in Touch
              </span>
            </div>
          </div>
          <h2
            className="font-playfair text-[#E81909] mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}
          >
            Hubungi Kami
          </h2>
          <p className="text-[#5C8BB3] max-w-2xl mx-auto font-inter" style={{ fontSize: '1.125rem' }}>
            Kami siap melayani pesanan Anda setiap hari
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="font-playfair text-[#E81909] mb-6" style={{ fontSize: '1.75rem', fontWeight: 600 }}>
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                {/* Phone/WhatsApp */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-[#FCBED6]/70 p-3 rounded-2xl group-hover:bg-[#E50A6D] transition-colors">
                    <Phone className="w-6 h-6 text-[#E50A6D] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#5C8BB3] mb-1 font-inter" style={{ fontWeight: 600 }}>
                      WhatsApp
                    </div>
                    <a
                      href="https://wa.me/6281322227739"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E81909] hover:text-[#E50A6D] transition-colors font-inter"
                      style={{ fontSize: '1.125rem' }}
                    >
                      +62 813-2222-7739
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-[#FCBED6]/70 p-3 rounded-2xl group-hover:bg-[#E50A6D] transition-colors">
                    <Instagram className="w-6 h-6 text-[#E50A6D] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#5C8BB3] mb-1 font-inter" style={{ fontWeight: 600 }}>
                      Instagram
                    </div>
                    <a
                      href="https://www.instagram.com/dimsum_teh_irma/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E81909] hover:text-[#E50A6D] transition-colors font-inter"
                      style={{ fontSize: '1.125rem' }}
                    >
                      @dimsum_teh_irma
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-[#FCBED6]/70 p-3 rounded-2xl group-hover:bg-[#E50A6D] transition-colors">
                    <MapPin className="w-6 h-6 text-[#E50A6D] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#5C8BB3] mb-1 font-inter" style={{ fontWeight: 600 }}>
                      Alamat
                    </div>
                    <p className="text-[#E81909] font-inter" style={{ fontSize: '1.125rem' }}>
                      Jl. Raya Dimsum No. 123<br />
                      Jakarta Selatan, 12345
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-[#FCBED6]/70 p-3 rounded-2xl group-hover:bg-[#E50A6D] transition-colors">
                    <Clock className="w-6 h-6 text-[#E50A6D] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#5C8BB3] mb-1 font-inter" style={{ fontWeight: 600 }}>
                      Jam Operasional
                    </div>
                    <div className="text-[#E81909] font-inter" style={{ fontSize: '1.125rem' }}>
                      <div>Senin - Jumat: 09.00 - 21.00</div>
                      <div>Sabtu - Minggu: 08.00 - 22.00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-[#5C8BB3]/30">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-[#E45A4D] to-[#E50A6D] text-white px-8 py-4 rounded-full hover:shadow-xl transition-all transform hover:scale-105 text-center font-inter"
                  style={{ fontWeight: 600 }}
                >
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-[600px]">
            <div className="relative h-full">
              {/* Map placeholder with custom styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FCBED6] to-[#F8CFD3]">
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 grid-rows-8 h-full">
                    {[...Array(64)].map((_, i) => (
                      <div key={i} className="border border-[#5C8BB3]"></div>
                    ))}
                  </div>
                </div>

                {/* Location markers */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Main pin */}
                    <div className="bg-[#E50A6D] p-4 rounded-full shadow-lg animate-bounce">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 bg-[#E50A6D] rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Label */}
                  <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-white px-6 py-3 rounded-2xl shadow-lg">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">🥟</span>
                        <div>
                          <div className="text-[#E50A6D] font-playfair" style={{ fontWeight: 700 }}>
                            Dimsum Teh Irma
                          </div>
                          <div className="text-[#5C8BB3] text-sm font-inter">Jakarta Selatan</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional location markers */}
                <div className="absolute top-1/4 left-1/4">
                  <div className="bg-[#EDBF68] p-2 rounded-full shadow-lg">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                </div>
                <div className="absolute top-3/4 right-1/4">
                  <div className="bg-[#EDBF68] p-2 rounded-full shadow-lg">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                </div>

                {/* Roads/paths */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#5C8BB3]/20"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-[#5C8BB3]/20"></div>

                {/* Info overlay */}
                <div className="absolute top-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[#E81909] font-playfair" style={{ fontWeight: 600, fontSize: '1.125rem' }}>
                          Lokasi Kami
                        </div>
                        <div className="text-[#5C8BB3] text-sm font-inter">
                          Klik pin untuk navigasi
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-[#5C8BB3] animate-pulse"></div>
                        <span className="text-[#5C8BB3] text-sm font-inter" style={{ fontWeight: 500 }}>
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
