
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

interface MapRegion {
  id: string;
  name: string;
  x: number;
  y: number;
  description: string;
  feature: string;
  rarity: "common" | "uncommon" | "rare" | "legendary";
}

const regions: MapRegion[] = [
  {
    id: "center",
    name: "Central Lighthouse",
    x: 50,
    y: 30,
    description:
      "The main community hub of MEMELAND, where holders gather to discuss island governance",
    feature: "MEMELAND City Hall",
    rarity: "legendary",
  },
  {
    id: "north",
    name: "Northern Palms",
    x: 48,
    y: 15,
    description: "Peaceful area with beautiful views and exclusive meeting spots",
    feature: "Coconut Grove",
    rarity: "rare",
  },
  {
    id: "east",
    name: "Eastern Beach",
    x: 75,
    y: 45,
    description: "The party zone of the island with seaside attractions",
    feature: "Crystal Beach",
    rarity: "uncommon",
  },
  {
    id: "west",
    name: "Western Cliffs",
    x: 25,
    y: 50,
    description: "Scenic lookout points and strategic development area",
    feature: "Top 100 Holders Monument",
    rarity: "rare",
  },
  {
    id: "south",
    name: "Southern Bay",
    x: 55,
    y: 75,
    description: "Mysterious region with untapped potential and natural beauty",
    feature: "Tropical Forest",
    rarity: "common",
  },
];

const IslandMap: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const getRarityColor = (rarity: MapRegion["rarity"]) => {
    switch (rarity) {
      case "common":
        return "bg-green-500";
      case "uncommon":
        return "bg-blue-500";
      case "rare":
        return "bg-purple-500";
      case "legendary":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-[#F8F9FA] py-16 px-4" id="map">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-playfair mb-2">
          MEMELAND Island Map
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-4">
          Explore the different regions of our future island, each with unique features and attractions
        </p>
        <p className="text-center text-[#1A1F2C] font-medium mb-12">
          Coconut Grove • Crystal Beach • Tropical Forest • And much more!
        </p>

        <div className="relative w-full max-w-3xl mx-auto aspect-square bg-[#33C3F0]/30 rounded-full overflow-hidden">
          {/* Island base image */}
          <img
            src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png"
            alt="MEMELAND Island"
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
                        activeRegion === region.id
                          ? "w-8 h-8 shadow-lg z-10"
                          : ""
                      } ${getRarityColor(region.rarity)}`}
                      style={{
                        left: `${region.x}%`,
                        top: `${region.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      onClick={() =>
                        setActiveRegion(
                          region.id === activeRegion ? null : region.id,
                        )
                      }
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
                      <Badge
                        className={`${getRarityColor(region.rarity)} text-white`}
                      >
                        {region.rarity.charAt(0).toUpperCase() + region.rarity.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{region.description}</p>
                    <div className="bg-gray-50 p-3 rounded">
                      <span className="text-gray-500">Featured Attraction:</span>
                      <div className="font-bold text-lg">{region.feature}</div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 italic">
              Select a region on the map to see detailed information
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IslandMap;
