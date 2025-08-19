import CalltoAction from "./components/CalltoAction";
import DataImage from "./data";
import { listClient } from './data';
import { listBidangUsaha } from "./data"
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      
      <div className="bg-[#070920] text-white py-20 sm:mb-10 md:py-35 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] md:pt-36 md:mb-20">
        <div className="container mx-auto px-6 sm:px-5 md:px-1 lg:px-20 flex flex-col md:flex-row items-center justify-between">
          <div className="absolute inset-0">
            {/* ... (content for hero section) ... */}
          </div>
          {/* Left Section - Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <p className="text-sm uppercase tracking-widest text-light-blue mb-4">
              Service
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Kami membawa bisnis Anda ke tingkat yang lebih tinggi
            </h1>
            {/* SVG versi mobile/tab */}
            <div className="flex justify-center items-center mb-6 md:hidden">
              {/** SVG sama persis kayak yang di desktop */}
              <img src="/assets/img/globe.webp" alt="Hero Image" className="block md:hidden w-[1200px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s  md:scale-170 pt-5 mb-5 lg:translate-x-30 filter drop-shadow-[0_35px_60px_#4426F0]" />
            </div>
            <p className="text-base md:text-lg mb-8 opacity-80">
              Kami memberikan dukungan penuh mulai dari perencanaan hingga eksekusi, memastikan setiap detail membantu bisnis Anda tumbuh dan bersaing di pasar. Fokus kami adalah memberikan pelayanan yang cepat, tepat, dan sesuai kebutuhan Anda.
            </p>
          </div>
          {/* Right Section - Image/SVG versi desktop */}
          <div className="md:w-1/2 justify-center items-center hidden md:flex">
            <img src="/assets/img/globe.webp" alt="Hero Image" className="hidden md:block w-[540px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s  md:scale-140 pt-2 lg:translate-x-30 filter drop-shadow-[0_35px_60px_#4426F0]" />
          </div>
        </div>
      </div>



      {/* Tentang */}
      <div className="transform md:-translate-y-[15rem] xl:mt-56 md:mt-25 grid grid-cols-1 md:grid-cols-2 gap-0 w-screen -ml-[50vw] -mr-[50vw] relative left-1/2 right-1/2 overflow-hidden">
        <div className="bg-blue-900 h-[400px] md:h-auto overflow-hidden relative">
          <img
            src="/assets/img/Mojo Tentang.webp"
            alt="Abstract technology illustration"
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        <div className="bg-white p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Mojo Folks – Future Tech Insights 2025
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-prose">
            Kami percaya masa depan dibentuk oleh inovasi hari ini. Di <span className="font-bold">Mojo Folks</span> , kami mengulas dan membedah teknologi-teknologi terbaru yang siap mengubah cara kita hidup, bekerja, dan berkreasi. Dari tren digital terkini hingga terobosan masa depan, temukan wawasan yang akan membantu bisnis dan ide Anda berkembang di era yang serba cepat ini.
          </p>
          <a href="#" className="flex items-center font-semibold hover:underline">
            Tentang Kami
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Tentang - Service */}

        <div className="bg-zinc-900 p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            We Help Businesses Grow Through Innovative Digital Solutions
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-prose">
            Membantu bisnis Anda berkembang melalui solusi digital inovatif, mulai dari pembuatan website, aplikasi, hingga strategi pemasaran online yang efektif.
          </p>
          <a href="#" className="flex items-center text-white font-semibold hover:underline">
            More Sevice
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <div className="bg-blue-500 h-[400px] md:h-auto overflow-hidden relative">
          <img
            src="/assets/img/section-tentang.webp"
            alt="Two people wearing safety glasses working"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/** Bidang Usaha */}
      <div className="transform md:-translate-y-[15rem] w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#1C192E] backdrop-blur-md py-20" id="bidang-usaha">
        {/* Glow background */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-violet-500 to-green-800 blur-[150px] opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 blur-[150px] opacity-30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:p-4">
          <div class="flex flex-col lg:flex-row gap-8 mb-8 lg:mb-16">
            <div class="w-full md:w-2/3">
              <h2 class="text-3xl md:text-5xl font-bold text-white leading-tight">
                What sectors of the economy do we serve
              </h2>
              <p class="text-white text-base pt-3">
                Melayani berbagai sektor ekonomi dengan solusi digital yang dirancang untuk mendukung pertumbuhan dan kesuksesan bisnis.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-6 mx-auto">
            {listBidangUsaha.map((bidang, index) => (
              <div
                key={bidang.id}
                className="relative h-32 md:h-40 group overflow-hidden bg-gray-600">
                <img
                  src={bidang.gambar}
                  alt={bidang.nama}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-all duration-300" />
                <div className="absolute inset-0 flex items-end p-4">
                  <div className="text-white font-semibold text-lg">{bidang.nama}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="xl:mt-0 md:mt-25 grid grid-cols-1 md:grid-cols-2 gap-0 w-screen -ml-[50vw] -mr-[50vw] relative left-1/2 right-1/2 overflow-hidden">
        <div className="bg-blue-900 h-[400px] md:h-auto overflow-hidden relative">
          <img
            src="/assets/img/grow-business.webp"
            alt="Abstract technology illustration"
            className="w-full h-full object-cover opacity-80" />
        </div>

        <div className="bg-white p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Progressive solutions for progressive businesses.
          </h2>
          <p className="text-gray-600 text-lg mb-6 max-w-prose">
            Menyediakan solusi inovatif yang dirancang untuk membantu bisnis berkembang dan beradaptasi di era yang terus berubah, sehingga Anda selalu selangkah di depan.
          </p>
          <a href="#" className="flex items-center  font-semibold hover:underline">
            Tentang Kami
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

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

export default App
