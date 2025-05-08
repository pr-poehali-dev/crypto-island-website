
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Компонент для отображения таймера обратного отсчета
const CountdownTimer: React.FC<{ endDate: Date }> = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = +endDate - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="flex justify-center gap-3 md:gap-4 py-4">
      <div className="flex flex-col items-center">
        <div className="bg-[#1A1F2C] text-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-xl md:text-3xl font-bold relative overflow-hidden">
          <div className="z-10">{formatTime(timeLeft.days)}</div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-[#FFC107]"></div>
        </div>
        <span className="text-xs mt-1 text-gray-500">Дней</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="bg-[#1A1F2C] text-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-xl md:text-3xl font-bold relative overflow-hidden">
          <div className="z-10">{formatTime(timeLeft.hours)}</div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-[#FFC107]"></div>
        </div>
        <span className="text-xs mt-1 text-gray-500">Часов</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="bg-[#1A1F2C] text-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-xl md:text-3xl font-bold relative overflow-hidden">
          <div className="z-10">{formatTime(timeLeft.minutes)}</div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-[#FFC107]"></div>
        </div>
        <span className="text-xs mt-1 text-gray-500">Минут</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="bg-[#1A1F2C] text-white w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center text-xl md:text-3xl font-bold relative overflow-hidden animate-pulse-slow">
          <div className="z-10">{formatTime(timeLeft.seconds)}</div>
          <div className="absolute inset-x-0 bottom-0 h-1 bg-[#FFC107]"></div>
        </div>
        <span className="text-xs mt-1 text-gray-500">Секунд</span>
      </div>
    </div>
  );
};

// Основной компонент продажи токенов
const TokenSale: React.FC = () => {
  // Устанавливаем дату окончания распродажи (30 дней от текущей даты)
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 30);
  
  // Данные о прогрессе распродажи
  const [progress, setProgress] = useState(62);
  const totalRaised = 1430.5;
  const hardCap = 2300;
  const currentPhase = "Фаза 2";
  const tokenPrice = 0.00042;
  
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-[#F8F9FA]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block px-4 py-1 bg-[#FFC107]/20 text-[#1A1F2C] rounded-full text-sm font-medium mb-4">
              ПРЕДПРОДАЖА ТОКЕНОВ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">Стань гражданином <span className="text-[#33C3F0]">MEMELAND</span></h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Покупайте токены сейчас — обеспечьте себе место в будущем крипто-государстве
            </p>
          </div>
          
          <Card className="border-2 border-[#1A1F2C]/10 shadow-xl bg-white backdrop-blur-sm relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#FFC107] rounded-full opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#33C3F0] rounded-full opacity-10"></div>
            
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Предпродажа токенов заканчивается через:</CardTitle>
              <CountdownTimer endDate={endDate} />
            </CardHeader>
            
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center gap-1 text-sm">
                      <span className="font-medium">{currentPhase}</span>
                      <div className="px-2 py-0.5 rounded bg-[#1A1F2C] text-white text-xs">
                        АКТИВНА
                      </div>
                    </div>
                    <div className="text-sm text-right">
                      <span className="font-bold">{totalRaised} ETH</span> из <span>{hardCap} ETH</span>
                    </div>
                  </div>
                  <Progress value={progress} className="h-3 bg-gray-100" />
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Прогресс: {progress}%</span>
                    <span>Следующая фаза: ${(tokenPrice * 1.3).toFixed(5)}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#1A1F2C]/5 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Icon name="Landmark" size={16} />
                      <span>Цена токена</span>
                    </h3>
                    <div className="text-2xl font-bold text-[#1A1F2C]">${tokenPrice.toFixed(5)}</div>
                    <div className="text-xs text-gray-500 mt-1">≈ 0.00000237 BTC</div>
                  </div>
                  
                  <div className="bg-[#1A1F2C]/5 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>Бонус текущей фазы</span>
                    </h3>
                    <div className="text-2xl font-bold text-[#1A1F2C]">+25%</div>
                    <div className="text-xs text-gray-500 mt-1">Следующая фаза: +15%</div>
                  </div>
                </div>
                
                <Tabs defaultValue="eth">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="eth">ETH</TabsTrigger>
                    <TabsTrigger value="usdt">USDT</TabsTrigger>
                    <TabsTrigger value="bnb">BNB</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="eth" className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="border rounded-lg p-3 hover:border-[#33C3F0] cursor-pointer transition-colors">
                        <div className="font-medium">0.1 ETH</div>
                        <div className="text-sm text-gray-500">{Math.floor(0.1 / tokenPrice * 1.25).toLocaleString()} $MEMELAND</div>
                      </div>
                      <div className="border rounded-lg p-3 hover:border-[#33C3F0] cursor-pointer transition-colors">
                        <div className="font-medium">0.5 ETH</div>
                        <div className="text-sm text-gray-500">{Math.floor(0.5 / tokenPrice * 1.25).toLocaleString()} $MEMELAND</div>
                      </div>
                      <div className="border rounded-lg p-3 hover:border-[#33C3F0] cursor-pointer transition-colors">
                        <div className="font-medium">1 ETH</div>
                        <div className="text-sm text-gray-500">{Math.floor(1 / tokenPrice * 1.25).toLocaleString()} $MEMELAND</div>
                      </div>
                      <div className="border rounded-lg p-3 hover:border-[#33C3F0] cursor-pointer transition-colors">
                        <div className="font-medium">5 ETH</div>
                        <div className="text-sm text-gray-500">{Math.floor(5 / tokenPrice * 1.25).toLocaleString()} $MEMELAND</div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <Icon name="Ethereum" size={20} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Введите сумму ETH"
                        className="w-full pl-10 pr-32 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#33C3F0]"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                        ≈ 25,000 $MEMELAND
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="usdt" className="space-y-4">
                    <div className="flex items-center justify-center p-8">
                      <div className="text-center">
                        <Icon name="Wallet" size={40} className="mx-auto text-gray-300 mb-2" />
                        <p>Выберите USDT для продолжения</p>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="bnb" className="space-y-4">
                    <div className="flex items-center justify-center p-8">
                      <div className="text-center">
                        <Icon name="Wallet" size={40} className="mx-auto text-gray-300 mb-2" />
                        <p>Выберите BNB для продолжения</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col gap-3">
              <Button className="w-full py-6 text-lg bg-[#1A1F2C] hover:bg-[#1A1F2C]/90">
                <Icon name="Rocket" className="mr-2" size={18} />
                Купить токены
              </Button>
              
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Icon name="Shield" size={16} className="text-green-500" />
                  <span>KYC & Audit</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Lock" size={16} className="text-green-500" />
                  <span>Безопасный контракт</span>
                </div>
              </div>
            </CardFooter>
          </Card>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-2xl font-bold mb-1 text-[#1A1F2C]">30M</div>
              <div className="text-sm text-gray-500">Всего токенов</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-2xl font-bold mb-1 text-[#1A1F2C]">$0.0005</div>
              <div className="text-sm text-gray-500">Листинг цена</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-2xl font-bold mb-1 text-[#1A1F2C]">18.9M</div>
              <div className="text-sm text-gray-500">Токенов продано</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-2xl font-bold mb-1 text-[#1A1F2C]">2,734</div>
              <div className="text-sm text-gray-500">Инвесторов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSale;
