import React from 'react'
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect (() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };  
  }, []);

  return (
    <div className="navbar px-10 py-7 flex items-center justify-between">
      <div className="logo">
        <a href="/"><img src="/assets/Mujo Folks2.png" alt="Logo" className="h-10 w-auto" /></a>
      </div>
      <ul className={`menu flex items-center sm:gap-10 gap-4 fixed md:static left-1/2 -translate-x-1/2 
      md:-translate-0 md:opacity-100 md:top-0 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent z-40 transition-all md:transition-none  ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
        <li>
          <a href="/" className="sm:text-l text-base font-medium">Home</a>
        </li>
        <li>
          <a href="#tentang" className="sm:text-l text-base font-medium">Tentang</a>
        </li>
        <li>
          <a href="#proyek" className="sm:text-l text-base font-medium">Project</a>
        </li>
        <li>
          <a href="#kontak" className="sm:text-l text-base font-medium">Kontak</a>
        </li>
      </ul>

    </div>
  )
}

export default Navbar