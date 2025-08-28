import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Fix __dirname di ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 5000;
const app = express();

app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, 'dist', 'index.html');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        data = data
            .replace(/__TITLE__/g, 'Mojo Folks - IT Agency')
            .replace(/__DESCRIPTION__/g, 'Jelajahi layanan Mojo Folks: Konsultasikan kebutuhan perusahaan dan solusi digital inovatif untuk mendukung pertumbuhan bisnis Anda.')
            .replace(/__IMAGE__/g, 'https://mojofolks.com/assets/img/digital%20era.webp')
            .replace(/__URL__/g, 'https://mojofolks.com/')
            .replace(/__TYPE__/g, 'website')
            .replace(/__KEYWORDS/g, 'Layanan IT Mataram, IT Consultant Lombok, IT Agency Lombok, Website Development NTB, Jasa IT Mataram, IT Developer Lombok, Mojo Folks Service');

        res.send(data);
    });
});

app.get('/project', (req, res) => {
    const filePath = path.resolve(__dirname, 'dist', 'index.html');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        data = data
            .replace(/__TITLE__/g, 'Mojo Folks - Project & Portofolio')
            .replace(/__DESCRIPTION__/g, 'Dokumentasi project IT dan website dari Mojo Folks untuk berbagai klien dan bisnis.')
            .replace(/__IMAGE__/g, 'https://mojofolks.com/assets/img/digital%20era.webp')
            .replace(/__URL__/g, 'https://mojofolks.com/project')
            .replace(/__TYPE__/g, 'website')
            .replace(/__KEYWORDS/g, 'Portofolio Website Mataram, IT Konsultan Lombok, IT Konsultan Mataram, IT Konsultan NTB, Project IT Lombok, Hasil Pekerjaan Mojo Folks, Web Developer NTB, Project Mojo Folks');

        res.send(data);
    });
});

app.get('/about', (req, res) => {
    const filePath = path.resolve(__dirname, 'dist', 'index.html');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        data = data
            .replace(/__TITLE__/g, 'Mojo Folks - Tentang Kami IT Agency')
            .replace(/__DESCRIPTION__/g, 'Kenali Mojo Folks, IT Agency dari Mataram - Bima yang berfokus pada solusi digital kreatif, konsultasi IT, dan pengembangan sistem digital profesional.')
            .replace(/__IMAGE__/g, 'https://mojofolks.com/assets/img/kreatifteam.webp')
            .replace(/__URL__/g, 'https://mojofolks.com/about')
            .replace(/__TYPE__/g, 'website')
            .replace(/__KEYWORDS/g, 'Tentang Mojo Folks, IT Agency Lombok, Konsultan IT Mataram, Website Developer NTB, Digital Agency NTB,  Website Developer Mataram, Jasa Pembuatan Website Mataram dan Bima');

        res.send(data);
    });
});

app.get('/service', (req, res) => {
    const filePath = path.resolve(__dirname, 'dist', 'index.html');

    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        data = data
            .replace(/__TITLE__/g, 'Mojo Folks - Layanan IT & Konsultasi')
            .replace(/__DESCRIPTION__/g, 'Solusi digital komprehensif dari perencanaan, pengembangan, hingga eksekusi digital untuk bisnis Anda.')
            .replace(/__IMAGE__/g, 'https://mojofolks.com/assets/img/grow-business.webp')
            .replace(/__URL__/g, 'https://mojofolks.com/service')
            .replace(/__TYPE__/g, 'website')
            .replace(/__KEYWORDS/g, 'Layanan IT Mataram, IT Consultant Lombok, IT Agency Lombok, Website Development NTB, Jasa IT Mataram, IT Developer Lombok, Mojo Folks Service');

        res.send(data);
    });
});
app.use(express.static(path.resolve(__dirname, 'dist')));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});