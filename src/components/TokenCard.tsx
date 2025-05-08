import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface TokenCardProps {
  title: string;
  description: string;
  icon: string;
  isNew?: boolean;
}

const TokenCard: React.FC<TokenCardProps> = ({
  title,
  description,
  icon,
  isNew = false,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all hover:translate-y-[-4px] border-2 border-gray-100">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-[#1A1F2C] flex items-center justify-center text-[#FFC107]">
              <Icon name={icon} size={24} />
            </div>
            <div>
              <CardTitle className="text-lg flex items-center gap-2">
                {title}
                {isNew && (
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-600 hover:bg-blue-200"
                  >
                    <Icon
                      name="Star"
                      size={12}
                      className="mr-1 text-blue-500"
                    />
                    New
                  </Badge>
                )}
              </CardTitle>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-2">
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="pt-2 pb-3 flex justify-end">
        {/* Learn more button removed */}
      </CardFooter>
    </Card>
  );
};

export default TokenCard;
