// login.js
function verifikasiKode() {
  const kodeInput = document.getElementById("kodeInput").value;
  const info = document.getElementById("info");

  // Kode akses untuk admin, juri olahraga, dan juri seni
  const adminKode = "admin123"; // Kode untuk admin
  const juriOlahragaKode = "juri123"; // Kode untuk juri olahraga
  const juriSeniKode = "juri456"; // Kode untuk juri seni
  
  // Cek kode akses
  if (kodeInput === adminKode) {
    window.location.href = "admin.html"; // Arahkan ke halaman admin
  } else if (kodeInput === juriOlahragaKode) {
    window.location.href = "input-olahraga.html"; // Arahkan ke halaman input olahraga
  } else if (kodeInput === juriSeniKode) {
    window.location.href = "input-seni.html"; // Arahkan ke halaman input seni
  } else {
    info.textContent = "Kode akses salah!"; // Pesan jika kode akses salah
    info.style.color = "red";
  }
}
