const kodeAkses = {
  admin: 'admin123',
  nyanyi: 'nyanyi456',
  senam: 'senam456',
  masak: 'masak456',
  kultum: 'kultum456',
  adzan: 'adzan456',
  qasidah: 'qasidah456',
  ngaji: 'ngaji456',
  hafalan: 'hafalan456',
  // Tambah cabang sesuai kebutuhan
};

function verifikasiKode() {
  const input = document.getElementById("kodeInput").value.trim();
  const info = document.getElementById("info");

  if (input === kodeAkses.admin) {
    window.location.href = "admin.html";
  } else if (Object.values(kodeAkses).includes(input)) {
    window.location.href = "input-nilai.html"; // Atau bisa disesuaikan ke input-nilai-[lomba].html
  } else {
    info.textContent = "Kode akses salah!";
  }
}
