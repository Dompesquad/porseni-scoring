// Data pemenang yang diambil dari localStorage atau hasil perhitungan
const pemenang = {
  juaraUmum1: {
    nama: "John Doe",
    kategori: "Juara Umum 1",
    kelas: "VII.1",
    tanggal: "1 Mei 2025"
  },
  siswaTerbaikPutra: {
    nama: "Andi",
    kategori: "Siswa Terbaik Putra",
    kelas: "VIII.2",
    tanggal: "1 Mei 2025"
  },
  siswaTerbaikPutri: {
    nama: "Siti",
    kategori: "Siswa Terbaik Putri",
    kelas: "IX.3",
    tanggal: "1 Mei 2025"
  },
  kelasTerfavorit: {
    nama: "Kelas VII.1",
    kategori: "Kelas Terfavorit",
    kelas: "VII.1",
    tanggal: "1 Mei 2025"
  }
};

// Fungsi untuk menampilkan sertifikat berdasarkan kategori
function tampilkanSertifikatKategori(kategori) {
  const data = pemenang[kategori];
  tampilkanSertifikat(data.nama, data.kategori, data.kelas, data.tanggal);
}

// Fungsi untuk menampilkan sertifikat
function tampilkanSertifikat(nama, kategori, kelas, tanggal) {
  document.getElementById("namaSiswa").textContent = nama;
  document.getElementById("kategoriSertifikat").textContent = kategori;
  document.getElementById("kelasSertifikat").textContent = `Kelas: ${kelas}`;
  document.getElementById("tanggalSertifikat").textContent = `Tanggal: ${tanggal}`;
}

// Fungsi untuk mencetak sertifikat
function cetakSertifikat() {
  const sertifikat = document.getElementById("sertifikat");
  const printWindow = window.open('', '', 'height=400,width=600');
  printWindow.document.write('<html><head><title>Cetak Sertifikat</title></head><body>');
  printWindow.document.write(sertifikat.innerHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}

// Fungsi untuk mengunduh sertifikat dalam format PDF
function unduhPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  const nama = document.getElementById("namaSiswa").textContent;
  const kategori = document.getElementById("kategoriSertifikat").textContent;
  const kelas = document.getElementById("kelasSertifikat").textContent;
  const tanggal = document.getElementById("tanggalSertifikat").textContent;

  // Menambahkan teks ke PDF
  doc.setFontSize(22);
  doc.text("SERTIFIKAT PENGHARGAAN", 20, 30);
  
  doc.setFontSize(16);
  doc.text(`Diberikan Kepada: ${nama}`, 20, 50);
  doc.text(kategori, 20, 60);
  doc.text(kelas, 20, 70);
  doc.text(tanggal, 20, 80);

  // Menyimpan PDF dengan nama "sertifikat-juara.pdf"
  doc.save("sertifikat-juara.pdf");
}

// Panggil sertifikat untuk kategori default
tampilkanSertifikatKategori("juaraUmum1");
