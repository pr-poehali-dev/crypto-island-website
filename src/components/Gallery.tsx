import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Gallery = () => {
  const images = [
    {
      id: 1,
      url: "https://cdn.poehali.dev/files/c1d58ffa-3ea9-43bc-b43a-e5803dc2c261.jpg",
      title: "MEMELAND Tropical View",
      description: "View of our future island with pristine white beaches",
    },
    {
      id: 2,
      url: "https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png",
      title: "Island Concept Art",
      description:
        "Artist's rendition of the future MEMELAND island development",
    },
    {
      id: 3,
      url: "https://cdn.poehali.dev/files/6427af35-b9a0-4461-93d1-836a4ef4f6ee.jpeg",
      title: "Local Resident",
      description: "Our friendly neighbors are always welcoming to visitors",
    },
    {
      id: 4,
      url: "https://cdn.poehali.dev/files/c1d58ffa-3ea9-43bc-b43a-e5803dc2c261.jpg",
      title: "Paradise Beaches",
      description:
        "Crystal clear waters and pristine beaches await MEMELAND citizens",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-[#33C3F0]/20 text-[#33C3F0] rounded-full text-sm font-medium mb-4">
            GALLERY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            A Look at <span className="text-[#FFC107]">MEMELAND</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Stunning views of our future island and its inhabitants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden group hover:shadow-lg transition-all border-2 border-gray-100"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button className="bg-[#1A1F2C] hover:bg-[#1A1F2C]/90">
            <Icon name="Image" className="mr-2" size={16} />
            See More Photos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
