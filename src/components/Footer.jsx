import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="bg-dark-blue text-white py-10 px-6 sm:px-8 md:px-15">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Section */}
          <div className="flex-1 mb-8 md:mb-0 md:mr-8">
            <div className="flex items-center mb-4">
              <img src="/assets/img/Mujo Studio.webp" width={100} alt="" />
              {/* Logo and Company Name */}

            </div>
            <p className="max-w-md text-sm mb-4 opacity-80">
              <span className="font-bold">Future in the Digital Solutions</span>
              <br />Kami membangun dan menghadirkan solusi teknologi yang mendorong pertumbuhan, efisiensi, dan keunggulan kompetitif.
            </p>
            {/* LinkedIn Icon */}
            <a href="#" className="inline-block p-1 border border-gray-500 ">
              <i class="ri-linkedin-box-line text-4xl"></i>
            </a>
            
          </div>

          {/* Middle Section - Social Links */}
          <div className="flex-1 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Informasi Kontak</h4>
            <ul className="space-y-2">
            <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">Based in Mataram & Bima</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">info@mojofolks.com</a>
              </li>
              <li>
                <a href="https://wa.me/6281337961020?text=Halloo%20Mojo%20Folks:)" className="text-gray-400 hover:text-gray-300">+62 813-3796-1020</a>
              </li>
              
            </ul>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex-1 relative">
            {/* Background shapes (pseudo-elements in Tailwind) */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-700 opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>

            <nav className="flex flex-col space-y-4 text-left md:text-right z-10 relative ">
              <Link to="/" className="text-xl font-medium hover:text-gray-400" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-xl font-medium hover:text-gray-400" onClick={() => setMenuOpen(false)}>Tentang</Link>
              <Link to="/service" className="text-xl font-medium hover:text-gray-400" onClick={() => setMenuOpen(false)}>Service</Link>
              <Link to="/proyek" className="text-xl font-medium hover:text-gray-400" onClick={() => setMenuOpen(false)}>Project</Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar - Copyright and Links */}
        <hr className="my-8 border-gray-700" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm opacity-70">
          <p className="mb-4 sm:mb-0">
            ©2023 Mojo Folks. All Rights Reserved
          </p>
          
        </div>
      </div>
    </div>
  )
}
