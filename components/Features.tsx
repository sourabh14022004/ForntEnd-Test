"use client";

import { Card } from "@/components/ui/card";
import { BeakerIcon, Leaf, Globe2, Truck, Eye, Recycle } from "lucide-react";

const features = [
  {
    icon: BeakerIcon,
    title: "Clinically Studied",
    description: "All products built on clinical trials and research data",
  },
  {
    icon: Leaf,
    title: "Vegetarian Friendly",
    description: "We stock a wide selection of vegetarian-friendly supplements",
  },
  {
    icon: Globe2,
    title: "Made In India",
    description: "Made local yet meets high standards across the world",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "We deliver to your door with no shipping costs on your orders",
  },
  {
    icon: Eye,
    title: "No Risk",
    description: "We monitor all products are safe and within their expiry date",
  },
  {
    icon: Recycle,
    title: "GMO Free",
    description: "Natural, non-modified products still delivering for those who need it",
  },
];

export default function Features() {
  return (
    <section className="bg-[#1B3B6F] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-transparent border-none p-6">
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-full p-3">
                  <feature.icon className="w-6 h-6 text-[#1B3B6F]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}