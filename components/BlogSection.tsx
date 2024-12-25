"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

const blogPosts = [
  {
    date: "20 APR",
    title: "The Covid-19 Timeline in 2023 Is Back",
    image: "/blog-1.jpg",
  },
  {
    date: "20 APR",
    title: "The Covid-19 Timeline in 2023 Is Back",
    image: "/blog-2.jpg",
  },
  {
    date: "20 APR",
    title: "The Covid-19 Timeline in 2023 Is Back",
    image: "/blog-3.jpg",
  },
  {
    date: "17 MAR",
    title: "Yes, hand/arm size limits jumper temperature",
    image: "/blog-4.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-[#0A2472] mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.date}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#0A2472]">{post.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}