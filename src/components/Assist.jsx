import React from 'react'
import { useState } from "react";

const Assist = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleBox = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const steps = [
        {
            id: "01", title: "Discover", color: "bg-blue-600",
            desc: "Kami memulai dengan memahami kebutuhan, tantangan, dan tujuan bisnis Anda untuk menemukan solusi yang paling tepat."
        },
        {
            id: "02", title: "Develop", color: "bg-gray-800",
            desc: "Kami mengembangkan solusi digital yang sesuai dengan kebutuhan bisnis Anda dengan teknologi terbaru."
        },
        {
            id: "03", title: "Drive", color: "bg-gray-800",
            desc: "Kami mendorong implementasi agar berjalan lancar dan memberi dampak signifikan."
        },
        {
            id: "04", title: "Document", color: "bg-gray-800",
            desc: "Setiap proses dicatat dan dievaluasi secara sistematis untuk memastikan transparansi serta kemudahan tindak lanjut."
        },
        {
            id: "05", title: "Deploy", color: "bg-gray-800",
            desc: "Kami melakukan deployment dengan aman dan terstruktur agar sistem dapat langsung digunakan."
        },
        {
            id: "06", title: "Results", color: "bg-gray-800",
            desc: "Kami memastikan hasil sesuai ekspektasi dengan evaluasi serta perbaikan berkelanjutan."
        }
    ];



    return (
        <>


            {/* Structured Data (JSON-LD) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        "name": "Langkah Kami dalam Membantu Bisnis Anda",
                        "description": "Pendekatan terstruktur mulai dari Discover hingga Results untuk membantu bisnis berkembang.",
                        "step": steps.map((step, i) => ({
                            "@type": "HowToStep",
                            "position": i + 1,
                            "name": step.title,
                            "text": step.desc
                        }))
                    })
                }}
            />

            <div className="bg-gray-900 text-white py-20 px-5 w-screen -ml-[50vw] -mr-[50vw] relative left-1/2 right-1/2 overflow-hidden ">
                <div className="container mx-auto max-w-7xl px-4">
                    {/* Judu    l Bagian */}
                    <div className="mb-12">
                        <h2
                            className="text-4xl md:text-5xl font-bold w-200
              [@media(min-width:400px)_and_(max-width:539px)]:text-[28px]"
                        > Langkah Kami dalam Membantu Bisnis Anda

                        </h2>
                        <p className="pt-5 w-200">Kami mendampingi setiap langkah bisnis Anda dengan pendekatan yang terstruktur, mulai dari perencanaan hingga implementasi, agar solusi yang dihadirkan benar-benar sesuai kebutuhan.</p>
                    </div>

                    {/* Grid Proses */}
                    <div className="grid grid-cols-1 [@media(min-width:400px)]:grid-cols-2 [@media(min-width:759px)]:grid-cols-3 gap-4 md:gap-6">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`relative col-span-1
    ${index === 1 ? "[@media(min-width:400px)]:mt-20 [@media(min-width:759px)]:mt-15 md:mt-24" : ""}
    ${index === 2 ? "[@media(min-width:400px)]:mt-[-4.5rem] [@media(min-width:759px)]:mt-30 md:mt-48" : ""}
    ${index === 3 ? "[@media(min-width:400px)]:mt-2 [@media(min-width:759px)]:-mt-29 md:-mt-40" : ""}
    ${index === 4 ? "[@media(min-width:400px)]:mt-[-4.5rem] [@media(min-width:759px)]:-mt-14 md:-mt-10" : ""}
    ${index === 5 ? "[@media(min-width:400px)]:mt-2 [@media(min-width:759px)]:mt-1 md:mt-10" : ""}`
                                }
                                data-aos="fade-up"
                                data-aos-delay={index * 200}   // delay otomatis
                                data-aos-duration="800"
                                data-aos-once="true"
                            >
                                <div
                                    className={`p-4 md:p-8 aspect-square flex flex-col justify-end relative cursor-pointer transition-all duration-500 
      ${openIndex === index ? "bg-white" : step.color}`}
                                    onClick={() => toggleBox(index)}
                                >
                                    {/* Angka pojok atas */}
                                    <p
                                        className={`text-lg md:text-xl absolute top-4 left-4 transition-all duration-500
        [@media(min-width:400px)_and_(max-width:539px)]:text-[10px]
        ${openIndex === index ? "text-blue-600" : "text-gray-200"}`}
                                    >
                                        {step.id}
                                    </p>

                                    {/* Judul */}
                                    <h3
                                        className={`text-xl md:text-lg font-semibold transition-all absolute bottom-4 left-4 duration-500
        [@media(min-width:400px)_and_(max-width:539px)]:text-[12px]
        ${openIndex === index ? "text-blue-600" : "text-white"}`}
                                    >
                                        {step.title}
                                    </h3>

                                    {/* Penjelasan */}
                                    <p
                                        className={`pt-4 px-2 text-gray-700 transition-all duration-500 absolute bottom-12 left-2 overflow-hidden
        [@media(min-width:400px)_and_(max-width:539px)]:text-[10px] [@media(min-width:400px)_and_(max-width:539px)]:bottom-8
        ${openIndex === index ? "opacity-100 max-h-40" : "opacity-0 max-h-0"}`}
                                    >
                                        {step.desc}
                                    </p>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Assist
