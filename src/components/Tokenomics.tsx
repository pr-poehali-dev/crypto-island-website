
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

// Компонент круговой диаграммы для распределения токенов
const PieChart: React.FC<{ segments: { name: string; percentage: number; color: string }[] }> = ({ segments }) => {
  // Вычисляем начальные и конечные углы для каждого сегмента
  const cumulativeOffsets = segments.reduce(
    (acc: number[], segment, index) => {
      const lastOffset = acc[index] || 0;
      acc.push(lastOffset + segment.percentage);
      return acc;
    },
    [0]
  );

  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="48" fill="#F8F9FA" />
        
        {segments.map((segment, index) => {
          const startAngle = (cumulativeOffsets[index] / 100) * 360;
          const endAngle = (cumulativeOffsets[index + 1] / 100) * 360;
          
          // Преобразуем углы в радианы для расчета координат
          const startRadians = (startAngle - 90) * (Math.PI / 180);
          const endRadians = (endAngle - 90) * (Math.PI / 180);
          
          const x1 = 50 + 48 * Math.cos(startRadians);
          const y1 = 50 + 48 * Math.sin(startRadians);
          const x2 = 50 + 48 * Math.cos(endRadians);
          const y2 = 50 + 48 * Math.sin(endRadians);
          
          // Определяем, является ли дуга большой (более 180 градусов)
          const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
          
          // Создаем путь для сегмента дуги
          const d = [
            "M", 50, 50,
            "L", x1, y1,
            "A", 48, 48, 0, largeArcFlag, 1, x2, y2,
            "Z"
          ].join(" ");
          
          return (
            <path
              key={segment.name}
              d={d}
              fill={segment.color}
              stroke="white"
              strokeWidth="1"
              className="hover:opacity-90 transition-opacity cursor-pointer"
            />
          );
        })}
      </svg>
      
      {/* Показываем центральный круг для эффекта пончика */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center">
        <div className="text-center">
          <div className="text-sm font-medium text-gray-500">Всего</div>
          <div className="text-xl font-bold text-[#1A1F2C]">30M</div>
        </div>
      </div>
    </div>
  );
};

// Данные для диаграммы распределения токенов
const tokenDistribution = [
  { name: "Продажа токенов", percentage: 40, color: "#33C3F0" },
  { name: "Команда", percentage: 20, color: "#FFC107" },
  { name: "Маркетинг", percentage: 15, color: "#9b87f5" },
  { name: "Ликвидность", percentage: 10, color: "#6E59A5" },
  { name: "Покупка острова", percentage: 10, color: "#F97316" },
  { name: "Резерв", percentage: 5, color: "#8A898C" }
];

// Данные для распределения средств
const fundsDistribution = [
  { name: "Покупка острова", percentage: 60, color: "#33C3F0" },
  { name: "Развитие", percentage: 15, color: "#FFC107" },
  { name: "Маркетинг", percentage: 10, color: "#9b87f5" },
  { name: "Безопасность", percentage: 10, color: "#6E59A5" },
  { name: "Операции", percentage: 5, color: "#8A898C" }
];

const Tokenomics: React.FC = () => {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);
  
  return (
    <section className="py-16 px-4 bg-white" id="tokenomics">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-[#33C3F0]/20 text-[#33C3F0] rounded-full text-sm font-medium mb-4">
            ТОКЕНОМИКА
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Распределение токенов <span className="text-[#FFC107]">$MEMELAND</span></h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Прозрачная токеномика с фокусом на покупку реального острова и долгосрочную устойчивость проекта
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-12 items-center max-w-5xl mx-auto">
          <div className="md:w-1/2">
            <Tabs defaultValue="tokens">
              <TabsList className="grid grid-cols-2 w-full mb-8">
                <TabsTrigger value="tokens">Распределение токенов</TabsTrigger>
                <TabsTrigger value="funds">Распределение средств</TabsTrigger>
              </TabsList>
              
              <TabsContent value="tokens" className="relative">
                <PieChart segments={tokenDistribution} />
                
                <div className="mt-8 grid grid-cols-2 gap-3 max-w-md mx-auto">
                  {tokenDistribution.map((segment) => (
                    <div 
                      key={segment.name}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors"
                      onMouseEnter={() => setHoveredSegment(segment.name)}
                      onMouseLeave={() => setHoveredSegment(null)}
                    >
                      <div 
                        className="w-4 h-4 rounded-sm" 
                        style={{ backgroundColor: segment.color }}
                      ></div>
                      <div className="text-sm flex-1">
                        <div className="font-medium">{segment.name}</div>
                        <div className="text-gray-500">{segment.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="funds" className="relative">
                <PieChart segments={fundsDistribution} />
                
                <div className="mt-8 grid grid-cols-2 gap-3 max-w-md mx-auto">
                  {fundsDistribution.map((segment) => (
                    <div 
                      key={segment.name}
                      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 transition-colors"
                      onMouseEnter={() => setHoveredSegment(segment.name)}
                      onMouseLeave={() => setHoveredSegment(null)}
                    >
                      <div 
                        className="w-4 h-4 rounded-sm" 
                        style={{ backgroundColor: segment.color }}
                      ></div>
                      <div className="text-sm flex-1">
                        <div className="font-medium">{segment.name}</div>
                        <div className="text-gray-500">{segment.percentage}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-[#F8F9FA] p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 font-playfair">Ключевые особенности</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#33C3F0]/20 flex items-center justify-center text-[#33C3F0] shrink-0">
                    <Icon name="Lock" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Блокировка токенов команды</h4>
                    <p className="text-gray-600 text-sm">Токены команды заблокированы на 12 месяцев с последующим линейным высвобождением в течение 24 месяцев</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFC107]/20 flex items-center justify-center text-[#FFC107] shrink-0">
                    <Icon name="RocketLaunch" size={20} fallback="Rocket" />
                  </div>
                  <div>
                    <h4 className="font-bold">Прозрачность распределения</h4>
                    <p className="text-gray-600 text-sm">Все средства от продажи токенов отправляются на мультисиг кошелек с общественным контролем</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#9b87f5]/20 flex items-center justify-center text-[#9b87f5] shrink-0">
                    <Icon name="Map" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Целевое использование</h4>
                    <p className="text-gray-600 text-sm">60% всех собранных средств направляются на покупку и развитие физического острова</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#6E59A5]/20 flex items-center justify-center text-[#6E59A5] shrink-0">
                    <Icon name="TrendingUp" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">Экономическая модель</h4>
                    <p className="text-gray-600 text-sm">Долгосрочная стратегия развития с фокусом на увеличение ценности токена через реальные активы</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-[#1A1F2C] hover:bg-[#1A1F2C]/90">
                  <Icon name="FileText" className="mr-2" size={16} />
                  Скачать полную токеномику
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
