function lihatData() {
  // Ambil data dari localStorage
  const dataOlahraga = JSON.parse(localStorage.getItem("skorOlahraga")) || [];
  const dataSeni = JSON.parse(localStorage.getItem("nilaiSeni")) || [];

  // Tampilkan data skor olahraga
  let outputOlahraga = "<ul>";
  dataOlahraga.forEach((data, index) => {
    outputOlahraga += `
      <li>
        ${data.cabang} - ${data.timA} vs ${data.timB} | Skor: ${data.skorA} - ${data.skorB} | Waktu: ${data.waktu}
        <button onclick="editSkor(${index}, 'olahraga')">Edit</button>
      </li>`;
  });
  outputOlahraga += "</ul>";
  document.getElementById("dataOlahraga").innerHTML = outputOlahraga;

  // Tampilkan data nilai seni
  let outputSeni = "<ul>";
  dataSeni.forEach((data, index) => {
    outputSeni += `
      <li>
        ${data.kategori} - ${data.kelas} | Nilai: ${data.nilai} | Waktu: ${data.waktu}
        <button onclick="editNilai(${index}, 'seni')">Edit</button>
      </li>`;
  });
  outputSeni += "</ul>";
  document.getElementById("dataSeni").innerHTML = outputSeni;
}

function editSkor(index, jenis) {
  const data = jenis === "olahraga" 
    ? JSON.parse(localStorage.getItem("skorOlahraga"))[index] 
    : JSON.parse(localStorage.getItem("nilaiSeni"))[index];

  const newValue = prompt(`Edit nilai untuk ${data.timA} vs ${data.timB} (Skor: ${data.skorA} - ${data.skorB})`, data.skorA);
  if (newValue !== null) {
    data.skorA = newValue;
    // Simpan perubahan kembali ke localStorage
    const allData = jenis === "olahraga" 
      ? JSON.parse(localStorage.getItem("skorOlahraga")) 
      : JSON.parse(localStorage.getItem("nilaiSeni"));
    allData[index] = data;
    localStorage.setItem(jenis === "olahraga" ? "skorOlahraga" : "nilaiSeni", JSON.stringify(allData));
    alert("Data berhasil diperbarui");
    lihatData();  // Refresh data
  }
}

function editNilai(index, jenis) {
  const data = jenis === "olahraga" 
    ? JSON.parse(localStorage.getItem("skorOlahraga"))[index] 
    : JSON.parse(localStorage.getItem("nilaiSeni"))[index];

  const newValue = prompt(`Edit nilai untuk ${data.kelas} pada ${data.kategori} (Nilai: ${data.nilai})`, data.nilai);
  if (newValue !== null) {
    data.nilai = newValue;
    // Simpan perubahan kembali ke localStorage
    const allData = jenis === "olahraga" 
      ? JSON.parse(localStorage.getItem("skorOlahraga")) 
      : JSON.parse(localStorage.getItem("nilaiSeni"));
    allData[index] = data;
    localStorage.setItem(jenis === "olahraga" ? "skorOlahraga" : "nilaiSeni", JSON.stringify(allData));
    alert("Data berhasil diperbarui");
    lihatData();  // Refresh data
  }
}
