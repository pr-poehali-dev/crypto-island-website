import React from "react";
import Header from "@/components/Header";
import TokenCard from "@/components/TokenCard";
import IslandMap from "@/components/IslandMap";
import Roadmap from "@/components/Roadmap";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import VideoPlayer from "@/components/VideoPlayer";

const Index = () => {
  // Features of MEMELAND
  const features = [
    {
      title: "Citizenship",
      description:
        "Every token holder gets citizenship in MEMELAND and voting rights on island governance",
      icon: "Award",
      isNew: false,
    },
    {
      title: "Top 100 Perks",
      description:
        "Exclusive ID cards, titles, and the right to name a street on the physical island",
      icon: "Crown",
      isNew: false,
    },
    {
      title: "Physical Island",
      description:
        "A real piece of land that will transform from digital token to physical property",
      icon: "Map",
      isNew: true,
    },
    {
      title: "Meme Monuments",
      description:
        "Monuments to legendary crypto memes built on different parts of the island",
      icon: "Landmark",
      isNew: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">
                About MEMELAND
              </h2>
              <p className="text-gray-600">
                The world's first crypto-meme state with a physical island
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

      <Roadmap />

      <section
        id="features"
        className="bg-gradient-to-b from-white to-[#F8F9FA]"
      >
        <IslandMap />
      </section>

      <section id="community" className="py-16 px-4 bg-[#1A1F2C] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-playfair mb-12">
            Membership Tiers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-[#FFC107] font-bold mb-2 flex items-center gap-2">
                <Icon name="Users" size={18} />
                <span>Basic Citizen</span>
              </div>
              <div className="text-lg font-bold mb-4">1+ $MEMELAND</div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Citizenship in MEMELAND</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Voting rights on island laws</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Access to community events</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>MEMELAND passport (digital)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm transform scale-105 border border-[#FFC107]">
              <div className="absolute -top-3 right-4 bg-[#FFC107] text-[#1A1F2C] px-3 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              <div className="text-[#FFC107] font-bold mb-2 flex items-center gap-2">
                <Icon name="Shield" size={18} />
                <span>Island Governor</span>
              </div>
              <div className="text-lg font-bold mb-4">Top 100 Holder</div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>All Basic Citizen perks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Exclusive physical ID card</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Title (Governor, Meme Lord, Chief Kek)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Right to name a street on the island</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Priority access to island events</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-[#33C3F0] font-bold mb-2 flex items-center gap-2">
                <Icon name="Building" size={18} />
                <span>Property Owner</span>
              </div>
              <div className="text-lg font-bold mb-4">Top 10 Holder</div>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>All Governor perks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Land allocation on physical island</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Lifetime membership in Council</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} className="text-green-400" />
                  <span>Design input on island architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#FFC107]/10">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              🚨 ATTENTION, MEME COLONIZERS! 🚨
            </h2>
            <img
              src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png"
              alt="MEMELAND"
              className="w-24 h-24 mx-auto mb-6 rounded-full shadow"
            />

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-4">🌎 What is MEMELAND?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 bg-[#F8F9FA] rounded-lg">
                  <p className="font-bold text-[#1A1F2C] mb-2">
                    ✔ The world's first crypto-meme state
                  </p>
                </div>
                <div className="p-4 bg-[#F8F9FA] rounded-lg">
                  <p className="font-bold text-[#1A1F2C] mb-2">
                    ✔ An island with monuments to legendary memes
                  </p>
                </div>
                <div className="p-4 bg-[#F8F9FA] rounded-lg">
                  <p className="font-bold text-[#1A1F2C] mb-2">
                    ✔ A community where only the real ones rule
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">
                Every $MEMELAND token gives you:
              </h3>
              <ul className="text-left max-w-md mx-auto mb-6 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#33C3F0] font-bold">🔹</span>
                  <span>Citizenship in Memeland</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#33C3F0] font-bold">🔹</span>
                  <span>Voting rights on island laws</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#33C3F0] font-bold">🔹</span>
                  <span>
                    A chance to join the Top 100 and get a physical ID
                  </span>
                </li>
              </ul>

              <div className="bg-[#1A1F2C] text-white p-4 rounded-lg mb-6">
                <h3 className="text-[#FFC107] text-xl font-bold mb-3">
                  🏆 TOP 100 HOLDERS GET:
                </h3>
                <ul className="text-left max-w-md mx-auto space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFC017]">•</span>
                    <span>Exclusive ID cards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFC017]">•</span>
                    <span>Titles (Governor, Meme Lord, Chief Kek)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FFC017]">•</span>
                    <span>The right to name a street on the island</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mb-3">
                🗺️ Island Plans Include:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <div className="p-3 bg-[#F8F9FA] rounded-lg">
                  <p>• "SHIBA INU" Square</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] rounded-lg">
                  <p>• "FARTCOIN" Beach</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] rounded-lg">
                  <p>• "FLOKI" Forest</p>
                </div>
              </div>

              <div className="text-sm text-gray-600 italic">
                <p>P.S. This isn't just a token. It's a social experiment.</p>
                <p>
                  Either we create the most legendary crypto-meme hub or go down
                  in a blaze of Twitter glory.
                </p>
                <p>We're choosing option one.</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">
                Check out our introduction video:
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
                Become a MEMELAND Citizen
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
                Join Our Community
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
            © 2025 MEMELAND. All rights reserved. Not financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
