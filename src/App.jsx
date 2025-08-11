import DataImage from "./data";
import { listClient } from './data';
import { listBidangUsaha } from "./data"



function App() {

  return (
    <>
      <div className="hero py-4 xl:px-15 grid md:grid-cols-2 items-center pt-30 xl:gap-0 gap-10 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 w-fit p-1 rounded-md">
            <p className="text-white text-l font-bold">BEST IT SOLUTIONS AGENCY</p>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl/tight font-bold mb-6 text-white">Future in the Digital Solutions</h1>
          <img src="/assets/img/hero home.png" alt="Hero Image" className="block md:hidden w-[1200px] md:ml-auto animate__animated animate__fadeInUp animate__delay-1s  md:scale-170 pt-15 lg:translate-x-30 filter drop-shadow-[0_35px_60px_#4426F0]" />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl/relaxed mb-6 opacity-60 text-white">Kami membangun dan menghadirkan solusi teknologi yang mendorong pertumbuhan, efisiensi, dan keunggulan kompetitif.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://wa.me/6281337961020?text=Halloo%20Mojo%20Folks:)" target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Join Now! <i className="ri-whatsapp-line ri-lg"></i></a>
            <a href="#proyek" className="bg-gray-400/80 text-white py-2 px-4 rounded-md hover:bg-gray-400/100">Lihat Project <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src="/assets/img/hero home.png" alt="Hero Image" className="hidden md:block w-[1200px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s  md:scale-170 pt-15 lg:translate-x-30 filter drop-shadow-[0_35px_60px_#4426F0]" />
      </div>

      {/* Tentang */}
      <div className="xl:mt-56 md:mt-25 grid grid-cols-1 md:grid-cols-2 gap-0 w-screen -ml-[50vw] -mr-[50vw] relative left-1/2 right-1/2 overflow-hidden">
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
          <a href="#" className="flex items-center  font-semibold hover:underline">
            Tentang Kami
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Service */}
        <div className="bg-zinc-900 p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            We Help Businesses Grow Through Innovative Digital Solutions
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-prose">
            Kami membantu bisnis Anda berkembang melalui solusi digital inovatif, mulai dari pembuatan website, aplikasi, hingga strategi pemasaran online yang efektif.
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
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white backdrop-blur-md py-20" id="bidang-usaha">
      <div className="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-8 mb-8 md:mb-16">
      <div class="w-full md:w-1/2">
        <h2 class="text-3xl md:text-5xl font-bold text-zinc-800 leading-tight">
          What sectors of the economy do we serve
        </h2>
        <p class="text-gray-600 text-base pt-3">
                Kami melayani berbagai sektor ekonomi dengan solusi digital yang dirancang untuk mendukung pertumbuhan dan kesuksesan bisnis Anda.
              </p>
      </div>
      
    </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-6 mx-auto">
  {listBidangUsaha.map((bidang, index) => (
    <div
      key={bidang.id}
      className="relative h-32 md:h-40 group overflow-hidden bg-gray-600"
    >
      <img
        src={bidang.gambar}
        alt={bidang.nama}
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-all duration-300"
      />
      <div className="absolute inset-0 flex items-end p-4">
        <div className="text-white font-semibold text-lg">{bidang.nama}</div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>

  <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-zinc-900 py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
    {/* Konten Teks */}
    <div className="md:w-1/2 text-white text-center md:text-left">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
        Progressive solutions for progressive businesses.
      </h2>
      <p className="text-gray-300 text-lg mb-6 md:mb-8 max-w-prose">
         Kami menyediakan solusi inovatif yang dirancang untuk membantu bisnis berkembang dan beradaptasi di era yang terus berubah, sehingga Anda selalu selangkah di depan.
      </p>
      <a href="https://wa.me/6281337961020?text=Halloo%20Mojo%20Folks:)" target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Join Now! <i className="ri-whatsapp-line ri-lg"></i></a>

    </div>

    {/* Gambar */}
    <div className="md:w-1/2 flex justify-center p-4">
      <div className="bg-blue-500 rounded-lg overflow-hidden shadow-lg w-64 h-80 md:w-80 md:h-96">
        <img
          src="/assets/img/person-silhouette.webp"
          alt="Silhouette of a person"
          className="w-full h-full object-cover bg-blue-500"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </div>
    </div>
  </div>
</div>

      

      

      

      

      {/*client*/}
      <div
  className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white backdrop-blur-md py-20"
  id="client"
>
  <div className="max-w-7xl mx-auto px-4">
    <div className="slider-box flex flex-wrap justify-center gap-6">
      {listClient.map((client, index) => (
        <div
          className="flex items-center justify-center p-4 group transition-transform duration-300 hover:scale-105 basis-[calc(100%/6-1rem)] max-w-[calc(100%/6-1rem)]"
          key={client.id}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay={index * 100}
          data-aos-once="true"
        >
          <img
            src={client.gambar}
            alt={client.nama}
            className="max-w-[120px] max-h-[80px] w-full h-full object-contain group-hover:scale-110 transition-all duration-300"
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
