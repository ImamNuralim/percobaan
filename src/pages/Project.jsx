import React, { useState, useRef } from "react";
import { listProyek } from '../data';
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import CalltoAction from "../components/CalltoAction";
import "aos/dist/aos.css";



const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [visibleProjectsCount, setVisibleProjectsCount] = useState(5);
    const [lastScrollY, setLastScrollY] = useState(0);

    const projectsSectionRef = useRef(null);

    const handleViewProject = (project) => {
        // Simpan posisi scroll sebelum masuk detail
        setLastScrollY(window.scrollY);

        // Set project yang dipilih
        setSelectedProject(project);

        // Scroll otomatis ke atas biar tampilan detail mulai dari atas
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


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

    const handleLoadMore = () => {
        // Menambah 5 proyek lagi, tetapi tidak melebihi total jumlah proyek
        setVisibleProjectsCount(prevCount => Math.min(prevCount + 5, listProyek.length));
    };

    const isLoadMoreVisible = visibleProjectsCount < listProyek.length;

    return (
        <>

            {!selectedProject && (
                <>


                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "CollectionPage",
                                "name": "Project & Portofolio Mojo Folks",
                                "url": "https://mojofolks.com/project",
                                "description": "Kumpulan project IT dan website yang telah dikerjakan Mojo Folks untuk berbagai klien dari berbagai bidang industri.",
                                "hasPart": [
                                    {
                                        "@type": "CreativeWork",
                                        "name": "Landing Page PT GCI",
                                        "description": "Pembuatan Landing Page PT Geomineup Consulting Independent",
                                        "url": "https://mojofolks.com/project"
                                    },
                                    {
                                        "@type": "CreativeWork",
                                        "name": "Website Mojo Folks",
                                        "description": "Pembuatan website resmi untuk Mojo Folks.",
                                        "url": "https://mojofolks.com/project"
                                    }
                                ],
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Mojo Folks",
                                    "logo": "https://mojofolks.com/assets/img/mujo.webp"
                                }
                            })
                        }}
                    />

                    <div className="bg-[#0d082d] text-white py-20 sm:pt- sm:mb-2 md:py-35 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] md:pt-36 md:mb-20">
                        <div className="container mx-auto px-6 sm:px-5 md:px-1 lg:px-20 flex flex-col md:flex-row items-center justify-between">
                            <div className="absolute inset-0">
                                {/* ... (content for hero section) ... */}
                            </div>
                            {/* Left Section - Text Content */}
                            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12 " data-aos="fade-up"
                                data-aos-duration="1000">
                                <p className="text-sm uppercase tracking-widest text-light-blue mb-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-once="true">
                                    Our Project
                                </p>
                                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" data-aos="fade-up" data-aos-duration="800" data-aos-delay="700" data-aos-once="true">
                                    Menampilkan Karya Terbaik Kami
                                </h1>
                                {/* SVG versi mobile/tab */}
                                <div className="flex justify-center items-center mb-6 md:hidden" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800" data-aos-once="true">
                                    {/** SVG sama persis kayak yang di desktop */}
                                    <img src="/assets/img/tech-hero-2.webp" alt="Hero Image" className="block md:hidden w-[1200px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s  md:scale-170 pt-15 lg:translate-x-30 filter drop-shadow-[0_35px_60px_#4426F0]" />
                                </div>
                                <p className="text-base md:text-lg mb-8 opacity-80" data-aos="fade-up" data-aos-duration="800" data-aos-delay="900" data-aos-once="true">
                                    Setiap project adalah bukti nyata komitmen kami dalam menghadirkan solusi digital yang kreatif, profesional, dan berdampak bagi klien.
                                </p>
                            </div>
                            {/* Right Section - Image/SVG versi desktop */}
                            <div className="md:w-1/2 justify-center items-center hidden md:flex">
                                <img src="/assets/img/tech-hero-2.webp" alt="Hero Image" className="hidden md:block w-[1200px] md:ml-auto animate__animated animate__fadeInUp animate__delay-1s  md:scale-170 pt-15 lg:translate-x-30 filter drop-shadow-[0_35px_60px_#4426F0]" />
                            </div>
                        </div>
                    </div>

                    {/* Menggunakan ref pada div proyek */}
                    <div ref={projectsSectionRef} className="bg-gray-100 mt-[-78px] py-16 px-4 sm:px-8 lg:px-12 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                        {/* Tampilan Daftar Proyek */}
                        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800" data-aos-once="true">
                            <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Projects</h2>
                            <p className="text-lg text-gray-600">Jelajahi Beberapa Karya Kami</p>
                        </div>
                        {/* Grid Proyek */}
                        <div className={`grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}>
                            {/* Menggunakan slice untuk membatasi jumlah proyek yang ditampilkan */}
                            {listProyek.slice(0, visibleProjectsCount).map((proyek) => (
                                <div
                                    key={proyek.id}
                                    className="bg-white shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col" data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay={proyek.dad}   // delay tiap card biar naik satu-satu
                                    data-aos-once="true"
                                >
                                    <div className="relative">
                                        <img src={proyek.gambar} alt={proyek.nama} className="w-full h-48 object-cover " />
                                        <div className="absolute inset-0 bg-opacity-30"></div>
                                    </div>
                                    <div className="p-4 flex-grow flex flex-col">
                                        <h3 className="text-md font-semibold text-gray-900 mb-2">{proyek.nama}</h3>
                                        <p className="text-sm text-gray-600 mb-4 flex-grow">{proyek.deskripsiSingkat}</p>
                                        <button
                                            onClick={() => handleViewProject(proyek)}
                                            className="mt-auto px-6 py-3 bg-gray-900 text-white flex items-center justify-center space-x-2 hover:bg-gray-700 transition-colors"
                                        >
                                            <span>View project</span>
                                            <IoArrowForward />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Tombol "Load More" */}
                        {isLoadMoreVisible && (
                            <div className="text-center mt-12">
                                <button
                                    onClick={handleLoadMore}
                                    className=" text-gray-900 font-semibold py-3 px-8  transition-all duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800" data-aos-once="true"
                                >
                                    Load More Projects <i className="ri-restart-line"></i>
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="xl:mt-0 md:mt-25 grid grid-cols-1 md:grid-cols-2 gap-0 w-screen -ml-[50vw] -mr-[50vw] relative left-1/2 right-1/2 overflow-hidden">
                        <div className="bg-blue-900 h-[400px] md:h-auto overflow-hidden relative" data-aos="fade-right" data-aos-duration="800" data-aos-delay="800" data-aos-once="true">
                            <img
                                src="/assets/img/software-development-team.webp"
                                alt="Abstract technology illustration"
                                className="w-full h-full object-cover opacity-80" />
                        </div>
                        <div className="bg-white p-8 md:p-16 flex flex-col justify-center" data-aos="fade-left" data-aos-duration="800" data-aos-delay="800" data-aos-once="true">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                                Setiap Kolaborasi Membawa Perubahan
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 max-w-prose">
                                Kami percaya, melalui kerja sama yang solid, ide-ide besar bisa diwujudkan menjadi solusi nyata yang mendorong perkembangan bisnis.
                            </p>
                        </div>
                    </div>
                    <CalltoAction />
                </>
            )}

            {/* Tampilan Detail Proyek - Hanya muncul jika ada proyek yang dipilih */}
            {selectedProject && (
                <div
                    className={`bg-white shadow-lg p-8 md:p-12 transition-all duration-500 mt-18 w-screen -ml-[50vw] -mr-[50vw] relative left-1/2 right-1/2 overflow-hidden`}
                >
                    <button
                        onClick={handleBackToList}
                        className="mb-8 flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <IoArrowBack />
                        <span>Back to projects</span>
                    </button>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2">
                            <img
                                src={selectedProject.gambar}
                                alt={selectedProject.nama}
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.nama}</h1>
                            <p className="text-gray-700 mb-6">{selectedProject.deskripsiDetail}</p>

                            <div className="mb-4">
                                <h4 className="font-semibold text-gray-800">Waktu Pengerjaan:</h4>
                                <p className="text-gray-600">{selectedProject.waktuPengerjaan}</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-800">Teknologi:</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {selectedProject.tools.map((tool, index) => (
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
            )}
        </>
    );
}

export default Project;