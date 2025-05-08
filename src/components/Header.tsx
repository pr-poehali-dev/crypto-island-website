import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="relative bg-gradient-to-b from-[#1A1F2C] to-[#33C3F0] min-h-[60vh] overflow-hidden">
      {/* Animated clouds */}
      <div className="absolute inset-0 opacity-30">
        <div className="cloud absolute top-[10%] left-[10%] w-24 h-12 bg-[#FEC6A1] rounded-full animate-float"></div>
        <div className="cloud absolute top-[15%] right-[15%] w-32 h-16 bg-[#FEC6A1] rounded-full animate-float-delay"></div>
        <div className="cloud absolute top-[25%] left-[30%] w-20 h-10 bg-[#FEC6A1] rounded-full animate-float-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto py-4 px-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png"
            alt="MEMELAND Logo"
            className="w-12 h-12 rounded-full"
          />
          <span className="text-white font-bold text-xl">MEMELAND</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-white hover:text-[#FFC107] transition-colors"
          >
            About
          </a>
          <a
            href="#map"
            className="text-white hover:text-[#FFC107] transition-colors"
          >
            Island Map
          </a>
          <a
            href="#features"
            className="text-white hover:text-[#FFC107] transition-colors"
          >
            Features
          </a>
          <a
            href="#roadmap"
            className="text-white hover:text-[#FFC107] transition-colors"
          >
            Roadmap
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-12 pb-24 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <div className="bg-[#FFC107]/20 text-white p-4 rounded-lg mb-6 border border-[#FFC107]/30">
            <p className="font-bold text-lg mb-2">
              🚨 ATTENTION, MEME COLONIZERS! 🚨
            </p>
            <p className="text-lg mb-4">
              "Bitcoin is boring. We're buying a REAL ISLAND."
            </p>

            <p className="mb-4">
              Hey legend! 👋 You've just discovered $MEMELAND—the first-ever
              token that will transform into an actual piece of land in the
              ocean. Yes, this is not a joke.
            </p>

            <p className="font-bold mb-2">🌎 What is MEMELAND?</p>
            <p className="mb-2">This is:</p>
            <ul className="mb-4 text-left ml-4">
              <li>✔ The world's first crypto-meme state</li>
              <li>✔ An island with monuments to legendary memes</li>
              <li>✔ A community where only the real ones rule</li>
            </ul>

            <p className="font-bold mb-2">Every $MEMELAND token gives you:</p>
            <ul className="mb-4 text-left ml-4">
              <li>🔹 Citizenship in Memeland</li>
              <li>🔹 Voting rights on island laws</li>
              <li>🔹 A chance to join the Top 100 and get a physical ID</li>
            </ul>

            <p className="font-bold mb-2">🏆 TOP 100 HOLDERS GET:</p>
            <ul className="mb-4 text-left ml-4">
              <li>- Exclusive ID cards</li>
              <li>- Titles (Governor, Meme Lord, Chief Kek)</li>
              <li>- The right to name a street on the island</li>
            </ul>

            <p className="font-bold mb-2">🗺️ Island Plans Include:</p>
            <ul className="mb-4 text-left ml-4">
              <li>• "SHIBA INU" Square</li>
              <li>• "FARTCOIN Beach"</li>
              <li>• "FLOKY Forest"</li>
            </ul>

            <p className="text-sm italic mt-4">
              P.S. This isn't just a token. It's a social experiment.
              <br />
              Either we create the most legendary crypto-meme hub or go down in
              a blaze of Twitter glory.
              <br />
              We're choosing option one.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-[#FFC107] text-[#1A1F2C] hover:bg-[#FFC107]/80">
              <Icon name="Compass" className="mr-2" size={18} />
              Explore Island
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1A1F2C]"
            >
              <Icon name="Users" className="mr-2" size={18} />
              Join Community
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="w-full max-w-md rounded-2xl shadow-lg overflow-hidden">
            <img
              src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png"
              alt="MEMELAND Island"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Gentle waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
