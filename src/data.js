
import MujoFolks from "/assets/img/mujo.png"
const Image = { MujoFolks };

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/Laravel.svg";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/electron.svg";
import Tools7 from "/assets/tools/js.png";
import Tools8 from "/assets/tools/nodejs.png";
import Tools9 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/Adobe_Photoshop_CC_icon.svg";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/wordpress.png";
export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Electron JS",
    ket: "Framework",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Adobe Photoshop",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Wordpress",
    ket: "CMS",
    dad: "1200",
  }
];

// Import gambar-gambar proyek
import Proyek1 from "/assets/proyek/proyek-1.webp";
import Proyek2 from "/assets/proyek/proyek-2.webp";
import Proyek3 from "/assets/proyek/proyek-3.webp";
import Proyek4 from "/assets/proyek/proyek-4.webp";
import Proyek5 from "/assets/proyek/proyek-5.webp";
import Proyek6 from "/assets/proyek/proyek-6.webp";
import Proyek7 from "/assets/proyek/proyek-7.webp";
import Proyek8 from "/assets/proyek/proyek-8.webp";
import Proyek9 from "/assets/proyek/proyek-9.webp";
import Proyek10 from "/assets/proyek/proyek-10.webp";
import Proyek11 from "/assets/proyek/proyek-11.webp";

