import React from 'react'


const CalltoAction = () => {
  return (
    <>
        {/*Kontak*/}
      <div className="kontak -mx-4 lg:py-10 xl:px-15 grid md:grid-cols-2 items-center p-0 xl:gap-0 gap-10 grid-cols-1 ">
        <div className="animate__animated animate__fadeInUp animate__delay-2s mx-10 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.3),transparent),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.3),transparent),radial-gradient(circle_at_bottom,_rgba(234,179,8,0.10),transparent),radial-gradient(circle_at_center,_rgba(255,255,255,0.2),transparent)] before:blur-[100px] before:-z-10" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <div className="flex items-center gap-3 w-fit pt-4">
            <img src="./assets/img/mujo.webp" alt="Hero Image" className="w-25" />
          </div>
          <h1 className="text-5xl/tight font-bold mb-6 text-white">Transformasi Digital Dimulai di Sini</h1>
          <p className="text-base/lose mb-6 opacity-80 text-white">Kami membangun pengalaman digital yang profesional, cepat, dan berkesan untuk mendukung pertumbuhan bisnis Anda.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://wa.me/6281337961020?text=Halloo%20Mojo%20Folks:)" className="bg-blue-600 text-white py-2 px-4 hover:bg-blue-500">Join Now!</a>
          </div>
        </div>
        <div className="kontak py-8 sm:p-10 p-0 mx-10" id="kontak">

          <form action="https://formsubmit.co/belugaelsalamnca@gmail.com" method="POST" className="bg-gray-100/10 p-10 sm:w-fit w-full mx-auto " autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-white">Nama Lengkap</label>
                <input type="text" name="nama" placeholder="Masukan Nama..." className="border border-gray-400 p-2 text-white" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-white">Email</label>
                <input type="email" name="email" placeholder="Masukan Email..." className="border border-gray-400 p-2 text-white" required />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-white">Pesan</label>
                <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Masukan Pesan..." className="border border-gray-400 p-2 text-white" required></textarea>
              </div>
              <div className="text-center bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 w-full cursor-pointer">
                <button type="submit">Kirim Pesan</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/*Kontak*/}
    </>
  )
}

export default CalltoAction