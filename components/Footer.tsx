"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B3B6F] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-300">Phone Number</p>
              <p>+971 3118 1843</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-300">Email Address</p>
              <p>ElbritCorp@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6" />
            <div>
              <p className="text-sm text-gray-300">Office Location</p>
              <p>Ambassador Street, Zone 61,</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Image
              src="/logo.png"
              alt="Elbrit Logo"
              width={150}
              height={50}
              className="mb-4 md:mb-0"
            />
            <p className="text-sm text-gray-300 text-center md:text-left">
              Your health, physical and emotional well-being is important to us. We are driven by your side and have made it even easier for you to find the necessary vitamins.
            </p>
          </div>
          <p className="text-sm text-gray-400 text-center mt-8">
            © Elbrit Life Sciences Private Limited, CBD, IBC-19 Block, Mumbai 400051
          </p>
        </div>
      </div>
    </footer>
  );
}