import React from "react";
import Header from "@/components/Header";
import TokenCard from "@/components/TokenCard";
import IslandMap from "@/components/IslandMap";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import TokenSale from "@/components/TokenSale";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import VideoPlayer from "@/components/VideoPlayer";

const Index = () => {
  // Features of MEMELAND
  const features = [
    {
      title: "Гражданство",
      description:
        "Каждый держатель токена получает гражданство в MEMELAND и право голоса в управлении островом",
      icon: "Award",
      isNew: false,
    },
    {
      title: "Привилегии для топ-100",
      description:
        "Эксклюзивные ID-карты, титулы и право назвать улицу на физическом острове",
      icon: "Crown",
      isNew: false,
    },
    {
      title: "Физический остров",
      description:
        "Реальный участок земли, который превратится из цифрового токена в физическую собственность",
      icon: "Map",
      isNew: true,
    },
    {
      title: "Памятники мемам",
      description:
        "Памятники легендарным крипто-мемам, построенные в разных частях острова",
      icon: "Landmark",
      isNew: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Добавляем живописную секцию с островом */}
      <section className="py-12 px-4 bg-[#E6F9FF] relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
                Наш остров ждет тебя
              </h2>
              <p className="text-gray-700 mb-6 max-w-lg">
                MEMELAND - это не просто токен, это будущий рай для
                крипто-энтузиастов. Представьте себе тропический остров с
                пальмами, белым песком и бирюзовой водой, где все решения
                принимаются сообществом.
              </p>
              <Button className="bg-[#1A1F2C] hover:bg-[#1A1F2C]/90">
                <Icon name="MapPin" className="mr-2" size={18} />
                Выбрать свой участок
              </Button>
            </div>
            <div className="md:w-1/2 relative">
              <img
                src="https://cdn.poehali.dev/files/c1d58ffa-3ea9-43bc-b43a-e5803dc2c261.jpg"
                alt="MEMELAND Island"
                className="rounded-xl shadow-lg w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#FFC107] rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#33C3F0] rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">
                О MEMELAND
              </h2>
              <p className="text-gray-600">
                Первое в мире крипто-мем государство с физическим островом
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <TokenCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                isNew={feature.isNew}
              />
            ))}
          </div>
        </div>
      </section>

      <Tokenomics />

      <section className="py-12 px-4 bg-[#F5FAFF] relative overflow-hidden">
        <div className="absolute -top-16 right-0 w-64 h-64 bg-[#FFC107]/10 rounded-full"></div>
        <div className="absolute -bottom-32 left-0 w-96 h-96 bg-[#33C3F0]/10 rounded-full"></div>

        <div className="container mx-auto relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
              <img
                src="https://cdn.poehali.dev/files/0948e6fc-821e-4024-b542-ae6ba48806c8.jpeg"
                alt="Swimming Pig in MEMELAND"
                className="rounded-xl shadow-lg w-full max-w-lg transform hover:rotate-1 transition-transform duration-500"
              />
              <div className="bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto -mt-16 relative z-10">
                <p className="font-medium text-[#1A1F2C]">
                  "На нашем острове даже свиньи плавают в бирюзовой воде! Кто
                  сказал, что свиньи не умеют плавать?"
                </p>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="inline-block px-4 py-1 bg-[#33C3F0]/20 text-[#33C3F0] rounded-full text-sm font-medium mb-4">
                УНИКАЛЬНЫЙ ОПЫТ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
                Животный мир MEMELAND
              </h2>
              <p className="text-gray-700 mb-6">
                Наш остров станет домом не только для крипто-энтузиастов, но и
                для удивительных животных. Представьте, как вы просыпаетесь под
                шум волн, выходите на пляж и видите плавающих свиней,
                дружелюбных обезьян и других экзотических животных.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFC107]/20 flex items-center justify-center text-[#FFC107] shrink-0">
                    <Icon name="Fish" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Морская жизнь</h4>
                    <p className="text-gray-600 text-sm">
                      Кристально чистая вода, коралловые рифы и богатый
                      подводный мир
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#33C3F0]/20 flex items-center justify-center text-[#33C3F0] shrink-0">
                    <Icon name="Leaf" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Тропическая флора</h4>
                    <p className="text-gray-600 text-sm">
                      Кокосовые пальмы, экзотические фрукты и яркие цветы
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Roadmap />

      <section
        id="features"
        className="bg-gradient-to-b from-white to-[#F8F9FA]"
      >
        <IslandMap />
      </section>

      <TokenSale />

      <section className="py-16 px-4 bg-[#1A1F2C] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC107]/5 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#33C3F0]/5 rounded-full"></div>

        <div className="container mx-auto relative">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-playfair mb-8">
            Уровни участия
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-[#FFC107] font-bold mb-2 flex items-center gap-2">
                <Icon name="Users" size={18} />
                <span>Базовый гражданин</span>
              </div>
              <div className="text-lg font-bold mb-4">1+ $MEMELAND</div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Гражданство в MEMELAND</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Право голоса в законах острова</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Доступ к мероприятиям сообщества</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Цифровой паспорт MEMELAND</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm transform scale-105 border border-[#FFC107]">
              <div className="absolute -top-3 right-4 bg-[#FFC107] text-[#1A1F2C] px-3 py-1 rounded-full text-sm font-bold">
                ПОПУЛЯРНО
              </div>
              <div className="text-[#FFC107] font-bold mb-2 flex items-center gap-2">
                <Icon name="Shield" size={18} />
                <span>Губернатор острова</span>
              </div>
              <div className="text-lg font-bold mb-4">Топ-100 держателей</div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Все преимущества базового гражданина</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Эксклюзивная физическая ID-карта</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Титул (Губернатор, Мем Лорд, Главный Кек)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Право назвать улицу на острове</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Приоритетный доступ к мероприятиям острова</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-[#33C3F0] font-bold mb-2 flex items-center gap-2">
                <Icon name="Building" size={18} />
                <span>Владелец собственности</span>
              </div>
              <div className="text-lg font-bold mb-4">Топ-10 держателей</div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Все преимущества губернатора</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Выделение земли на физическом острове</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Пожизненное членство в Совете</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Участие в проектировании архитектуры острова</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Местные жители</h3>
            <img
              src="https://cdn.poehali.dev/files/6427af35-b9a0-4461-93d1-836a4ef4f6ee.jpeg"
              alt="MEMELAND Native"
              className="rounded-xl shadow-lg max-w-md mx-auto mb-6"
            />
            <p className="text-lg max-w-2xl mx-auto text-white/80">
              Жители MEMELAND славятся своим дружелюбием и умением
              организовывать легендарные крипто-вечеринки. Присоединяйтесь к
              нашему сообществу и станьте частью истории!
            </p>
            <Button className="mt-8 bg-[#FFC107] text-[#1A1F2C] hover:bg-[#FFC107]/80">
              <Icon name="PartyPopper" className="mr-2" size={18} />
              Получить гражданство
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#FFC107]/10">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              🚨 ВНИМАНИЕ, МЕМ-КОЛОНИЗАТОРЫ! 🚨
            </h2>
            <img
              src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png"
              alt="MEMELAND"
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
                Каждый токен $MEMELAND дает вам:
              </h3>
              <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#33C3F0] font-bold">🔹</span>
                  <span>Гражданство в Memeland</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#33C3F0] font-bold">🔹</span>
                  <span>Право голоса по законам острова</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#33C3F0] font-bold">🔹</span>
                  <span>Шанс попасть в Топ-100 и получить физический ID</span>
                </li>
              </ul>

              <div className="bg-[#1A1F2C] text-white p-4 rounded-lg mb-6">
                <h3 className="text-[#FFC107] text-xl font-bold mb-3">
                  🏆 ТОП-100 ДЕРЖАТЕЛЕЙ ПОЛУЧАЮТ:
                </h3>
                <ul className="text-left max-w-md mx-auto space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFC017]">•</span>
                    <span>Эксклюзивные ID-карты</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFC017]">•</span>
                    <span>Титулы (Губернатор, Мем Лорд, Главный Кек)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFC017]">•</span>
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
                  <p>• Лес "FLOKI"</p>
                </div>
              </div>

              <div className="text-sm text-gray-600 italic">
                <p>P.S. Это не просто токен. Это социальный эксперимент.</p>
                <p>
                  Либо мы создадим самый легендарный крипто-мем хаб, либо уйдем
                  в небытие с славой в Twitter.
                </p>
                <p>Мы выбираем первый вариант.</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Посмотрите наше вводное видео:
              </p>
              <div className="max-w-2xl mx-auto">
                <VideoPlayer
                  videoUrl="https://cdn.poehali.dev/files/memeland_overview.mp4"
                  posterUrl="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png"
                  className="rounded-xl shadow-lg overflow-hidden aspect-video"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button className="bg-[#1A1F2C] hover:bg-[#1A1F2C]/80">
                <Icon name="Rocket" className="mr-2" size={18} />
                Стать гражданином MEMELAND
              </Button>
              <Button
                variant="outline"
                className="border-[#1A1F2C] text-[#1A1F2C]"
                as="a"
                href="https://t.me/memeland_CTO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="Users" className="mr-2" size={18} />
                Присоединиться к сообществу
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A1F2C] text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex justify-center items-center mb-4">
            <img
              src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png"
              alt="MEMELAND Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold font-playfair ml-3">
              MEMELAND
            </span>
          </div>

          <p className="text-sm text-white/60 text-center">
            © 2025 MEMELAND. Все права защищены. Не является финансовым
            советом.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
