
import React, { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

interface MapRegion {
  id: string;
  name: string;
  x: number;
  y: number;
  description: string;
  tokenCount: number;
  topToken: string;
  risk: 'low' | 'medium' | 'high';
}

const regions: MapRegion[] = [
  {
    id: 'center',
    name: 'Центральный Маяк',
    x: 50,
    y: 30,
    description: 'Главный торговый центр острова, место встречи опытных трейдеров',
    tokenCount: 12,
    topToken: 'DOGE',
    risk: 'low'
  },
  {
    id: 'north',
    name: 'Северные Пальмы',
    x: 48,
    y: 15,
    description: 'Зона новых перспективных проектов с хорошей репутацией',
    tokenCount: 8,
    topToken: 'SHIB',
    risk: 'medium'
  },
  {
    id: 'east',
    name: 'Восточный Пляж',
    x: 75,
    y: 45,
    description: 'Курортная зона с высокодоходными, но рискованными токенами',
    tokenCount: 15,
    topToken: 'PEPE',
    risk: 'high'
  },
  {
    id: 'west',
    name: 'Западные Скалы',
    x: 25,
    y: 50,
    description: 'Стабильная зона с проверенными временем мемкоинами',
    tokenCount: 5,
    topToken: 'FLOKI',
    risk: 'low'
  },
  {
    id: 'south',
    name: 'Южная Бухта',
    x: 55,
    y: 75,
    description: 'Таинственная область с редкими и экзотическими токенами',
    tokenCount: 10,
    topToken: 'BONK',
    risk: 'high'
  }
];

const IslandMap: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  
  const getRiskColor = (risk: MapRegion['risk']) => {
    switch (risk) {
      case 'low':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'high':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  return (
    <div className="bg-[#F8F9FA] py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-playfair mb-2">Карта МемЛенда</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Исследуйте различные регионы нашего острова, где обитают мемкоины разных категорий и уровней риска
        </p>
        
        <div className="relative w-full max-w-3xl mx-auto aspect-square bg-[#33C3F0]/30 rounded-full overflow-hidden">
          {/* Island base image */}
          <img 
            src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png" 
            alt="Остров МемЛенд" 
            className="absolute inset-0 w-full h-full object-contain"
          />
          
          {/* Map points */}
          <div className="absolute inset-0">
            <TooltipProvider>
              {regions.map((region) => (
                <Tooltip key={region.id}>
                  <TooltipTrigger asChild>
                    <button
                      className={`absolute w-6 h-6 rounded-full border-2 border-white transition-all ${
                        activeRegion === region.id ? 'w-8 h-8 shadow-lg z-10' : ''
                      } ${getRiskColor(region.risk)}`}
                      style={{ left: `${region.x}%`, top: `${region.y}%`, transform: 'translate(-50%, -50%)' }}
                      onClick={() => setActiveRegion(region.id === activeRegion ? null : region.id)}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <div className="font-bold">{region.name}</div>
                    <p className="text-xs">{region.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>
        
        {/* Region details */}
        <div className="mt-8 max-w-3xl mx-auto">
          {activeRegion ? (
            <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
              {regions
                .filter((region) => region.id === activeRegion)
                .map((region) => (
                  <div key={region.id}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{region.name}</h3>
                      <Badge className={`${getRiskColor(region.risk)} text-white`}>
                        Риск: {region.risk === 'low' ? 'Низкий' : region.risk === 'medium' ? 'Средний' : 'Высокий'}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 p-3 rounded">
                        <span className="text-gray-500">Количество токенов:</span>
                        <div className="font-bold text-lg">{region.tokenCount}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <span className="text-gray-500">Топовый токен:</span>
                        <div className="font-bold text-lg">{region.topToken}</div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 italic">
              Выберите регион на карте, чтобы увидеть подробную информацию
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IslandMap;
