
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface RoadmapPhase {
  id: string;
  phase: string;
  title: string;
  timeline: string;
  status: "completed" | "in-progress" | "upcoming";
  objectives: {
    category: string;
    items: string[];
  }[];
}

const roadmapPhases: RoadmapPhase[] = [
  {
    id: "phase-1",
    phase: "Phase 1",
    title: "Launch & First Citizens",
    timeline: "Q2 2025",
    status: "completed",
    objectives: [
      {
        category: "$MEMELAND Token",
        items: [
          "Fair Launch on Pump.fun (no premine).",
          "List on 2-3 DEXs (Raydium, Orca)."
        ]
      },
      {
        category: "Community",
        items: [
          "Launch Discord/Telegram with meme-chats and voting.",
          "First 1,000 holders become \"Memeland Pioneers\"."
        ]
      },
      {
        category: "Marketing",
        items: [
          "Collaborate with 5+ micro-influencers on Solana.",
          "Viral campaign: \"1 token = 1 grain of your island's sand\"."
        ]
      }
    ]
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    title: "Growth & Virality",
    timeline: "Q4 2025",
    status: "in-progress",
    objectives: [
      {
        category: "NFT Passports",
        items: [
          "Mint 10,000 Solana-based NFTs for citizenship.",
          "NFT holders vote on flag/anthem designs."
        ]
      },
      {
        category: "Partnerships",
        items: [
          "1-2 collabs with meme coins (Pepe, Wojak, Shiba).",
          "Negotiate with realtors for island options (share video updates)."
        ]
      },
      {
        category: "Events",
        items: [
          "Meme battles with $MEMELAND prizes.",
          "AMAs with crypto-meme celebrities."
        ]
      }
    ]
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    title: "Island Acquisition",
    timeline: "Q1-Q2 2026",
    status: "upcoming",
    objectives: [
      {
        category: "Funding",
        items: [
          "50% of $MEMELAND trading fees → Island Fund.",
          "NFT crowdfunding (e.g., \"Buy a brick for the FUD Wall\")."
        ]
      },
      {
        category: "Location",
        items: [
          "Community vote: Caribbean vs. Asia vs. Europe.",
          "Publish signed realtor agreements."
        ]
      },
      {
        category: "Preparation",
        items: [
          "3D virtual island tour.",
          "Sell merch (\"I'm Moving to Memeland\" tees)."
        ]
      }
    ]
  },
  {
    id: "phase-4",
    phase: "Phase 4",
    title: "Decentralized Nation",
    timeline: "Q2 2026+",
    status: "upcoming",
    objectives: [
      {
        category: "Governance",
        items: [
          "Launch DAO (e.g., Aragon) for island management.",
          "Implement \"meme taxes\" (5% ad revenue → treasury)."
        ]
      },
      {
        category: "Infrastructure",
        items: [
          "Build \"Meme Hub\" and \"HODL Bar\".",
          "Residency program (visas for holders)."
        ]
      },
      {
        category: "Media",
        items: [
          "Documentary: \"How We Bought an Island with Memes\".",
          "Features in Forbes/CoinTelegraph."
        ]
      }
    ]
  }
];

const successMetrics = [
  "EOY 2025: 100K+ holders, $1B market cap.",
  "2026: Physical island + 50K citizens.",
  "2027: UN recognition (kidding... unless?)."
];

const keyFeatures = [
  {
    category: "Gamification",
    items: [
      "Holder titles (\"Meme Lord\", \"FUD Slayer\").",
      "Island QR codes unlock NFT rewards."
    ]
  },
  {
    category: "Transparency",
    items: [
      "Monthly live-streamed reports.",
      "All funds in multisig (Gnosis Safe)."
    ]
  }
];

