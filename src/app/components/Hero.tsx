import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 sm:pt-20 min-h-screen bg-gradient-to-br from-[#F1F5F6] via-[#FCBED6] to-[#F8CFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <h1 className="font-playfair text-[#E81909] leading-tight" style={{ fontSize: "clamp(1.75rem, 8vw, 4rem)", fontWeight: 700 }}>
              Dimsum Lezat, Hangat, dan Menggugah Selera
            </h1>

            <p className="text-[#5C8BB3] leading-relaxed font-inter" style={{ fontSize: "clamp(0.9rem, 3.5vw, 1.125rem)" }}>
              Nikmati kelezatan dimsum autentik yang dibuat dengan bahan-bahan pilihan dan resep tradisional. Setiap gigitan menghadirkan cita rasa yang sempurna untuk Anda dan keluarga.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <button
                onClick={() => scrollToSection("menu")}
                className="w-full xs:w-auto bg-gradient-to-r from-[#E45A4D] to-[#E50A6D] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-xl transition-all transform hover:scale-105 font-inter text-sm sm:text-base"
                style={{ fontWeight: 600 }}
              >
                Lihat Menu
              </button>
              <a
                href="https://wa.me/6281322227739"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto border-2 border-[#E50A6D] text-[#E50A6D] px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#E50A6D] hover:text-white transition-all transform hover:scale-105 text-center font-inter text-sm sm:text-base"
                style={{ fontWeight: 600 }}
              >
                Pesan Sekarang
              </a>
            </div>
          </div>

          <div className="relative mt-6 sm:mt-0">
            <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 bg-[#EDBF68]/25 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-24 sm:w-40 h-24 sm:h-40 bg-[#F385B6]/20 rounded-full blur-3xl"></div>

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW1zdW0lMjBzdGVhbWVyJTIwYmFtYm9vfGVufDF8fHx8MTc3MjczNzQzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dimsum Teh Irma"
                className="w-full h-[280px] sm:h-[420px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 max-w-[calc(100%-1.5rem)] bg-white/95 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-[#E50A6D] font-playfair text-sm sm:text-lg" style={{ fontWeight: 700 }}>
                    Top
                  </span>
                  <div>
                    <div className="text-[#E50A6D] font-playfair text-sm sm:text-base" style={{ fontWeight: 700 }}>
                      Best Seller
                    </div>
                    <div className="text-[#5C8BB3] text-xs font-inter">Dimsum Ayam</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 right-8 hidden sm:flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/80 animate-bounce" style={{ animationDelay: "0s" }}></div>
              <div className="w-3 h-3 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-3 h-3 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
