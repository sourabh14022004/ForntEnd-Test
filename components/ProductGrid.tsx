"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const products = [
  {
    title: "Vitamin C",
    description: "Vitamin C and ascorbic acid",
    image: "/vitamin-c.jpg",
  },
  {
    title: "Vitamin B3",
    description: "Niacin for healthy gut and skin",
    image: "/vitamin-b3.jpg",
  },
  {
    title: "Magnesium",
    description: "Boost energy and support muscle function",
    image: "/magnesium.jpg",
  },
  {
    title: "Hyaluronic Acid",
    description: "For smooth, supple and soft skin!",
    image: "/hyaluronic.jpg",
  },
  {
    title: "Lactobacillus",
    description: "Invigorate your gut microbiome",
    image: "/lactobacillus.jpg",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-wider text-gray-600">INGREDIENTS</h2>
          <h3 className="text-3xl font-bold text-[#0A2472]">Better Ingredients</h3>
          <p className="text-gray-600 mt-2">
            Only the best when you choose products offered in our platform. High-quality ingredients for a better you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#0A2472]">{product.title}</h4>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <Button variant="link" className="mt-4 text-[#0A2472] p-0">
                  SEE MORE
                </Button>
              </div>
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}