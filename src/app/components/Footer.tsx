import { Instagram, Phone } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#E50A6D] via-[#E45A4D] to-[#5C8BB3] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E45A4D] to-[#E81909] flex items-center justify-center shadow-lg">
                <span className="text-white text-xl font-playfair font-bold">D</span>
              </div>
              <div>
                <h3 className="font-playfair text-xl text-white" style={{ fontWeight: 700 }}>
                  Dimsum Teh Irma
                </h3>
                <p className="text-sm text-[#EDBF68]">Authentic Chinese Cuisine</p>
              </div>
            </div>
            <p className="text-[#F8CFD3] mb-4 font-inter max-w-md">
              Nikmati kelezatan dimsum autentik yang dibuat dengan bahan-bahan pilihan dan resep tradisional. Setiap gigitan menghadirkan cita rasa yang sempurna.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/dimsum_teh_irma/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-[#E81909] p-2.5 rounded-full transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/6281322227739"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 hover:bg-[#E81909] p-2.5 rounded-full transition-all"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg mb-4" style={{ fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul className="space-y-2 font-inter">
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

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg mb-4" style={{ fontWeight: 600 }}>
              Contact
            </h4>
            <ul className="space-y-2 font-inter text-sm">
              <li className="text-[#FCBED6]">
                Jl. Raya Dimsum No. 123<br />
                Jakarta Selatan, 12345
              </li>
              <li>
                <a
                  href="https://wa.me/6281322227739"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FCBED6] hover:text-[#EDBF68] transition-colors"
                >
                  +62 813-2222-7739
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dimsum_teh_irma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FCBED6] hover:text-[#EDBF68] transition-colors"
                >
                  @dimsum_teh_irma
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#F8CFD3] font-inter">
            <p>
              © 2026 Dimsum Teh Irma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
