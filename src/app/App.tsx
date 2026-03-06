import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuCarousel } from './components/MenuCarousel';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F1F5F6] font-inter">
      <style>{`
        body {
          font-family: 'Inter', sans-serif;
        }
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #F1F5F6;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #E45A4D;
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #E50A6D;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Slick carousel customization */
        .slick-dots {
          bottom: -40px !important;
        }

        .slick-dots li button:before {
          font-size: 12px !important;
          color: #E50A6D !important;
        }

        .slick-dots li.slick-active button:before {
          color: #E50A6D !important;
          opacity: 1 !important;
        }
      `}</style>
      
      <Navbar />
      <Hero />
      <MenuCarousel />
      <ContactLocation />
      <Footer />
    </div>
  );
}
