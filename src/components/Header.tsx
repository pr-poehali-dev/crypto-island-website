
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-b from-[#1A1F2C] to-[#33C3F0] min-h-[60vh] overflow-hidden">
      {/* Animated clouds */}
      <div className="absolute inset-0 opacity-30">
        <div className="cloud absolute top-[10%] left-[10%] w-24 h-12 bg-[#FEC6A1] rounded-full animate-float"></div>
        <div className="cloud absolute top-[15%] right-[15%] w-32 h-16 bg-[#FEC6A1] rounded-full animate-float-delay"></div>
        <div className="cloud absolute top-[25%] left-[30%] w-20 h-10 bg-[#FEC6A1] rounded-full animate-float-slow"></div>
      </div>
      
      {/* Navigation */}
      <nav className="container mx-auto py-4 px-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <img 
            src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png" 
            alt="MемЛенд Лого" 
            className="w-12 h-12 rounded-full"
          />
          <span className="text-white font-bold text-xl font-playfair">МемЛенд</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#tokens" className="text-white hover:text-[#FFC107] transition-colors">Мемкоины</a>
          <a href="#map" className="text-white hover:text-[#FFC107] transition-colors">Карта острова</a>
          <a href="#trends" className="text-white hover:text-[#FFC107] transition-colors">Тренды</a>
          <a href="#about" className="text-white hover:text-[#FFC107] transition-colors">О проекте</a>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="border-[#FFC107] text-white hover:bg-[#FFC107] hover:text-[#1A1F2C]">
            <Icon name="Wallet" className="mr-2" size={16} />
            Подключить кошелек
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-12 pb-24 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-playfair mb-4">
            Добро пожаловать на остров <span className="text-[#FFC107]">мемкоинов</span>
          </h1>
          <p className="text-white/80 text-lg mb-8 max-w-lg">
            Исследуйте удивительный мир криптовалютных мемов, следите за трендами и открывайте новые возможности в мире децентрализованных финансов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-[#FFC107] text-[#1A1F2C] hover:bg-[#FFC107]/80">
              <Icon name="Compass" className="mr-2" size={18} />
              Исследовать остров
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
              <Icon name="TrendingUp" className="mr-2" size={18} />
              Топ мемкоинов
            </Button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png" 
            alt="Остров МемЛенд" 
            className="w-full max-w-md animate-float-slow rounded-full shadow-lg" 
          />
        </div>
      </div>
      
      {/* Gentle waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#fff" 
            fillOpacity="1" 
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
