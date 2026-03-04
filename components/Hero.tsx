"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div
          className={`flex flex-col lg:flex-row items-center justify-center gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Professional Photo */}
          <div className="flex-shrink-0 order-2 lg:order-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-primary-200 ring-offset-4 ring-offset-white">
              <Image
                src="/images/miracle-photo.png"
                alt="Miracle Ezeh - Business Manager & Administrator"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left order-1 lg:order-2 flex-1">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6">
              <span className="block">Miracle</span>
              <span className="block text-primary-600">Ezeh</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-4 font-medium">
              Business Manager & Administrator
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0">
              Organized and proactive professional with experience in administrative, operational, and strategic support.
              Skilled in recruitment, document management, marketing, and administration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Link
                href="#contact"
                className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </Link>
              <Link
                href="#about"
                className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce flex justify-center lg:justify-start">
              <Link href="#about" className="text-gray-400 hover:text-primary-600 transition-colors">
                <svg
                  className="w-6 h-6 mx-auto"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
