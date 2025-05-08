
import React from "react";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import TokenCard from "@/components/TokenCard";
import IslandMap from "@/components/IslandMap";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import TokenSale from "@/components/TokenSale";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-16 px-4 bg-white" id="about">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-playfair">Добро пожаловать в MEMELAND</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Первый в мире токен, который превратится в настоящий остров в океане. И это не шутка.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#33C3F0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png" 
                  alt="Icon" 
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Физический остров</h3>
              <p className="text-gray-600">Реальный участок земли, который вы можете посетить</p>
            </div>
            
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#FFC107]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/0948e6fc-821e-4024-b542-ae6ba48806c8.jpeg" 
                  alt="Icon" 
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Экзотическая жизнь</h3>
              <p className="text-gray-600">Уникальная экосистема с плавающими свиньями</p>
            </div>
            
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#6E59A5]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/6427af35-b9a0-4461-93d1-836a4ef4f6ee.jpeg" 
                  alt="Icon" 
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Местное население</h3>
              <p className="text-gray-600">Дружелюбные соседи и увлекательная культура</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 bg-[#F8F9FA]" id="features">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 font-playfair">Особенности MEMELAND</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TokenCard 
              title="Криптовалюта с реальным активом" 
              description="$MEMELAND - первая криптовалюта, обеспеченная реальным физическим островом"
              icon="CreditCard"
              isNew={true}
            />
            <TokenCard 
              title="Цифровое гражданство" 
              description="Держатели токенов получают право на цифровое гражданство MEMELAND"
              icon="User"
            />
            <TokenCard 
              title="Эксклюзивный доступ" 
              description="Возможность посещать и проживать на острове для крупных держателей"
              icon="Key"
            />
            <TokenCard 
              title="Паспорта как NFT" 
              description="Уникальные NFT-паспорта с различными уровнями привилегий"
              icon="Book"
            />
            <TokenCard 
              title="Прозрачное управление" 
              description="DAO для принятия решений о развитии острова и его инфраструктуры"
              icon="Vote"
              isNew={true}
            />
            <TokenCard 
              title="Увеличение ценности" 
              description="Рост стоимости токена по мере развития острова и его инфраструктуры"
              icon="TrendingUp"
            />
          </div>
        </div>
      </section>

      <Gallery />
      <IslandMap />
      <Tokenomics />
      <TokenSale />
      <Roadmap />
      
      <footer className="bg-[#1A1F2C] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png"
                  alt="MEMELAND"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-xl font-bold">MEMELAND</span>
              </div>
              <p className="text-gray-400">
                Первый в мире токен, который станет реальным островом
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Проект</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">О проекте</a></li>
                <li><a href="#map" className="text-gray-400 hover:text-white">Карта острова</a></li>
                <li><a href="#tokenomics" className="text-gray-400 hover:text-white">Токеномика</a></li>
                <li><a href="#roadmap" className="text-gray-400 hover:text-white">Дорожная карта</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Сообщество</h3>
              <ul className="space-y-2">
                <li><a href="https://t.me/memeland_CTO" className="text-gray-400 hover:text-white">Telegram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Medium</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Правовая информация</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Условия использования</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Политика конфиденциальности</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Риски</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>© 2025 MEMELAND. Все права защищены.</p>
            <p className="text-sm text-gray-500 mt-2">
              Не является финансовым советом. Инвестируйте с умом.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
