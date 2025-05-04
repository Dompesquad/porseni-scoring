function verifikasiKode() {
  const kode = document.getElementById("kodeAkses").value.trim();
  const pesan = document.getElementById("pesan");

  // Daftar kode akses
  const akses = {
    "olahraga": "input-olahraga.html",
    "seni": "input-seni.html",
    "admin": "admin.html"
  };

  if (akses[kode]) {
    window.location.href = akses[kode];
  } else {
    pesan.textContent = "Kode akses salah!";
  }
}
