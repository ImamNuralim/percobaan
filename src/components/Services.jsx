import React from 'react'

export const Services = () => {
    return (
        <>
            <div className="bg-white py-20 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
                <div className="container mx-auto px-5 sm:px-6 lg:px-15 xl:px-25">
                    {/* Header Section */}
                    <div className=" md:text-left mb-12 md:mb-10 lg:mb-12" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
                        <div className="flex flex-col md:items-start">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Layanan Apa yang Kami  <br className="hidden lg:block" />Tawarkan untuk Bisnis Anda
                            </h2>
                            <p className=" pt-5 md:mt-0 max-w-xl text-lg text-gray-600">
                                Layanan kami hadir untuk mendorong pertumbuhan bisnis Anda, memperluas jangkauan pasar, dan menghadirkan kesan yang lebih profesional di mata pelanggan.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "ri-apps-line",
                                title: "Web & App Development",
                                desc: "Pembuatan company profile, portal internal, hingga sistem untuk manajemen keperluan perusahaan.",
                                color: "text-blue-600",
                                bg: "bg-white",
                                text: "text-gray-900",
                                subtext: "text-gray-600",
                            },
                            {
                                icon: "ri-brush-ai-fill",
                                title: "Branding & Graphic Design",
                                desc: "Pembuatan identitas visual mulai dari logo, guideline brand, hingga materi promosi digital.",
                                color: "text-blue-600",
                                bg: "bg-white",
                                text: "text-gray-900",
                                subtext: "text-gray-600",
                            },
                            {
                                icon: "ri-pencil-ruler-2-fill",
                                title: "Custom Software Solutions",
                                desc: "Pembuatan software khusus sesuai proses bisnis (ERP, CRM, POS, FMS, dll.).",
                                color: "text-blue-600",
                                bg: "bg-white",
                                text: "text-gray-900",
                                subtext: "text-gray-600",
                            },
                            {
                                icon: "ri-seo-fill",
                                title: "Digital Marketing & SEO",
                                desc: "Strategi pemasaran digital, social media management, dan optimasi SEO agar bisnis lebih mudah ditemukan.",
                                color: "text-blue-600",
                                bg: "bg-white",
                                text: "text-gray-900",
                                subtext: "text-gray-600",
                            },
                            {
                                icon: "ri-tools-fill",
                                title: "Maintenance & Support",
                                desc: "Layanan perawatan, pembaruan, dan dukungan teknis setelah proyek selesai.",
                                color: "text-blue-600",
                                bg: "bg-white",
                                text: "text-gray-900",
                                subtext: "text-gray-600",
                            },
                            {
                                icon: "ri-brain-fill",
                                title: "Consulting & Technology Advisory",
                                desc: "Pendampingan untuk memilih teknologi dan strategi digital terbaik untuk bisnis anda. ",
                                color: "text-white",
                                bg: "bg-blue-600",
                                text: "text-white",
                                subtext: "text-white",
                                extra: (
                                    <span>
                                        <a href="#" className="font-bold hover:underline" alt="Konsultasi gratis">
                                            Konsultasi Gratis!
                                        </a>
                                    </span>
                                ),
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`${item.bg} p-6 border border-gray-300 hover:shadow-lg transition-shadow duration-300`}
                                data-aos="fade-up"
                                data-aos-delay={i * 200}
                                data-aos-duration="800"
                                data-aos-once="true"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <i className={`${item.icon} ${item.color} text-4xl`}></i>
                                </div>
                                <h3 className={`text-xl font-bold ${item.text} mb-2`}>{item.title}</h3>
                                <p className={`${item.subtext}`}>
                                    {item.desc} {item.extra}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}
