import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F1F5F6]/95 backdrop-blur-sm border-b border-[#5C8BB3]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#E45A4D] to-[#E50A6D] flex items-center justify-center shadow-lg shrink-0">
              <span className="text-white text-lg sm:text-xl font-playfair font-bold">D</span>
            </div>
            <div className="min-w-0 max-w-[190px] sm:max-w-none">
              <h1 className="font-playfair text-lg sm:text-xl text-[#E81909] truncate" style={{ fontWeight: 700 }}>
                Dimsum Teh Irma
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-[#5C8BB3] hover:text-[#E50A6D] transition-colors font-inter" style={{ fontWeight: 500 }}>
              Home
            </button>
            <button onClick={() => scrollToSection("menu")} className="text-[#5C8BB3] hover:text-[#E50A6D] transition-colors font-inter" style={{ fontWeight: 500 }}>
              Menu
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-[#5C8BB3] hover:text-[#E50A6D] transition-colors font-inter" style={{ fontWeight: 500 }}>
              Contact
            </button>
            <a
              href="https://wa.me/6281322227739"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#E45A4D] to-[#E50A6D] text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all font-inter"
              style={{ fontWeight: 500 }}
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 -mr-2 text-[#5C8BB3] hover:text-[#E50A6D] transition-colors">
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-3 px-0 border-t border-[#5C8BB3]/20">
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollToSection("home")} className="px-4 py-2.5 text-[#5C8BB3] hover:text-[#E50A6D] hover:bg-[#FCBED6]/30 transition-all text-left font-inter rounded-lg" style={{ fontWeight: 500 }}>
                Home
              </button>
              <button onClick={() => scrollToSection("menu")} className="px-4 py-2.5 text-[#5C8BB3] hover:text-[#E50A6D] hover:bg-[#FCBED6]/30 transition-all text-left font-inter rounded-lg" style={{ fontWeight: 500 }}>
                Menu
              </button>
              <button onClick={() => scrollToSection("contact")} className="px-4 py-2.5 text-[#5C8BB3] hover:text-[#E50A6D] hover:bg-[#FCBED6]/30 transition-all text-left font-inter rounded-lg" style={{ fontWeight: 500 }}>
                Contact
              </button>
              <a
                href="https://wa.me/6281322227739"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#E45A4D] to-[#E50A6D] text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all text-center font-inter mx-4"
                style={{ fontWeight: 500 }}
              >
                Pesan Sekarang
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
