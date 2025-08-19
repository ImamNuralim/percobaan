import React from 'react'

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
            <a href="#" className="inline-block p-2 border border-gray-500 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.73V1.73C24 .77 23.2 0 22.23 0zM7.09 20.46H3.66V9.01h3.43v11.45zM5.38 7.55c-1.12 0-2.03-.92-2.03-2.05s.91-2.05 2.03-2.05c1.13 0 2.04.92 2.04 2.05s-.91 2.05-2.04 2.05zM20.46 20.46h-3.43v-5.61c0-1.34-.48-2.25-1.68-2.25-1.24 0-1.98.84-1.98 2.25v5.61h-3.43V9.01h3.43v1.54c.45-.69 1.25-1.68 3.09-1.68 3.32 0 3.9 2.18 3.9 6.27v5.32z" />
              </svg>
            </a>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex-1 relative">
            {/* Background shapes (pseudo-elements in Tailwind) */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-700 opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>

            <nav className="flex flex-col space-y-4 text-left md:text-right z-10 relative ">
              <a href="/" className="text-xl font-medium hover:text-gray-400">
                Home
              </a>
              <a href="/about" className="text-xl font-medium hover:text-gray-400">
                Tentang
              </a>
              <a href="/service" className="text-xl font-medium hover:text-gray-400">
                Service
              </a>
              <a href="#" className="text-xl font-medium hover:text-gray-400">
                Project
              </a>
              <a href="#" className="text-xl font-medium hover:text-gray-400">
                Contact
              </a>
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
