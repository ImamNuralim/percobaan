import React from "react";
import { useParams, Link } from "react-router-dom";
import { listProyek } from "../data";
import { IoArrowBack } from "react-icons/io5";




const DetailProject = () => {
    const { slug } = useParams();
  const proyek = listProyek.find((p) => p.slug.toString() === slug);

  const handleBackToList = () => {
        setSelectedProject(null);

        // Balikin ke posisi scroll sebelum buka detail
        setTimeout(() => {
            window.scrollTo({
                top: lastScrollY,
                behavior: "smooth",
            });
        }, 100);
    };
    
  if (!proyek) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <button onClick={handleBackToList} className="text-blue-600 mt-4 inline-block">
          Back to Projects
        </button>
      </div>
    );
    
  }

  return (
    <div
      className={`bg-white shadow-lg p-8 md:p-12 transition-all duration-500 mt-18 w-screen -ml-[50vw] -mr-[50vw] relative left-1/2 right-1/2 overflow-hidden`}
    >
      {/* Back button */}
      <Link
        to="/project"
        className="mb-8 flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <IoArrowBack />
        <span>Back to projects</span>
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src={proyek.gambar}
            alt={proyek.nama}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {proyek.nama}
          </h1>
          <p className="text-gray-700 mb-6">{proyek.deskripsiDetail}</p>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-800">Waktu Pengerjaan:</h4>
            <p className="text-gray-600">{proyek.waktuPengerjaan}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">Teknologi:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {proyek.tools?.map((tool, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProject