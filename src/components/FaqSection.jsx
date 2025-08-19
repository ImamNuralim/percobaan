import React, { useState } from 'react';

const FaqSection = () => {
    // State untuk mengelola FAQ yang sedang dibuka
    const [openIndex, setOpenIndex] = useState(0); // Mengatur item pertama terbuka secara default

    const faqs = [
        {
            question: "Berapa lama waktu kami dalam mengerjakan tiap proyek?",
            answer: "Waktu pengerjaan menyesuaikan dengan skala dan kompleksitas proyek. Untuk website sederhana biasanya 1 – 14 hari, sementara proyek yang lebih kompleks bisa memakan waktu lebih lama sesuai kebutuhan."
        },
        {
            question: "Apakah layanan bisa disesuaikan untuk bisnis kecil atau startup?",
            answer: "Sangat bisa. Kami menyesuaikan solusi dengan skala bisnis, baik untuk UMKM, startup, maupun perusahaan besar."
        },
        {
            question: "Apakah saya bisa request desain sesuai keinginan?",
            answer: "Tentu. Kami selalu membuka ruang diskusi agar desain yang dibuat sesuai dengan identitas brand dan kebutuhan bisnis Anda."
        },
        {
            question: "Apakah ada batasan revisi dalam pengerjaan proyek?",
            answer: "Yap, revisi tersedia sesuai dengan ketentuan paket yang dipilih. Tujuannya agar hasil akhir tetap sesuai ekspektasi Anda tanpa menghambat proses pengerjaan."
        },
        {
            question: "Apakah saya harus menyiapkan materi sendiri (seperti konten, gambar, atau logo)?",
            answer: "Kami fleksibel. Jika Anda sudah memiliki materi, bisa langsung digunakan. Namun, bila diperlukan, kami juga dapat membantu menyediakan konten, desain, maupun aset visual tambahan."
        },
        {
            question: "Bagaimana sistem pembayaran yang berlaku?",
            answer: "Umumnya pembayaran dilakukan bertahap, dimulai dengan DP sebagai tanda jadi, lalu pelunasan setelah proyek selesai. Namun, skema pembayaran dapat disesuaikan dengan kesepakatan bersama."
        },
        
        {
            question: "Bagaimana dengan biaya layanan?",
            answer: "Biaya tergantung pada jenis layanan dan tingkat kompleksitas proyek. Kami akan memberikan estimasi harga yang transparan setelah memahami kebutuhan Anda secara detail."
        },
        {
            question: "Setelah proyek selesai, apakah ada dukungan lanjutan?",
            answer: "Secara umum, kami memberikan garansi selama 2 minggu setelah proyek selesai. Untuk kebutuhan maintenance jangka panjang, kami menyediakan paket tambahan yang dapat disesuaikan dengan kompleksitas proyek."
        },
        
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className=" py-16 bg-[#0c0228] backdrop-blur-md w-screen -ml-[50vw] -mr-[50vw] relative left-1/2 right-1/2 overflow-hidden">
        
            <div className="container mx-auto px-6 sm:px-12 md:px-24 justify-items-center">
                <div className="text-center mb-12">
                    <p className="text-sm uppercase tracking-widest text-gray-300 mb-2">
                        IT Agency
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Frequently asked question
                    </h2>
                </div>

                {/* FAQ Content Box */}
                <div className="bg-white p-6 md:p-12 shadow-lg w-250  [@media(max-width:1026px)]:w-[100%]">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-6 border-b border-gray-200 last:border-b-0">
                            <button
                                className="flex justify-between items-center w-full focus:outline-none"
                                onClick={() => toggleFaq(index)}
                            >
                                <p className="text-lg font-semibold text-gray-800 text-left">
                                    {faq.question}
                                </p>
                                <span className="ml-4 text-2xl font-bold text-gray-600">
                                    {openIndex === index ? "—" : "+"}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="mt-4 text-gray-600 leading-relaxed pr-8">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqSection;