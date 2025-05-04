function daftarPeserta() {
  const namaPeserta = document.getElementById("namaPeserta").value;
  const kelasPeserta = document.getElementById("kelasPeserta").value;
  const kategoriLomba = document.getElementById("kategoriLomba").value;
  const pesanPendaftaran = document.getElementById("pesanPendaftaran");

  if (!namaPeserta || !kelasPeserta || !kategoriLomba) {
    pesanPendaftaran.style.color = "red";
    pesanPendaftaran.textContent = "Harap isi semua data!";
    return;
  }

  // Simpan data peserta ke localStorage
  const pesertaData = {
    nama: namaPeserta,
    kelas: kelasPeserta,
    lomba: kategoriLomba,
    waktuDaftar: new Date().toLocaleString()
  };

  let daftarPeserta = JSON.parse(localStorage.getItem("daftarPeserta")) || [];
  daftarPeserta.push(pesertaData);
  localStorage.setItem("daftarPeserta", JSON.stringify(daftarPeserta));

  pesanPendaftaran.style.color = "green";
  pesanPendaftaran.textContent = "Pendaftaran berhasil!";
  document.getElementById("namaPeserta").value = ""; // Kosongkan form setelah berhasil
}
