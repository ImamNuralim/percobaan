import React from 'react'
import { listClient } from '../data';
import { } from "module";
import CalltoAction from '../components/CalltoAction';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { Title, Meta } from "react-head";


const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>

      {/* SEO */}
      <Title>Mojo Folks - Tentang Kami IT Agency</Title>
      <Meta name="description" content="Kenali Mojo Folks, IT Agency dari Mataram - Bima yang berfokus pada solusi digital kreatif, konsultasi IT, dan pengembangan sistem digital profesional." />
      <Meta name="keywords" content="Tentang Mojo Folks, IT Agency Lombok, Konsultan IT Mataram, Website Developer NTB, Digital Agency NTB,  Website Developer Mataram, Jasa Pembuatan Website Mataram dan Bima" />

      {/* Open Graph */}
      <Meta property="og:title" content="Mojo Folks - Tentang Kami" />
      <Meta property="og:description" content="Mojo Folks, IT Agency di Lombok, siap mendukung bisnis dengan solusi digital dan konsultasi IT yang inovatif." />
      <Meta property="og:image" content="https://mojofolks.com/assets/img/kreatifteam.webp" />
      <Meta property="og:url" content="https://mojofolks.com/about" />
      <Meta property="og:type" content="website" />

      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Mojo Folks - Tentang Kami" />
      <Meta name="twitter:description" content="Profesional IT Agency dari Lombok yang berfokus pada inovasi digital dan layanan website." />
      <Meta name="twitter:image" content="https://mojofolks.com/assets/img/kreatifteam.webp" />

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Mojo Folks",
      "url": "https://mojofolks.com/about",
      "logo": "https://mojofolks.com/assets/img/mujo.webp",
      "description": "Mojo Folks adalah IT Agency dari Lombok yang berfokus pada solusi digital kreatif, konsultasi IT, dan pengembangan website profesional.",
      "foundingDate": "2023",
      "founder": {
        "@type": "Person",
        "name": "Tim Mojo Folks"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mataram",
        "addressRegion": "Nusa Tenggara Barat",
        "addressCountry": "ID"
      },
      "sameAs": [
        "https://facebook.com/mojofolks",
        "https://instagram.com/mojofolks",
        "https://linkedin.com/company/mojofolks"
      ]
    })
  }}