export const listProyek = [
  {
    id: 1,
    slug: "perhutani-kph-kendal",
    gambar: Proyek1,
    nama: "Sistem Basis Data Perhitani Kendal",
    deskripsiSingkat: "Membuat sistem basis data internal perusahaan sekaligus website transparansi aset perusahaan ke publik.",
    deskripsiDetail: "Sistem ini dirancang untuk mengelola data perusahaan secara efisien. Fitur utamanya mencakup manajemen aset, laporan keuangan, dan dashboard interaktif untuk transparansi publik. Dibangun dengan teknologi Laravel untuk backend yang kuat dan Bootstrap untuk frontend yang responsif.",
    waktuPengerjaan: "1 bulan 27 hari (Januari - Februari 2023)",
    tools: ["Laravel", "Bootstrap", "CSS", "Javascript"],
    client: "PT. Perhitani Kendal",
    linkProject: "",
    dad: "100"
  },
  {
    id: 2,
    slug: "teras-ilmu-center-semarang",
    gambar: Proyek2,
    nama: "Teras Ilmu Center Q&A",
    deskripsiSingkat: "Aplikasi berbasis website sebagai platform tanya jawab seputar islam yang terinspirasi dari Quora.",
    deskripsiDetail: "Platform ini memungkinkan pengguna untuk mengajukan dan menjawab pertanyaan, serta berinteraksi dalam komunitas. Fitur tambahan termasuk sistem voting, notifikasi, dan profil pengguna. Aplikasi ini juga diimplementasikan dengan PWA (Progressive Web App) untuk pengalaman pengguna yang lebih baik di perangkat mobile.",
    waktuPengerjaan: "9 bulan 3 hari (Februari – November 2024)",
    tools: ["Laravel", "Bootstrap", "CSS", "Javascript", "PWA"],
    client: "Teras Ilmu Center",
    linkProject: "",
    dad: "200"
  },
  {
    id: 3,
    slug: "fada-tour-semarang",
    gambar: Proyek3,
    nama: "Fada Tour Semarang",
    deskripsiSingkat: "Company profile Fada Tour Semarang yang bergerak di bidang umrah dan travel.",
    deskripsiDetail: "Dalam proyek ini, kami mengembangkan website dengan desain yang elegan dan responsif, sesuai dengan kebutuhan serta preferensi klien. Kami membangun website menggunakan WordPress, memastikan tata letak ramah pengguna dan menarik secara visual di berbagai perangkat. Selain itu, kami bekerja sama dengan klien untuk memahami kebutuhan desain dan menghasilkan website yang sesuai dengan ekspektasi mereka.",
    waktuPengerjaan: "1 bulan 12 hari (Februari – Maret 2023)",
    tools: ["Wordpress", "Elementor"],
    client: "Fada Tour",
    linkProject: "",
    dad: "300"
  },
  {
    id: 4,
    slug: "risebloom-x-undip",
    gambar: Proyek4,
    nama: "Risebloom x UNDIP",
    deskripsiSingkat: "Website kolaborasi antara Risebloom dan UNDIP sebagai website edukasi terkait cara pencegahan Penyakit Seksual Menular (PSM) dan HIV/AIDS.",
    deskripsiDetail: "Dalam proyek ini, kami membuat website yang menarik dan responsif menggunakan HTML, CSS, dan JavaScript. Kami mengoptimalkan tampilan dan performa agar kompatibel di berbagai perangkat dan browser, serta menyesuaikan desain dan elemen UI sesuai dengan kebutuhan branding perusahaan. Selain itu, kami juga mengembangkan website edukasi menggunakan teknologi yang sama untuk menyajikan informasi secara interaktif dan mudah diakses.",
    waktuPengerjaan: "13 hari (Januari - Februari 2025)",
    tools: ["html", "CSS", "Javascript", "Bootstrap", "AOS"],
    client: "Risebloom x UNDIP",
    linkProject: "https://example.com/risebloom",
    dad: "400"
  },
  {
    id: 5,
    slug: "e-catalog-kraton-surakarta",
    gambar: Proyek5,
    nama: "E-Catalog Kraton Surakarta",
    deskripsiSingkat: "Website E-Catalog Kraton Surakarta yang menampilkan berbagai produk dan informasi terkait koleksi museum.",
    deskripsiDetail: "Dalam proyek ini, kami mengembangkan website dengan desain yang elegan dan responsif menggunakan web builder, disesuaikan dengan kebutuhan dan preferensi klien. Kami membangun antarmuka yang ramah pengguna dengan tata letak yang menarik secara visual di berbagai perangkat. Selain itu, kami bekerja sama dengan klien untuk memahami kebutuhan desain dan menghasilkan website yang sesuai dengan ekspektasi mereka.",
    waktuPengerjaan: "1 bulan 20 hari (Agustus - September 2024)",
    tools: ["Wordpress", "Elementor"],
    client: "Kraton Surakarta",
    linkProject: "https://example.com/kraton-surakarta",
    dad: "500"
  },
  {
    id: 6,
    slug: "dphilia-cafe-resto",
    gambar: Proyek6,
    nama: "Dphilia Cafe & Resto",
    deskripsiSingkat: "Landing page cafe yang menampilkan berbagai informasi seperti menu, detail location, promo produk, dll.",
    deskripsiDetail: "Kami mengembangkan landing page cafe menggunakan HTML, CSS, dan JavaScript untuk menampilkan berbagai informasi seperti menu, lokasi, promo produk, dan lainnya. Kami menerapkan animasi scroll dengan AOS agar tampilan lebih interaktif dan menarik bagi pengunjung. Halaman dibuat responsif sehingga dapat diakses dengan baik di berbagai perangkat, mulai dari desktop hingga smartphone. Struktur kode disusun agar terorganisir dan mudah dikelola, sekaligus menyesuaikan tampilan dan elemen UI dengan branding cafe untuk memberikan pengalaman pengguna yang nyaman.",
    waktuPengerjaan: "2 minggu (Agustus 2024)",
    tools: ["HTML", "CSS", "Js"],
    client: "Dphilia Cafe & Resto",
    linkProject: "https://example.com/dphilia",
    dad: "600"
  },
  {
    id: 7,
    slug: "company-profile-cv-nuansa-gis-konsultan",
    gambar: Proyek7,
    nama: "Company Profile CV Nuansa Gis Consultan",
    deskripsiSingkat: "Membangun ulang website perusahaan dengan lebih estetis dan responsive",
    deskripsiDetail: "Dalam proyek ini, kami membangun website profil perusahaan menggunakan WordPress dengan Elementor sebagai page builder. Kami menyesuaikan tampilan dan elemen desain sesuai permintaan serta identitas visual klien. Selain itu, kami memastikan website bersifat responsif dan kompatibel di berbagai ukuran layar dan perangkat. Struktur dan layout website juga dioptimalkan agar mudah dikelola dan diperbarui oleh pihak klien.",
    waktuPengerjaan: "13 hari (1 – 13 April 2025)",
    tools: ["Wordpress", "Elementor"],
    client: "CV Nuansa Gis Consultan",
    linkProject: "https://example.com/nuansa-gis",
    dad: "700"
  },
  // {
  //   id: 8,
  //   slug: "cerindo-landing-ceriagis",
  //   gambar: Proyek8,
  //   nama: "Cerindo : Landing Ceriagis",
  //   deskripsiSingkat: "Landing page berisi sekilas informasi GIS PT. Cerindo Corp. Cerindo adalah perusahaan yang bergerak dibidang dipertambangan nikel.",
  //   deskripsiDetail: "Dalam proyek ini, kami membuat landing page yang menarik dan responsif menggunakan HTML, CSS, dan JavaScript. Kami mengoptimalkan tampilan dan performa landing page agar kompatibel di berbagai perangkat dan browser. Selain itu, kami menyesuaikan desain dan elemen UI agar sesuai dengan kebutuhan branding perusahaan.",
  //   waktuPengerjaan: "10 hari (10 – 20 Februari 2025)",
  //   tools: ["HTML", "CSS", "Js"],
  //   client: "PT. Cerindo Corp",
  //   linkProject: "https://example.com/cerindo",
  //   dad: "800"
  // },
  {
    id: 8,
    slug: "company-profile-pt-geomineup-consulting-independent",
    gambar: Proyek9,
    nama: "Company Profile PT. GCI",
    deskripsiSingkat: "Website perusahaan PT. Geimineup Consulting Indipendent yang berisi tentang layanan konsultan dibidang pertambangan",
    deskripsiDetail: "Dalam proyek ini, kami membangun landing page menggunakan HTML, CSS, dan JavaScript, dengan fokus pada pembuatan struktur kode yang terorganisir dan mudah dikelola. Kami juga mendesain tampilan yang responsif, sehingga landing page dapat berjalan dengan optimal di berbagai perangkat, mulai dari desktop hingga smartphone.",
    waktuPengerjaan: " 24 hari (5 – 29 Juli 2025)",
    tools: ["HTML", "CSS", "Js", "AOS"],
    client: "PT. GCI",
    linkProject: "https://example.com/gci",
    dad: "900"
  },
  {
    id: 9,
    slug: "web-profile-mujo-folks",
    gambar: Proyek10,
    nama: "Web Profile Mujo Folks",
    deskripsiSingkat: "Pembuatan website profile yang berisi tentang layanan yang ditawarkan Moojo Folk. Mujo Folks yang merupakan komunitas penggiat teknologi di Bima-Mataram",
    deskripsiDetail: "Kami membuat website profil Moojo Folks menggunakan React JS dan Tailwind CSS, yang menampilkan layanan yang ditawarkan oleh komunitas penggiat teknologi di Bima-Mataram. Kami menerapkan animasi scroll dengan AOS dan efek visual menggunakan Animate.css untuk membuat tampilan lebih interaktif dan menarik. Website ini juga dibuat responsif, sehingga dapat diakses dengan nyaman di berbagai perangkat, serta disusun dengan struktur kode yang rapi dan mudah dikelola.",
    waktuPengerjaan: "(5 Juli 2025 - Sekarang)",
    tools: ["React Js", "Tailwind CSS", "Js", "AOS", "flowbite", "animate.css"],
    client: "Mujo Folks",
    linkProject: "https://example.com/mujo-folks",
    dad: "1000"
  },
  // {
  //   id: 11,
  //   slug: "hr-system-pt-indocement-tunggal-perkasa",
  //   gambar: Proyek11,
  //   nama: "HR System PT Indocement Tunggal Perkasa",
  //   deskripsiSingkat: "Membuat sistem HRD Perusahaan Indoocement Cirebon",
  //   deskripsiDetail: "Dalam proyek ini, kami bertanggung jawab untuk membangun antarmuka aplikasi Sistem HR menggunakan Electron JS, dengan fokus pada pembuatan tampilan yang user-friendly dan sesuai dengan kebutuhan klien. Kami mengimplementasikan desain dengan memperhatikan prinsip UI/UX agar aplikasi mudah digunakan dan interaktif. Selain itu, kami secara aktif berkoordinasi dengan klien untuk memahami kebutuhan mereka, memberikan pembaruan progres secara berkala, dan memastikan hasil akhir sesuai dengan ekspektasi. Selama proses pengembangan, kami juga bekerja sama dengan tim untuk mengintegrasikan frontend dengan backend secara efisien, sehingga aplikasi berjalan lancar dan dapat memenuhi kebutuhan operasional HR secara optimal.",
  //   waktuPengerjaan: "4 bulan (28 Juli – 25 Agustus 2025)",
  //   tools: ["Electron Js", "Js", "Tailwind CSS", "HTML"],
  //   client: "PT Indocement Tunggal Perkasa",
  //   linkProject: "https://example.com/hr-indocement",
  //   dad: "1100"
  // },
];

