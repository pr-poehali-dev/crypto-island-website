import React from "react";
import Header from "@/components/Header";
import TokenCard from "@/components/TokenCard";
import IslandMap from "@/components/IslandMap";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  // Sample data for token cards
  const tokens = [
    {
      name: "Dogecoin",
      symbol: "DOGE",
      price: 0.12345,
      changePercent: 8.7,
      marketCap: "$16.5B",
      volume: "$1.2B",
      iconUrl: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
      isHot: true,
    },
    {
      name: "Shiba Inu",
      symbol: "SHIB",
      price: 0.00002345,
      changePercent: 12.3,
      marketCap: "$13.1B",
      volume: "$986M",
      iconUrl: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
      isHot: true,
    },
    {
      name: "Pepe",
      symbol: "PEPE",
      price: 0.00000678,
      changePercent: -4.2,
      marketCap: "$2.8B",
      volume: "$210M",
      iconUrl:
        "https://assets.coingecko.com/coins/images/29850/large/pepe-token.jpeg",
      isHot: false,
    },
    {
      name: "Floki Inu",
      symbol: "FLOKI",
      price: 0.00015678,
      changePercent: 5.6,
      marketCap: "$1.4B",
      volume: "$120M",
      iconUrl:
        "https://assets.coingecko.com/coins/images/16746/large/PNG_image.png",
      isHot: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Hero Section */}
      <Header />

      {/* Popular Memcoins Section */}
      <section id="tokens" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">
                Популярные Мемкоины
              </h2>
              <p className="text-gray-600">
                Исследуйте самые горячие мемкоины на нашем острове
              </p>
            </div>
            <Button className="mt-4 md:mt-0 bg-[#33C3F0] hover:bg-[#33C3F0]/80">
              <Icon name="RefreshCw" className="mr-2" size={16} />
              Обновить данные
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokens.map((token) => (
              <TokenCard
                key={token.symbol}
                name={token.name}
                symbol={token.symbol}
                price={token.price}
                changePercent={token.changePercent}
                marketCap={token.marketCap}
                volume={token.volume}
                iconUrl={token.iconUrl}
                isHot={token.isHot}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="border-[#33C3F0] text-[#33C3F0] hover:bg-[#33C3F0] hover:text-white"
            >
              Смотреть все мемкоины
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Island Map Section */}
      <section id="map" className="bg-gradient-to-b from-white to-[#F8F9FA]">
        <IslandMap />
      </section>

      {/* Trending Section */}
      <section id="trends" className="py-16 px-4 bg-[#1A1F2C] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-playfair mb-12">
            Тренды МемЛенда
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-[#FFC107] font-bold mb-2 flex items-center gap-2">
                <Icon name="TrendingUp" size={18} />
                <span>Растущие сейчас</span>
              </div>
              <ul className="space-y-3">
                {["PEPE", "FLOKI", "DOGE", "SHIB", "BONK"].map(
                  (symbol, index) => (
                    <li key={symbol} className="flex items-center gap-2">
                      <span className="text-[#FFC107] font-mono">
                        #{index + 1}
                      </span>
                      <span className="font-medium">{symbol}</span>
                      <span className="ml-auto text-green-400">
                        +{(Math.random() * 20).toFixed(1)}%
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-[#FEC6A1] font-bold mb-2 flex items-center gap-2">
                <Icon name="Flame" size={18} />
                <span>Самые обсуждаемые</span>
              </div>
              <ul className="space-y-3">
                {["SHIB", "DOGE", "PEPE", "WOJAK", "MONA"].map(
                  (symbol, index) => (
                    <li key={symbol} className="flex items-center gap-2">
                      <span className="text-[#FEC6A1] font-mono">
                        #{index + 1}
                      </span>
                      <span className="font-medium">{symbol}</span>
                      <span className="ml-auto text-white/70">
                        {Math.floor(Math.random() * 1000)}K
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-[#33C3F0] font-bold mb-2 flex items-center gap-2">
                <Icon name="Star" size={18} />
                <span>Новые открытия</span>
              </div>
              <ul className="space-y-3">
                {["MEME", "TURBO", "BRETT", "MOG", "WIF"].map(
                  (symbol, index) => (
                    <li key={symbol} className="flex items-center gap-2">
                      <span className="text-[#33C3F0] font-mono">
                        #{index + 1}
                      </span>
                      <span className="font-medium">{symbol}</span>
                      <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded">
                        Новый
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#FFC107]/10">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              🚨 ATTENTION, MEME COLONIZERS! 🚨
            </h2>
            <img
              src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png"
              alt="МемЛенд"
              className="w-24 h-24 mx-auto mb-6 rounded-full shadow"
            />

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-4">
                🌎 Что такое MEMELAND?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 bg-[#F8F9FA] rounded-lg">
                  <p className="font-bold text-[#1A1F2C] mb-2">
                    ✔ Первое в мире крипто-мем государство
                  </p>
                </div>
                <div className="p-4 bg-[#F8F9FA] rounded-lg">
                  <p className="font-bold text-[#1A1F2C] mb-2">
                    ✔ Остров с памятниками легендарным мемам
                  </p>
                </div>
                <div className="p-4 bg-[#F8F9FA] rounded-lg">
                  <p className="font-bold text-[#1A1F2C] mb-2">
                    ✔ Сообщество, где правят только настоящие
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">
                Каждый токен $MEMELAND даёт вам:
              </h3>
              <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#33C3F0] font-bold">🔹</span>
                  <span>Гражданство в МемЛенде</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#33C3F0] font-bold">🔹</span>
                  <span>Права голоса по законам острова</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#33C3F0] font-bold">🔹</span>
                  <span>Шанс войти в Топ-100 и получить физический ID</span>
                </li>
              </ul>

              <div className="bg-[#1A1F2C] text-white p-4 rounded-lg mb-6">
                <h3 className="text-[#FFC107] text-xl font-bold mb-3">
                  🏆 ТОП-100 ДЕРЖАТЕЛЕЙ ПОЛУЧАЮТ:
                </h3>
                <ul className="text-left max-w-md mx-auto space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFC107]">•</span>
                    <span>Эксклюзивные ID-карты</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFC107]">•</span>
                    <span>Титулы (Губернатор, Мем Лорд, Главный Кек)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFC107]">•</span>
                    <span>Право назвать улицу на острове</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mb-3">
                🗺️ Планы острова включают:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 bg-[#F8F9FA] rounded-lg">
                  <p>• Площадь "SHIBA INU"</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] rounded-lg">
                  <p>• Пляж "FARTCOIN"</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] rounded-lg">
                  <p>• Лес "FLOKY"</p>
                </div>
              </div>

              <div className="text-sm text-gray-600 italic">
                <p>P.S. Это не просто токен. Это социальный эксперимент.</p>
                <p>
                  Либо мы создадим самый легендарный крипто-мем хаб, либо сгорим
                  в пламени славы Twitter.
                </p>
                <p>Мы выбираем первый вариант.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#1A1F2C] hover:bg-[#1A1F2C]/80">
                <Icon name="Rocket" className="mr-2" size={18} />
                Стать гражданином МемЛенда
              </Button>
              <Button
                variant="outline"
                className="border-[#1A1F2C] text-[#1A1F2C]"
              >
                <Icon name="Users" className="mr-2" size={18} />
                Присоединиться к сообществу
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <img
                src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png"
                alt="МемЛенд Лого"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl font-bold font-playfair">МемЛенд</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center md:text-left mb-8 md:mb-0">
              <div>
                <h3 className="text-[#FFC107] font-medium mb-3">Навигация</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      Главная
                    </a>
                  </li>
                  <li>
                    <a
                      href="#tokens"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      Мемкоины
                    </a>
                  </li>
                  <li>
                    <a
                      href="#map"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      Карта
                    </a>
                  </li>
                  <li>
                    <a
                      href="#trends"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      Тренды
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#FFC107] font-medium mb-3">Ресурсы</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      Блог
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      Аналитика
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      Поддержка
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#FFC107] font-medium mb-3">Сообщество</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      Discord
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      Reddit
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#FFC107] font-medium mb-3">
                  Правовая информация
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      Условия использования
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      Политика конфиденциальности
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#FFC107] transition-colors"
                    >
                      Отказ от ответственности
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60 mb-4 md:mb-0">
              © 2025 МемЛенд. Все права защищены. Не является инвестиционной
              рекомендацией.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-[#FFC107] hover:bg-transparent"
              >
                <Icon name="Twitter" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-[#FFC107] hover:bg-transparent"
              >
                <Icon name="Github" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-[#FFC107] hover:bg-transparent"
              >
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-[#FFC107] hover:bg-transparent"
              >
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