/>



      <div className="bg-[#070920] text-white py-20 sm:mb-10 md:py-89 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] md:pt-36 md:mb-20">
        <div className="container mx-auto px-6 sm:px-5 md:px-1 lg:px-20 flex flex-col md:flex-row items-center justify-between">
          <div className="absolute inset-0">
          </div>
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
            <p className="text-sm uppercase tracking-widest text-light-blue mb-4">
              ABOUT US
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Mewujudkan Masa Depan Bisnis Anda dengan Sentuhan Inovasi Digital
            </h1>
            <div className="flex justify-center items-center mb-6 md:hidden">
              <img src="/assets/img/hero-section 3.webp" alt="Hero Image" className="block md:hidden w-[1200px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s  md:scale-170 pt-5 mb-5 lg:translate-x-30 filter drop-shadow-[0_35px_60px_#4426F0]" />
            </div>
            <p className="text-base md:text-lg mb-8 opacity-80">
              Kami menghadirkan solusi digital untuk meningkatkan efisiensi, mempercepat pertumbuhan, dan memberi Anda keunggulan di era kompetitif.
            </p>
          </div>
          <div className="md:w-1/2 justify-center items-center hidden md:flex">
            <img src="/assets/img/hero-section 3.webp" alt="Hero Image" className="hidden md:block w-[1240px] md:ml-auto animate__animated animate__fadeInUp animate__delay-1s  md:scale-140 pt-2 lg:translate-x-30 filter drop-shadow-[0_35px_60px_#4426F0]" />
          </div>
        </div>
      </div>

      {/*Tentang Mojo*/}
      <div className="transform md:-translate-y-[15rem] xl:mt-0 md:mt-25 grid grid-cols-1 md:grid-cols-2 gap-0 w-screen -ml-[50vw] -mr-[50vw] relative left-1/2 right-1/2 overflow-hidden">
        <div className="bg-blue-900 h-[400px] md:h-auto overflow-hidden relative" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
          <img
            src="/assets/img/teamwork.webp"
            alt="Abstract technology illustration"
            className="w-full h-full object-cover opacity-80" />
        </div>

        <div className="bg-white p-8 md:p-16 flex flex-col justify-center" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Mojo Folks
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-prose">
            Mojo Folks dibentuk pada tahun 2023 sebagai komunitas kreatif dari Bima dan Mataram. Berawal dari sekumpulan desainer, developer, dan pegiat digital yang sering bertukar ide. Dengan semangat kolaborasi dan rasa ingin tahu yang tinggi, Mojo Folks berkembang menjadi tim yang berambisi menciptakan solusi digital yang relevan, inovatif, dan berdampak positif. Kami percaya bahwa teknologi adalah alat untuk memberdayakan ide, menghubungkan manusia, dan membangun masa depan yang lebih baik.
          </p>
        </div>
      </div>

      {/* Our Team */}

      <div className="bg-zinc-900 -mt-50 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-4 sm:px-12 lg:px-24 py-15">
        <div className="container mx-auto px-6 sm:px-5 md:px-15">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="sm:w-2/3 mb-6 sm:mb-0">
                <div className="flex items-baseline space-x-2 mb-2">
                  <h2 className="text-3xl font-bold text-white">
                    Tim di Balik Perjalanan Kami
                  </h2>
                </div>
                <p className="text-base text-gray-300 max-w-2xl">
                  Kami adalah tim kreatif dan berdedikasi yang bekerja sama untuk
                  mengubah ide menjadi solusi nyata. Dengan keahlian dan semangat
                  kolaborasi, kami memastikan setiap proyek mencapai hasil terbaik.
                </p>
              </div>
            </div>

            {/* Grid jadi slider di mobile */}
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible">
              {[
                {
                  src: "/assets/img/imam.webp",
                  name: "Imam Nuralim",
                  role: "Fullstack Developer",
                  dad: "700",
                },
                {
                  src: "/assets/img/anhar.webp",
                  name: "Anhar Aldervaro",
                  role: "Backend Developer",
                  dad: "900",
                },
                {
                  src: "/assets/img/mark.webp",
                  name: "Marvel Shivan Mark Gesang",
                  role: "Account Executive",
                  dad: "1100",
                },
              ].map((person, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full snap-start flex flex-col sm:w-auto cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={person.dad}
                  data-aos-duration="1000"
                  data-aos-once="true"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <img
                    src={person.src}
                    alt={person.name}
                    className={`w-full aspect-square object-cover mb-4 transition-all duration-500 
                    ${activeIndex === index
                        ? "grayscale-0"
                        : "grayscale hover:grayscale-0"
                      }`}
                  />
                  <h3 className="text-xl font-bold text-white">{person.name}</h3>
                  <p className="text-gray-300">{person.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}

      <div className="xl:mt-0 md:mt-25 grid grid-cols-1 md:grid-cols-2 gap-0 w-screen -ml-[50vw] -mr-[50vw] relative left-1/2 right-1/2 overflow-hidden">
        <div className="bg-blue-900 h-[400px] md:h-auto overflow-hidden relative" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
          <img
            src="/assets/img/kreatifteam.webp"
            alt="Abstract technology illustration"
            className="w-full h-full object-cover opacity-80" />
        </div>

        <div className="bg-white p-8 md:p-16 flex flex-col justify-center" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Fondasi Kreatif untuk <br />Masa Depan
          </h2>
          <p className="text-gray-600 text-lg pt-5">
            Sejak awal, kami percaya bahwa kesuksesan tidak hanya diukur dari hasil akhir, tapi juga dari prinsip yang kami pegang.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5">
            <div className="flex items-center space-x-3">
              <i className="ri-checkbox-blank-circle-fill text-[7px]"></i>
              <span className="font-medium text-gray-700">Pelayanan</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-checkbox-blank-circle-fill text-[7px]"></i>
              <span className="font-medium text-gray-700">Kreativitas</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-checkbox-blank-circle-fill text-[7px]"></i>
              <span className="font-medium text-gray-700">Kolaborasi</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-checkbox-blank-circle-fill text-[7px]"></i>
              <span className="font-medium text-gray-700">Inovasi</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="ri-checkbox-blank-circle-fill text-[7px]"></i>
              <span className="font-medium text-gray-700">Integritas</span>
            </div>
          </div>

          <div className="mt-8 text-left">
            <Link to="/service" className="inline-block px-2 py-2 border bg-blue-600 text-white hover:bg-blue-500 transition-colors">
              More Service
            </Link>
          </div>
        </div>
      </div>
      {/* Tools */}
      {/* <div className="tools mt-32 xl:px-15" id="tools">
        <h1 className="text-3xl/snug font-bold mb-4 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang kami pakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/lose mb-10 opacity-50 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" >Berikut adalah beberapa tools yang kami gunakan dalam setiap proyek:</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 border border-gray-400 hover:bg-gray-200/70 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-700 p-1 group-hover:bg-zinc-300" />
              <div>
                <h4 className="text-bold text-white">{tool.nama}</h4>
                <p className="text-white">{tool.ket}</p>
              </div>
            </div>
          ))}

        </div>
      </div> */}

      {/*Proyek*/}
      {/* <div className="proyek mt-32 xl:px-15 mb-15" id="proyek">
        <h1 className="text-3xl/snug font-bold mb-4 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek Kami</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/lose mb-10 opacity-50 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut adalah beberapa proyek yang telah kami selesaikan:</p>
        <div className="proyek-box grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6 text-white">
          {listProyek.map((proyek) => (
            <div className="bg-zinc-700 p-4 hover:bg-zinc-00" key={proyek.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt={proyek.nama} className="w-full h-auto mb-4" />
              <h3 className="text-xl/tight font-bold mb-2">{proyek.nama}</h3>
              <p className="text-base/lose mb-2">{proyek.desk}</p>
              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, index) => (
                  <span key={index} className="bg-zinc-500/50 text-white px-2 py-1 text-sm">{tool}</span>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href="" className="bg-gradient-to-r from-[#4426F0] to-[#7D54F7] p-3 block border-zinc-600 hover:bg-violet-600">Detail Project</a>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/*Proyek*/}

      <CalltoAction />

      {/*client*/}
      <div
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-zinc-200 backdrop-blur-md py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center mb-5 font-semibold">Our happy client:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {listClient.map((client, index) => (
              <div
                className="flex items-center justify-center p-4 group transition-transform duration-300 hover:scale-105"
                key={client.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
                data-aos-once="true"
              >
                <img
                  src={client.gambar}
                  alt={client.nama}
                  className="max-w-[120px] max-h-[80px] object-contain group-hover:scale-110 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
  )
}

export default About;