import Client1 from "/assets/img/TIC QnA.webp";
import Client2 from "/assets/img/risebloom x undip.webp";
import Client3 from "/assets/img/Cerindo Gis.webp";
import Client4 from "/assets/img/Kraton Surakarta.webp";
import Client5 from "/assets/img/logo fadatour.webp";
import Client6 from "/assets/img/PT GCI.webp";
import Client7 from "/assets/img/Indocemen.webp";
import Client8 from "/assets/img/Perhutani KPH Kendal.webp";
import Client9 from "/assets/img/dphilia.webp";

export const listClient = [
  { id: 1, nama: "TIC QnA", gambar: Client1 },
  { id: 2, nama: "Risebloom x UNDIP", gambar: Client2 },
  { id: 3, nama: "Cerindo GIS", gambar: Client3 },
  { id: 4, nama: "Kraton Surakarta", gambar: Client4 },
  { id: 5, nama: "Fada Tour Semarang", gambar: Client5 },
  { id: 6, nama: "PT GCI", gambar: Client6 },
  { id: 7, nama: "Indocemen", gambar: Client7 },
  { id: 8, nama: "Perhutani KPH Kendal", gambar: Client8 },
  { id: 9, nama: "DPHILIA", gambar: Client9 },
];


import Konstruksi from "/assets/services/konstruksi.webp";
import Logistik from "/assets/services/logistic.webp";
import Mining from "/assets/services/mining.webp";
import Realestate from "/assets/services/real-estate.webp";
import More from "/assets/services/retail.webp";
import Travel from "/assets/services/travel.webp";


export const listBidangUsaha = [
  { id: 1, nama: "Konstruksi", dad:"100", gambar: Konstruksi },
  { id: 2, nama: "Logistik", dad:"200", gambar: Logistik },
  { id: 3, nama: "Mining", dad:"300", gambar: Mining },
  { id: 4, nama: "Realestate", dad:"400", gambar: Realestate },
  { id: 5, nama: "Travel", dad:"500", gambar: Travel },
  { id: 6, nama: "End More", dad:"600", gambar: More },
];



