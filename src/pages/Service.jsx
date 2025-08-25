import React from 'react'
import { listClient } from '../data';
import FaqSection from "../components/FaqSection";
import { Services } from "../components/Services";
import { useState } from "react";
import CalltoAction from '../components/CalltoAction';
import { Title, Meta } from "react-head";
import { Test } from "../components/Test";
import Head from 'next/head'



export const Service = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head>
        {/* SEO */}
        <Title>Mojo Folks - Layanan IT & Konsultasi</Title>
        <Meta name="description" content="Jelajahi layanan Mojo Folks: Konsultasikan kebutuhan perusahaan dan solusi digital inovatif untuk mendukung pertumbuhan bisnis Anda." />
        <Meta name="keywords" content="Layanan IT Mataram, IT Consultant Lombok, IT Agency Lombok, Website Development NTB, Jasa IT Mataram, IT Developer Lombok, Mojo Folks Service" />

        {/* Open Graph */}
        <Meta property="og:title" content="Mojo Folks - Layanan IT & Konsultasi" />
        <Meta property="og:description" content="Solusi digital komprehensif dari perencanaan, pengembangan, hingga eksekusi digital untuk bisnis Anda." />
        <Meta property="og:image" content="https://mojofolks.com/assets/img/grow-business.webp" />
        <Meta property="og:url" content="https://mojofolks.com/service" />
        <Meta property="og:type" content="website" />

        {/* Twitter Card */}
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="twitter:title" content="Mojo Folks - Service IT & Digital Solution" />
        <Meta name="twitter:description" content="Temukan layanan website development dan konsultasi IT profesional di Lombok & NTB." />
        <Meta name="twitter:image" content="https://mojofolks.com/assets/img/grow-business.webp" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Website Development & IT Consulting",
            "provider": {
              "@type": "Organization",
              "name": "Mojo Folks",
              "url": "https://mojofolks.com/service",
              "logo": "https://mojofolks.com/assets/img/mujo.webp"
            },
            "areaServed": [
              { "@type": "Place", "name": "Mataram, Lombok" },
              { "@type": "Place", "name": "Bali" },
              { "@type": "Place", "name": "Bima" },
              { "@type": "Place", "name": "Sumbawa" },
              { "@type": "Place", "name": "Dompu" },
              { "@type": "Place", "name": "Indonesia" }
            ],
            "description": "Layanan profesional Mojo Folks: pembuatan website, IT consulting, dan solusi digital inovatif untuk bisnis."
          })
        }}
      />

      <div className="bg-[#070920] text-white py-20 sm:mb-10 md:py-35 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] md:pt-36 md:mb-20">
        <div className="container mx-auto px-6 sm:px-5 md:px-1 lg:px-20 flex flex-col md:flex-row items-center justify-between">

          {/* Left Section - Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <p className="text-sm uppercase tracking-widest text-light-blue mb-4" data-aos="fade-up" data-aos-duration="600" data-aos-delay="600" data-aos-once="true">
              Service
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" data-aos="fade-up" data-aos-duration="700" data-aos-delay="700" data-aos-once="true">
              Kami membawa bisnis Anda ke tingkat yang lebih tinggi
            </h1>
            {/* SVG versi mobile/tab */}
            <div className="flex justify-center items-center mb-6 md:hidden" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800" data-aos-once="true">
              {/** SVG sama persis kayak yang di desktop */}
              <img src="/assets/img/tech-hero-1.webp" alt="Hero Image" className="block md:hidden w-[1200px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s  md:scale-170 pt-5 mb-5 lg:translate-x-30 filter drop-shadow-[0_35px_60px_#4426F0]" />
            </div>
            <p className="text-base md:text-lg mb-8 opacity-80" data-aos="fade-up" data-aos-duration="900" data-aos-delay="900" data-aos-once="true">
              Kami memberikan dukungan penuh mulai dari perencanaan hingga eksekusi, memastikan setiap detail membantu bisnis Anda tumbuh dan bersaing di pasar. Fokus kami adalah memberikan pelayanan yang cepat, tepat, dan sesuai kebutuhan Anda.
            </p>
          </div>
          {/* Right Section - Image/SVG versi desktop */}
          <div className="md:w-1/2 justify-center items-center hidden md:flex">
            <img src="/assets/img/tech-hero-1.webp" alt="Hero Image" className="hidden md:block w-[1200px] md:ml-auto animate__animated animate__fadeInUp animate__delay-1s  md:scale-140 pt-15 lg:translate-x-30 filter drop-shadow-[0_35px_60px_#4426F0]" />
          </div>
        </div>
      </div>


      <div className="w-screen relative left-1/2 mt-[-78px] right-1/2 -ml-[50vw] -mr-[50vw] bg-white backdrop-blur-md py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-30 animate-slide">
            {[...listClient, ...listClient].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-3 flex-shrink-0">
                <img
                  src={client.gambar}
                  alt={client.nama}
                  className="max-w-[120px] max-h-[80px] object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CSS untuk animasi */}
        <style jsx>{`
                  @keyframes slide {
                  0% {
                  transform: translateX(0);   
                  }
                  100% {
                      transform: translateX(-50%);
                  }
                  }
                  .animate-slide {
                  display: flex;
                  animation: slide 25s linear infinite;
                  width: max-content;
                  }`}</style>
      </div>
      <div className="xl:mt-0 md:mt-25 grid grid-cols-1 md:grid-cols-2 gap-0 w-screen -ml-[50vw] -mr-[50vw] relative left-1/2 right-1/2 overflow-hidden">
        <div className="bg-blue-900 h-[400px] md:h-auto overflow-hidden relative" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
          <img
            src="/assets/img/colloboration.webp"
            alt="Abstract technology illustration"
            className="w-full h-full object-cover opacity-80" />
        </div>

        <div className="bg-zinc-900 px-5 py-8 md:p-16 flex flex-col justify-center" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            Mendampingi Setiap Langkah Perjalanan Anda
          </h2>
          <p className="text-white text-lg mb-6 max-w-prose">
            Dengan mengutamakan pelayanan, mengedepankan kreativitas, memperkuat kolaborasi, menghadirkan inovasi, dan menjaga integritas, kami menghadirkan solusi yang tidak hanya efektif, tetapi juga membuka peluang baru untuk pertumbuhan bisnis Anda.
          </p>
        </div>
      </div>

      <Services />
      <Test />
      <FaqSection />
      <div className="xl:mt-0 md:mt-25 grid grid-cols-1 md:grid-cols-2 gap-0 w-screen -ml-[50vw] -mr-[50vw] relative left-1/2 right-1/2 overflow-hidden">
        <div className="bg-blue-900 h-[400px] md:h-auto overflow-hidden relative" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
          <img
            src="/assets/img/programmer.webp"
            alt="Abstract technology illustration"
            className="w-full h-full object-cover opacity-80" />
        </div>

        <div className="bg-white p-8 md:p-16 flex flex-col justify-center" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Profesional, Cepat, dan Akurat.
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-prose">
            Setiap proyek kami jalankan dengan perpaduan antara ketepatan waktu dan standar profesional yang tinggi. Walau dikerjakan cepat, kami tetap memastikan akurasi, kualitas, dan hasil yang dapat diandalkan.
          </p>

          <div className="mt-8 text-left">
            <a
              href="https://wa.me/6281337961020?text=Halloo%20Mojo%20Folks:)"
              className="inline-block px-2 py-2 border bg-blue-600 text-white hover:bg-blue-500 transition-colors">
              Gabung dengan kami!
            </a>
          </div>
        </div>
      </div>


      <CalltoAction />


    </>
  )
}