const Roadmap: React.FC = () => {
  const [activePhase, setActivePhase] = useState<string>("phase-1");

  const getPhaseIcon = (phase: RoadmapPhase) => {
    switch (phase.id) {
      case "phase-1":
        return "Sprout";
      case "phase-2":
        return "Construction";
      case "phase-3":
        return "Map";
      case "phase-4":
        return "Crown";
      default:
        return "Target";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <Icon name="CheckCircle" className="text-green-500" size={18} />;
      case "in-progress":
        return <Icon name="Clock" className="text-[#FFC107]" size={18} />;
      default:
        return <Icon name="Circle" className="text-gray-300" size={18} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500 bg-green-50";
      case "in-progress":
        return "border-[#FFC107] bg-[#FFC107]/10";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  return (
    <section className="py-16 px-4 bg-white" id="roadmap">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-[#33C3F0]/20 text-[#33C3F0] rounded-full text-sm font-medium mb-4">
            ROADMAP
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">
            <span className="text-[#FFC107]">MEMELAND</span> Roadmap (2024-2025)
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mission: Create the world's first meme-state with a physical island governed by its community.
          </p>
        </div>
        
        {/* Phase navigation tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2 md:gap-4 md:justify-center">
          {roadmapPhases.map((phase) => (
            <button
              key={phase.id}
              className={`flex-shrink-0 px-4 py-3 rounded-lg border-2 transition-all ${
                activePhase === phase.id
                  ? "border-[#33C3F0] bg-[#33C3F0]/10"
                  : "border-gray-200 hover:border-[#33C3F0]/50"
              }`}
              onClick={() => setActivePhase(phase.id)}
            >
              <div className="flex items-center gap-2">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activePhase === phase.id ? "bg-[#33C3F0] text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <Icon name={getPhaseIcon(phase)} size={16} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold">{phase.phase}</div>
                  <div className="text-xs text-gray-500">{phase.timeline}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
        
        {/* Active phase content */}
        {roadmapPhases.map((phase) => (
          <div 
            key={phase.id} 
            className={`${activePhase === phase.id ? "block" : "hidden"} animate-fade-in`}
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {getStatusIcon(phase.status)}
                    <span className="text-sm font-medium capitalize">{phase.status}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {phase.title}
                  </h3>
                  <div className="text-[#33C3F0] font-medium">{phase.timeline}</div>
                </div>
                <div className={`px-4 py-2 rounded-full text-sm border ${getStatusColor(phase.status)}`}>
                  <div className="font-medium">{phase.phase}</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {phase.objectives.map((objective, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-50 rounded-lg p-4 border border-gray-100"
                  >
                    <h4 className="font-bold mb-3 flex items-center gap-2 text-[#1A1F2C]">
                      {objective.category}
                    </h4>
                    <ul className="space-y-2">
                      {objective.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="min-w-[18px] mt-1">
                            <Icon name="CheckCircle2" size={14} className="text-[#33C3F0]" />
                          </div>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {/* Success Metrics & Key Features */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-[#1A1F2C] text-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="BarChart3" size={20} className="text-[#FFC107]" />
              <h3 className="text-xl font-bold">Success Metrics</h3>
            </div>
            <ul className="space-y-3">
              {successMetrics.map((metric, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="min-w-[18px] mt-1">
                    <Icon name="TrendingUp" size={14} className="text-[#FFC107]" />
                  </div>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#F8F9FA] rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Lightbulb" size={20} className="text-[#33C3F0]" />
              <h3 className="text-xl font-bold">Key Features</h3>
            </div>
            
            <div className="space-y-4">
              {keyFeatures.map((feature, index) => (
                <div key={index}>
                  <h4 className="font-bold mb-2">{feature.category}:</h4>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="min-w-[18px] mt-1">
                          <Icon name="CheckCircle2" size={14} className="text-[#33C3F0]" />
                        </div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <Button className="bg-[#1A1F2C] hover:bg-[#1A1F2C]/90">
            <Icon name="FileText" className="mr-2" size={16} />
            Download Full Roadmap PDF
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
