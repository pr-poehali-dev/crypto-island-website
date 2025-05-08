
import React from "react";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import TokenCard from "@/components/TokenCard";
import IslandMap from "@/components/IslandMap";
import Roadmap from "@/components/Roadmap";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-16 px-4 bg-white" id="about">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-playfair">Welcome to MEMELAND</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            The first token in the world that will transform into a real island in the ocean. And this is not a joke.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#33C3F0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png" 
                  alt="Icon" 
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Physical Island</h3>
              <p className="text-gray-600">Real piece of land you can actually visit</p>
            </div>
            
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#FFC107]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/c1d58ffa-3ea9-43bc-b43a-e5803dc2c261.jpg" 
                  alt="Icon" 
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Exotic Lifestyle</h3>
              <p className="text-gray-600">Unique ecosystem with beautiful beaches</p>
            </div>
            
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#6E59A5]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/6427af35-b9a0-4461-93d1-836a4ef4f6ee.jpeg" 
                  alt="Icon" 
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Community</h3>
              <p className="text-gray-600">Friendly neighbors and fascinating culture</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 px-4 bg-[#F8F9FA]" id="features">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 font-playfair">MEMELAND Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TokenCard 
              title="Cryptocurrency with Real Asset" 
              description="$MEMELAND - the first cryptocurrency backed by a real physical island"
              icon="CreditCard"
              isNew={true}
            />
            <TokenCard 
              title="Digital Citizenship" 
              description="Token holders receive the right to digital citizenship in MEMELAND"
              icon="User"
            />
            <TokenCard 
              title="Exclusive Access" 
              description="Ability to visit and live on the island for major holders"
              icon="Key"
            />
            <TokenCard 
              title="NFT Passports" 
              description="Unique NFT passports with different privilege levels"
              icon="Book"
            />
            <TokenCard 
              title="Transparent Governance" 
              description="DAO for decision-making on island development and infrastructure"
              icon="Vote"
              isNew={true}
            />
            <TokenCard 
              title="Value Appreciation" 
              description="Token value growth as the island and its infrastructure develops"
              icon="TrendingUp"
            />
          </div>
        </div>
      </section>

      <Gallery />
      <IslandMap />
      <Roadmap />
      
      <footer className="bg-[#1A1F2C] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png"
                  alt="MEMELAND"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-xl font-bold">MEMELAND</span>
              </div>
              <p className="text-gray-400">
                The first token in the world that will become a real island
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Project</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#map" className="text-gray-400 hover:text-white">Island Map</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#roadmap" className="text-gray-400 hover:text-white">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="https://t.me/memeland_CTO" className="text-gray-400 hover:text-white">Telegram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Discord</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Medium</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Legal Information</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Risk Disclosure</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>© 2025 MEMELAND. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-2">
              Not financial advice. Invest wisely.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
