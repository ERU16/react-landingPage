import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  badgeTextColor?: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Dimsum Kukus/Goreng',
    description: 'Dimsum kukus/Goreng lembut isi 5',
    price: 'Rp 12.000',
    image: 'https://images.unsplash.com/photo-1639119419756-d909653abbdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZHVtcGxpbmclMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MjczNzQzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Best Seller',
    badgeColor: 'bg-[#E50A6D]',
    badgeTextColor: 'text-white',
  },
  {
    id: 2,
    name: 'Dimsum Kukus/Goreng',
    description: 'Dimsum Kukus/Goreng lembut isi 10',
    price: 'Rp 23.000',
    image: 'https://images.unsplash.com/photo-1603894483228-9a3d10c32390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaHJpbXAlMjBoYWthbyUyMGRpbXN1bXxlbnwxfHx8fDE3NzI3Mzc0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Favorite',
    badgeColor: 'bg-[#EDBF68]',
    badgeTextColor: 'text-[#E81909]',
  },
  {
    id: 3,
    name: 'Dimsum Kukus/Goreng',
    description: 'Dimsum Kukus/Goreng lembut isi 15',
    price: 'Rp 33.000',
    image: 'https://images.unsplash.com/photo-1763661195425-1e3cdd575eb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhbWVkJTIwYnVucyUyMGFzaWFuJTIwZm9vZHxlbnwxfHx8fDE3NzI3Mzc0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'New Menu',
    badgeColor: 'bg-[#5C8BB3]',
    badgeTextColor: 'text-white',
  },
  {
    id: 4,
    name: 'Dimsum Kukus/Goreng',
    description: 'Dimsum Kukus/Goreng lembut isi 20',
    price: 'Rp 38.000',
    image: 'https://images.unsplash.com/photo-1616110729547-8443944dc157?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGR1bXBsaW5nJTIwcGxhdGV8ZW58MXx8fHwxNzcyNzM3NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Favorite',
    badgeColor: 'bg-[#EDBF68]',
    badgeTextColor: 'text-[#E81909]',
  },
  {
    id: 5,
    name: 'Dimsum Kukus/Goreng',
    description: 'Dimsum Kukus/Goreng lembut isi 25',
    price: 'Rp 48.000',
    image: 'https://images.unsplash.com/photo-1768701544400-dfa8ca509d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjByb2xsJTIwYXBwZXRpemVyfGVufDF8fHx8MTc3MjczNzQzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    badge: 'Best Seller',
    badgeColor: 'bg-[#E50A6D]',
    badgeTextColor: 'text-white',
  },
];

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#E50A6D] p-3 rounded-full shadow-lg transition-all hover:scale-110"
    >
      <ChevronRight size={24} />
    </button>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-[#E50A6D] p-3 rounded-full shadow-lg transition-all hover:scale-110"
    >
      <ChevronLeft size={24} />
    </button>
  );
}

export function MenuCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-[#F1F5F6] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-playfair text-[#E81909] mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}
          >
            Menu Favorit Kami
          </h2>
          <p className="text-[#5C8BB3] max-w-2xl mx-auto font-inter" style={{ fontSize: '1.125rem' }}>
            Pilihan dimsum terbaik dengan 2 cara penyajian: kukus dan goreng.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-8">
          <Slider {...settings}>
            {menuItems.map((item) => (
              <div key={item.id} className="px-3">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Badge */}
                    {item.badge && (
                      <div className={`absolute top-4 right-4 ${item.badgeColor} ${item.badgeTextColor ?? 'text-white'} px-4 py-1.5 rounded-full text-sm font-inter`} style={{ fontWeight: 600 }}>
                        {item.badge}
                      </div>
                    )}
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-playfair text-[#E81909] mb-2" style={{ fontSize: '1.5rem', fontWeight: 600 }}>
                      {item.name}
                    </h3>
                    <p className="text-[#5C8BB3] mb-4 font-inter" style={{ fontSize: '0.875rem' }}>
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-[#E50A6D] font-playfair" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                        {item.price}
                      </div>
                      <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#E45A4D] to-[#E50A6D] text-white px-5 py-2 rounded-full hover:shadow-lg transition-all font-inter"
                        style={{ fontWeight: 500, fontSize: '0.875rem' }}
                      >
                        Pesan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/6281322227739"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-[#E50A6D] text-[#E50A6D] px-8 py-3 rounded-full hover:bg-[#E50A6D] hover:text-white transition-all font-inter"
            style={{ fontWeight: 600 }}
          >
            Lihat Semua Menu
          </a>
        </div>
      </div>
    </section>
  );
}
