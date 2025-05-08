
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface RoadmapItem {
  id: string;
  quarter: string;
  year: string;
  title: string;
  description: string;
  tasks: string[];
  status: "completed" | "in-progress" | "upcoming";
}

const roadmapItems: RoadmapItem[] = [
  {
    id: "q2-2025",
    quarter: "Q2",
    year: "2025",
    title: "Запуск проекта MEMELAND",
    description: "Начало путешествия и формирование сообщества",
    tasks: [
      "Запуск веб-сайта и социальных каналов",
      "Предпродажа токенов $MEMELAND",
      "Формирование базового сообщества",
      "KYC для основателей и аудит смарт-контрактов"
    ],
    status: "completed"
  },
  {
    id: "q3-2025",
    quarter: "Q3",
    year: "2025",
    title: "Исследование и расширение",
    description: "Поиск острова и листинг на биржах",
    tasks: [
      "Предварительное исследование потенциальных островов",
      "Листинг на первых децентрализованных биржах",
      "Расширение маркетинговой кампании",
      "Запуск системы управления DAO"
    ],
    status: "in-progress"
  },
  {
    id: "q4-2025",
    quarter: "Q4",
    year: "2025",
    title: "Выбор острова",
    description: "Выбор и покупка физического острова",
    tasks: [
      "Публичное голосование по выбору острова",
      "Юридические процедуры для покупки",
      "Листинг на централизованных биржах Tier-2",
      "Выпуск паспортов MEMELAND для топ-100 держателей"
    ],
    status: "upcoming"
  },
  {
    id: "q1-2026",
    quarter: "Q1",
    year: "2026",
    title: "Развитие острова",
    description: "Начало физического развития острова",
    tasks: [
      "Наем архитектурной команды",
      "Начало строительства базовой инфраструктуры",
      "Запуск программы резидентства для держателей токенов",
      "Планирование первого мероприятия на острове"
    ],
    status: "upcoming"
  }
];

const Roadmap: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white" id="roadmap">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-[#33C3F0]/20 text-[#33C3F0] rounded-full text-sm font-medium mb-4">
            ДОРОЖНАЯ КАРТА
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Путь к <span className="text-[#FFC107]">MEMELAND</span></h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Наш пошаговый план трансформации мечты в реальность - от токена до настоящего острова
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Вертикальная линия */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#F8F9FA] hidden md:block"></div>
          
          {/* Карточки дорожной карты */}
          <div className="space-y-12 relative">
            {roadmapItems.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Индикатор статуса (на десктопе) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-10 h-10 rounded-full border-4 border-white z-10 hidden md:flex items-center justify-center shadow-lg"
                    style={{ 
                      backgroundColor: item.status === 'completed' ? '#33C3F0' : 
                                      item.status === 'in-progress' ? '#FFC107' : '#F8F9FA',
                      borderColor: 'white'
                    }}>
                  {item.status === 'completed' && <Icon name="Check" size={16} className="text-white" />}
                  {item.status === 'in-progress' && <Icon name="Clock" size={16} className="text-white" />}
                </div>
                
                {/* Карточка (с чередованием слева/справа на десктопе) */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} relative`}>
                  <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow animate-fade-in">
                    {/* Мобильный индикатор статуса */}
                    <div className="md:hidden absolute -left-3 top-4 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ 
                        backgroundColor: item.status === 'completed' ? '#33C3F0' : 
                                        item.status === 'in-progress' ? '#FFC107' : '#F8F9FA' 
                      }}>
                      {item.status === 'completed' && <Icon name="Check" size={12} className="text-white" />}
                      {item.status === 'in-progress' && <Icon name="Clock" size={12} className="text-white" />}
                    </div>
                    
                    <div className="flex items-baseline mb-3">
                      <div className="text-sm font-bold text-[#1A1F2C] px-2 py-1 bg-[#F8F9FA] rounded mr-2">
                        {item.quarter} {item.year}
                      </div>
                      <div className="flex-1">
                        {item.status === 'completed' && (
                          <span className="text-xs text-green-500 font-medium">Завершено</span>
                        )}
                        {item.status === 'in-progress' && (
                          <span className="text-xs text-[#FFC107] font-medium">В процессе</span>
                        )}
                        {item.status === 'upcoming' && (
                          <span className="text-xs text-gray-400 font-medium">Предстоит</span>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="space-y-2">
                      {item.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#F8F9FA] flex-shrink-0 flex items-center justify-center mt-0.5">
                            {item.status === 'completed' ? (
                              <Icon name="Check" size={12} className="text-[#33C3F0]" />
                            ) : (
                              <div className={`w-2 h-2 rounded-full ${
                                item.status === 'in-progress' ? 'bg-[#FFC107]' : 'bg-gray-300'
                              }`}></div>
                            )}
                          </div>
                          <span className="text-sm">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Нижняя часть дорожной карты с кнопкой */}
          <div className="mt-16 text-center">
            <div className="bg-[#F8F9FA] rounded-lg p-6 inline-block">
              <h3 className="text-xl font-bold mb-4">Это только начало...</h3>
              <p className="text-gray-600 mb-6">
                Наша дорожная карта будет развиваться вместе с проектом и вашим вкладом. 
                Будущее MEMELAND создаётся всеми нами!
              </p>
              <Button className="bg-[#1A1F2C] hover:bg-[#1A1F2C]/90">
                <Icon name="FileText" className="mr-2" size={16} />
                Скачать полную дорожную карту
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
