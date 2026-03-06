import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MenuCarousel } from "./components/MenuCarousel";
import { ContactLocation } from "./components/ContactLocation";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F1F5F6] font-inter">
      <style>{`
        body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          overflow-x: hidden;
        }

        html,
        body,
        #root {
          width: 100%;
          max-width: 100%;
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
          bottom: -38px !important;
        }

        .slick-dots li button:before {
          font-size: 12px !important;
          color: #E50A6D !important;
        }

        .slick-dots li.slick-active button:before {
          color: #E50A6D !important;
          opacity: 1 !important;
        }

        @media (max-width: 768px) {
          .slick-dots {
            bottom: -32px !important;
          }

          .slick-dots li {
            width: 28px;
            height: 28px;
          }

          .slick-dots li button {
            width: 28px;
            height: 28px;
          }

          .slick-dots li button:before {
            font-size: 14px !important;
            width: 28px;
            height: 28px;
            line-height: 28px;
          }
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
