"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BeakerIcon, Leaf, Globe2, Truck, Eye, Leaf as LeafIcon } from "lucide-react";
import Features from "@/components/Features";
import ProductGrid from "@/components/ProductGrid";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F9FF]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-[#0A2472]">
              Essential Vitamins
            </h1>
            <div className="space-y-4">
              <h2 className="text-xl text-gray-600">Online Medical Supplies</h2>
              <h3 className="text-2xl font-semibold text-[#0A2472]">
                Get Your Vitamins & Minerals
              </h3>
              <Button className="bg-[#0A2472] hover:bg-[#061a5c]">
                EXPLORE
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px]">
              <Image
                src="/hero-vitamin.png"
                alt="Essential Vitamins"
                fill
                className="object-contain"
                loading="eager"
                priority
              />
            </div>
            {/* Feature Icons */}
            <div className="absolute right-0 top-0 space-y-4">
              <Card className="p-4 bg-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <BeakerIcon className="w-6 h-6 text-[#0A2472]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Vitamins</h4>
                    <p className="text-sm text-gray-600">Essential for daily life</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <LeafIcon className="w-6 h-6 text-[#0A2472]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Weight Loss</h4>
                    <p className="text-sm text-gray-600">Natural supplements</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <LeafIcon className="w-6 h-6 text-[#0A2472]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Functional Foods</h4>
                    <p className="text-sm text-gray-600">Plant protein power</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Products Grid */}
      <ProductGrid />

      {/* Blog Section */}
      <BlogSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}