import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-[#F1F5F6] via-[#FCBED6] to-[#F8CFD3]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8">

            <h1
              className="font-playfair text-[#E81909] leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700 }}
            >
              Dimsum Lezat, Hangat, dan Menggugah Selera
            </h1>

            <p
              className="text-[#5C8BB3] leading-relaxed font-inter"
              style={{ fontSize: '1.125rem' }}
            >
              Nikmati kelezatan dimsum autentik yang dibuat dengan bahan-bahan pilihan dan resep tradisional.
              Setiap gigitan menghadirkan cita rasa yang sempurna untuk Anda dan keluarga.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('menu')}
                className="bg-gradient-to-r from-[#E45A4D] to-[#E50A6D] text-white px-8 py-4 rounded-full hover:shadow-xl transition-all transform hover:scale-105 font-inter"
                style={{ fontWeight: 600, fontSize: '1rem' }}
              >
                Lihat Menu
              </button>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-[#E50A6D] text-[#E50A6D] px-8 py-4 rounded-full hover:bg-[#E50A6D] hover:text-white transition-all transform hover:scale-105 text-center font-inter"
                style={{ fontWeight: 600, fontSize: '1rem' }}
              >
                Pesan Sekarang
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#EDBF68]/25 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#F385B6]/20 rounded-full blur-3xl"></div>

            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW1zdW0lMjBzdGVhbWVyJTIwYmFtYm9vfGVufDF8fHx8MTc3MjczNzQzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dimsum Teh Irma"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Floating badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🥟</span>
                  <div>
                    <div className="text-[#E50A6D] font-playfair" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                      Best Seller
                    </div>
                    <div className="text-[#5C8BB3] text-xs font-inter">Dimsum Ayam</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steam effect decorations */}
            <div className="absolute -bottom-4 right-8 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/80 animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-3 h-3 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
