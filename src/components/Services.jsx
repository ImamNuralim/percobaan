import React from 'react'

export const Services = () => {
    return (
        <>
            <div className="bg-white py-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-15 xl:px-25">
                    {/* Header Section */}
                    <div className=" md:text-left mb-12 md:mb-10 lg:mb-12">
                        <div className="flex flex-col md:items-start">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                What services do we offer <br className="hidden lg:block" />
                                for your business
                            </h2>
                            <p className=" pt-5 md:mt-0 max-w-xl text-lg text-gray-600">
                                Layanan kami hadir untuk mendorong pertumbuhan bisnis Anda, memperluas jangkauan pasar, dan menghadirkan kesan yang lebih profesional di mata pelanggan.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-4 border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <i className="ri-apps-line text-blue-600 text-4xl"></i>
                                <button className="text-blue-600 font-semibold text-sm flex items-center">
                                </button>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Web & App Development</h3>
                            <p className="text-gray-600">
                                Pembuatan company profile, portal internal, hingga sitem untuk manajemen keperluan perusahaan.
                            </p>
                        </div>
                        
                        <div className="bg-white p-4 border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-4">
                                <i className="ri-brush-ai-fill text-blue-600 text-4xl"></i>
                                <button className="text-blue-600 font-semibold text-sm flex items-center">
                                </button>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Branding & Graphic Design</h3>
                            <p className="text-gray-600">
                                Pembuatan identitas visual mulai dari logo, guideline brand, hingga materi promosi digital.
                            </p>
                        </div>

                        <div className="bg-white p-4 border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center justify-between mb-4">
                                <i className="ri-pencil-ruler-2-fill text-blue-600 text-4xl"></i>
                                <button className="text-blue-600 font-semibold text-sm flex items-center">
                                </button>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Software Solutions</h3>
                            <p className="text-gray-600">
                                Pembuatan software khusus sesuai proses bisnis (ERP, CRM, POS, FMS, dll.).
                            </p>
                        </div>

                        <div className="bg-white p-4 border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center justify-between mb-4">
                                    <i className="ri-seo-fill text-blue-600 text-4xl"></i>
                                    <button className="text-blue-600 font-semibold text-sm flex items-center">
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Marketing & SEO</h3>
                            <p className="text-gray-600">
                                Strategi pemasaran digital, social media management, dan optimasi SEO agar bisnis lebih mudah ditemukan.
                            </p>
                        </div>

                        <div className="bg-white p-4 border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center justify-between mb-4">
                                    <i className="ri-tools-fill text-blue-600 text-4xl"></i>
                                    <button className="text-blue-600 font-semibold text-sm flex items-center">
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Maintenance & Support</h3>
                            <p className="text-gray-600">
                                Layanan perawatan, pembaruan, dan dukungan teknis setelah proyek selesai.
                            </p>
                        </div>

                        <div className="bg-blue-600 p-6 border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center justify-between mb-4">
                                    <i className="ri-brain-fill text-white text-4xl"></i>
                                    <button className="text-white font-semibold text-sm flex items-center">
                                    </button>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Consulting & Technology Advisory</h3>
                            <p className="text-white">
                                Pendampingan untuk memilih teknologi dan strategi digital terbaik untuk bisnis anda. <span><a href="" className="font-bold hover:underline" alt="Konsultasi gratis">Konsultasi Gratis!</a>  </span> 
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
