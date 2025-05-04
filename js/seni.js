const kelas = document.getElementById("kelas");
const daftarKelas = ["VII.1", "VII.2", "VII.3", "VIII.1", "VIII.2", "VIII.3", "IX.1", "IX.2", "IX.3"];

function isiKelas() {
  daftarKelas.forEach(k => {
    const opt = document.createElement("option");
    opt.value = opt.text = k;
    kelas.appendChild(opt);
  });
}

isiKelas();

function simpanNilai() {
  const kategori = document.getElementById("kategori").value;
  const kelasPeserta = kelas.value;
  const nilai = parseInt(document.getElementById("nilai").value);
  const pesan = document.getElementById("pesanNilai");

  if (isNaN(nilai) || nilai < 60 || nilai > 100) {
    pesan.style.color = "red";
    pesan.textContent = "Nilai harus antara 60–100.";
    return;
  }

  const dataNilai = {
    kategori,
    kelas: kelasPeserta,
    nilai,
    waktu: new Date().toLocaleString()
  };

  // Simpan ke localStorage
  let data = JSON.parse(localStorage.getItem("nilaiSeni")) || [];
  data.push(dataNilai);
  localStorage.setItem("nilaiSeni", JSON.stringify(data));

  pesan.style.color = "green";
  pesan.textContent = "Nilai berhasil disimpan!";
}
