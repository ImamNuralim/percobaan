import React from 'react'

export const Footer = () => {
  return (
    <div className="bg-zinc-900 text-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16">
  <div className="max-w-7xl mx-auto px-4 md:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
      {/* Kolom 1: Logo & Deskripsi */}
      <div className="lg:col-span-1">
        <div className="flex items-center mb-4">
          <div className="bg-blue-600 p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm8 9.5L12 16.5 4 11.5v-3L12 6.5l8 5v3zm-8 7.5L4 14.5v-3L12 16.5l8-5v3z" />
            </svg>
          </div>
          <span className="ml-3 text-lg font-bold">BUSINESS CONSULTING</span>
        </div>
        <p className="text-gray-400 text-sm mb-6 max-w-sm">
          Velit facilisi senectus velit elementum. Consequat vel arcu feugiat dui eu tempor pretium at porta. Dui pellentesque sagitt...
        </p>
        <h4 className="font-semibold text-lg mb-2">Subscribe Us</h4>
        <div className="flex space-x-4">
          {/* SVG untuk Facebook */}
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.588-1.333h2.412v-3.419l-3.518-.108c-3.236 0-4.482 1.58-4.482 4.094v2.023z" />
            </svg>
          </a>
          {/* SVG untuk Twitter */}
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.418.724-.66 1.562-.66 2.475 0 1.761.886 3.31 2.244 4.214-.803-.027-1.564-.247-2.228-.616v.061c0 2.728 1.947 4.998 4.512 5.512-.41.111-.849.17-1.296.17-.381 0-.75-.037-1.112-.109.764 2.25 2.985 3.883 5.626 3.922-1.954 1.455-4.42 2.332-7.079 2.332-.457 0-.903-.025-1.343-.075 2.522 1.624 5.488 2.573 8.705 2.573 10.428 0 16.29-8.636 16.039-16.128.83-.584 1.564-1.318 2.109-2.179z" />
            </svg>
          </a>
          {/* SVG untuk Instagram */}
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.772 1.667 4.92 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.148 3.252-1.667-4.772-4.919-4.92-1.266-.058-1.644-.069-4.85-.069-3.204 0-3.584.012-4.849-.069-3.253-.148-4.773-1.667-4.92-4.92-.058-1.265-.068-1.644-.068-4.849 0-3.204.012-3.584.069-4.849.149-3.252 1.668-4.772 4.92-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.058 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.78-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.442.646-1.442 1.442s.646 1.442 1.442 1.442 1.442-.646 1.442-1.442-.646-1.442-1.442-1.442z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Kolom 2: Services */}
      <div className="md:col-start-3 lg:col-start-auto">
        <h4 className="text-xl font-semibold mb-4">Services</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Marketing Strategy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Financial management</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Business Strategy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Sales and Marketing</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Human Resources</a></li>
        </ul>
      </div>

      {/* Kolom 3: Useful links */}
      <div>
        <h4 className="text-xl font-semibold mb-4">Useful links</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-white transition-colors">F.A.Q</a></li>
        </ul>
      </div>
      
      {/* Contact Info */}
      <div>
        <h4 className="text-xl font-semibold mb-4">Contact Details</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">+62 813-3796-1020</a></li>
          <li><a href="#" className="hover:text-white transition-colors">info@imajifolks.com</a></li>
        </ul>
      </div>
    </div>

    {/* Footer Bawah */}
    <div className="mt-16 pt-8 border-t border-gray-700">
      <p className="text-center text-gray-500 text-sm">
        &copy;2023 Mojo Folks. All Rights Reserved.
      </p>
    </div>
  </div>
</div>
  )
}
