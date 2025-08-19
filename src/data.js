
import MujoFolks from "/assets/img/mujo.png"
const Image = { MujoFolks};

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
  { id: 12,
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
    gambar: Proyek1,
    nama: "Sistem Basis Data Perhitani Kendal",
    deskripsiSingkat: "Membuat sistem basis data internal perusahaan sekaligus website transparansi aset perusahaan ke publik.",
    deskripsiDetail: "Sistem ini dirancang untuk mengelola data perusahaan secara efisien. Fitur utamanya mencakup manajemen aset, laporan keuangan, dan dashboard interaktif untuk transparansi publik. Dibangun dengan teknologi Laravel untuk backend yang kuat dan Bootstrap untuk frontend yang responsif.",
    waktuPengerjaan: "3 bulan (Januari - Maret 2024)",
    tools: ["Laravel", "Bootstrap", "CSS", "Javascript"],
    client: "PT. Perhitani Kendal",
    linkProject: "https://example.com/perhitani"
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Teras Ilmu Center Q&A",
    deskripsiSingkat: "Aplikasi berbasis website sebagai platform tanya jawab seputar islam yang terinspirasi dari Quora.",
    deskripsiDetail: "Platform ini memungkinkan pengguna untuk mengajukan dan menjawab pertanyaan, serta berinteraksi dalam komunitas. Fitur tambahan termasuk sistem voting, notifikasi, dan profil pengguna. Aplikasi ini juga diimplementasikan dengan PWA (Progressive Web App) untuk pengalaman pengguna yang lebih baik di perangkat mobile.",
    waktuPengerjaan: "2.5 bulan (April - Juni 2024)",
    tools: ["Laravel", "Bootstrap", "CSS", "Javascript", "PWA"],
    client: "Teras Ilmu Center",
    linkProject: "https://example.com/teras-ilmu"
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Fada Tour Semarang",
    deskripsiSingkat: "Company profile Fada Tour Semarang yang bergerak di bidang umrah dan travel.",
    deskripsiDetail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    waktuPengerjaan: "1 bulan (Juli 2024)",
    tools: ["Wordpress", "Elementor"],
    client: "Fada Tour",
    linkProject: "https://example.com/fada-tour"
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Risebloom x UNDIP",
    deskripsiSingkat: "Website kolaborasi antara Risebloom dan UNDIP sebagai website edukasi terkait cara pencegahan Penyakit Seksual Menular (PSM) dan HIV/AIDS.",
    deskripsiDetail: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    waktuPengerjaan: "2 bulan (Juni - Juli 2024)",
    tools: ["html", "CSS", "Javascript", "Bootstrap", "AOS"],
    client: "Risebloom x UNDIP",
    linkProject: "https://example.com/risebloom"
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "E-Catalog Kraton Surakarta",
    deskripsiSingkat: "Website E-Catalog Kraton Surakarta yang menampilkan berbagai produk dan informasi terkait koleksi museum.",
    deskripsiDetail: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    waktuPengerjaan: "1.5 bulan (September - Oktober 2024)",
    tools: ["Wordpress", "Elementor"],
    client: "Kraton Surakarta",
    linkProject: "https://example.com/kraton-surakarta"
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Dphilia Cafe & Resto",
    deskripsiSingkat: "Landing page cafe yang menampilkan berbagai informasi seperti menu, detail location, promo produk, dll.",
    deskripsiDetail: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    waktuPengerjaan: "2 minggu (Agustus 2024)",
    tools: ["HTML", "CSS", "Js"],
    client: "Dphilia Cafe & Resto",
    linkProject: "https://example.com/dphilia"
  },
  {
    id: 7,
    gambar: Proyek7,
    nama: "Company Profile CV Nuansa Gis Consultan",
    deskripsiSingkat: "Membangun ulang website perusahaan dengan lebih estetis dan responsive",
    deskripsiDetail: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    waktuPengerjaan: "3 minggu (Juli 2024)",
    tools: ["Wordpress", "Elementor"],
    client: "CV Nuansa Gis Consultan",
    linkProject: "https://example.com/nuansa-gis"
  },
  {
    id: 8,
    gambar: Proyek8,
    nama: "Cerindo : Landing Ceriagis",
    deskripsiSingkat: "Landing page berisi sekilas informasi GIS PT. Cerindo Corp. Cerindo adalah perusahaan yang bergerak dibidang dipertambangan nikel.",
    deskripsiDetail: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    waktuPengerjaan: "2.5 bulan (April - Juni 2024)",
    tools: ["HTML", "CSS", "Js"],
    client: "PT. Cerindo Corp",
    linkProject: "https://example.com/cerindo"
  },
  {
    id: 9,
    gambar: Proyek9,
    nama: "Company Profile PT. GCI",
    deskripsiSingkat: "Website perusahaan PT. Geimineup Consulting Indipendent yang berisi tentang layanan konsultan dibidang pertambangan",
    deskripsiDetail: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    waktuPengerjaan: "2 bulan (Oktober - November 2023)",
    tools: ["HTML", "CSS", "Js", "AOS"],
    client: "PT. GCI",
    linkProject: "https://example.com/gci"
  },
  {
    id: 10,
    gambar: Proyek10,
    nama: "Web Profile Mujo Folks",
    deskripsiSingkat: "Pembuatan website profile yang berisi tentang layanan yang ditawarkan Moojo Folk. Mujo Folks yang merupakan komunitas penggiat teknologi di Bima-Mataram",
    deskripsiDetail: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    waktuPengerjaan: "1 bulan (Desember 2023)",
    tools: ["React Js", "Tailwind CSS", "Js", "AOS", "flowbite"],
    client: "Mujo Folks",
    linkProject: "https://example.com/mujo-folks"
  },
  {
    id: 11,
    gambar: Proyek11,
    nama: "HR System PT Indocement Tunggal Perkasa",
    deskripsiSingkat: "Membuat sistem HRD Perusahaan Indoocement Cirebon",
    deskripsiDetail: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.",
    waktuPengerjaan: "4 bulan (September - Desember 2023)",
    tools: ["Electron Js", "Js", "Tailwind CSS", "HTML"],
    client: "PT Indocement Tunggal Perkasa",
    linkProject: "https://example.com/hr-indocement"
  },
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
  { id: 1, nama: "Konstruksi", gambar: Konstruksi },
  { id: 2, nama: "Logistik", gambar: Logistik },
  { id: 3, nama: "Mining", gambar: Mining },
  { id: 4, nama: "Realestate", gambar: Realestate },
  { id: 5, nama: "Travel", gambar: Travel },
  { id: 6, nama: "End More", gambar:  More }, 
];



