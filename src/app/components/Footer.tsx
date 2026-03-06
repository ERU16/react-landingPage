import { Instagram, Phone } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#E50A6D] via-[#E45A4D] to-[#5C8BB3] text-white py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#E45A4D] to-[#E81909] flex items-center justify-center shadow-lg shrink-0">
                <span className="text-white text-lg sm:text-xl font-playfair font-bold">D</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-playfair text-base sm:text-lg lg:text-xl text-white" style={{ fontWeight: 700 }}>
                  Dimsum Teh Irma
                </h3>
                <p className="text-xs sm:text-sm text-[#EDBF68]">Authentic Chinese Cuisine</p>
              </div>
            </div>
            <p className="text-[#F8CFD3] mb-4 font-inter text-xs sm:text-sm max-w-md leading-relaxed">
              Nikmati kelezatan dimsum autentik yang dibuat dengan bahan-bahan pilihan dan resep tradisional. Setiap
              gigitan menghadirkan cita rasa yang sempurna.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/dimsum_teh_irma/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-[#E81909] p-2 hover:p-2.5 rounded-full transition-all"
              >
                <Instagram size={18} className="sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://wa.me/6281322227739"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-[#E81909] p-2 hover:p-2.5 rounded-full transition-all"
              >
                <Phone size={18} className="sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-base sm:text-lg mb-3 sm:mb-4" style={{ fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul className="space-y-2 font-inter text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-[#FCBED6] hover:text-[#EDBF68] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-[#FCBED6] hover:text-[#EDBF68] transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[#FCBED6] hover:text-[#EDBF68] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-base sm:text-lg mb-3 sm:mb-4" style={{ fontWeight: 600 }}>
              Contact
            </h4>
            <ul className="space-y-2 font-inter text-xs sm:text-sm">
              <li className="text-[#FCBED6] leading-relaxed">
                Jl. Raya Dimsum No. 123
                <br />
                Jakarta Selatan, 12345
              </li>
              <li>
                <a
                  href="https://wa.me/6281322227739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FCBED6] hover:text-[#EDBF68] transition-colors break-all sm:break-normal"
                >
                  +62 813-2222-7739
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dimsum_teh_irma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FCBED6] hover:text-[#EDBF68] transition-colors break-all sm:break-normal"
                >
                  @dimsum_teh_irma
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#F8CFD3] font-inter text-center sm:text-left">
            <p>(c) 2026 Dimsum Teh Irma. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
