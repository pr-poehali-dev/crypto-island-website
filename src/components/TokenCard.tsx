
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

interface TokenCardProps {
  name: string;
  symbol: string;
  price: number;
  changePercent: number;
  marketCap: string;
  volume: string;
  iconUrl: string;
  isHot?: boolean;
}

const TokenCard: React.FC<TokenCardProps> = ({
  name,
  symbol,
  price,
  changePercent,
  marketCap,
  volume,
  iconUrl,
  isHot = false
}) => {
  const isPriceUp = changePercent > 0;
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-4px] border-2 border-gray-100">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
              <img src={iconUrl} alt={symbol} className="w-full h-full object-cover" />
            </div>
            <div>
              <CardTitle className="text-lg flex items-center gap-2">
                {name}
                {isHot && (
                  <Badge variant="secondary" className="bg-red-100 text-red-600 hover:bg-red-200">
                    <Icon name="Flame" size={12} className="mr-1 text-red-500" />
                    Горячий
                  </Badge>
                )}
              </CardTitle>
              <CardDescription className="text-gray-500">{symbol}</CardDescription>
            </div>
          </div>
          <div className={`text-sm font-medium flex items-center ${isPriceUp ? 'text-green-600' : 'text-red-600'}`}>
            {isPriceUp ? <Icon name="TrendingUp" size={16} className="mr-1" /> : <Icon name="TrendingDown" size={16} className="mr-1" />}
            {changePercent.toFixed(2)}%
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-2">
        <div className="text-2xl font-bold font-mono">${price.toFixed(6)}</div>
        <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
          <div className="text-gray-500">Капитализация:</div>
          <div className="font-medium text-right">{marketCap}</div>
          <div className="text-gray-500">Объем (24ч):</div>
          <div className="font-medium text-right">{volume}</div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 pb-3">
        <div className="w-full h-8 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full ${isPriceUp ? 'bg-green-500' : 'bg-red-500'} rounded-full transition-all duration-500 ease-in-out`}
            style={{ width: `${Math.min(Math.abs(changePercent) * 2, 100)}%` }}
          ></div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TokenCard;
