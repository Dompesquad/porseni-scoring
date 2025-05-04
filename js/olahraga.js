const timList = ["VII.1", "VII.2", "VII.3", "VIII.1", "VIII.2", "VIII.3", "IX.1", "IX.2", "IX.3"];

const timA = document.getElementById("timA");
const timB = document.getElementById("timB");

function isiTim() {
  timList.forEach(tim => {
    const optionA = document.createElement("option");
    const optionB = document.createElement("option");
    optionA.value = optionB.value = tim;
    optionA.text = optionB.text = tim;
    timA.appendChild(optionA);
    timB.appendChild(optionB);
  });
}

isiTim();

function simpanSkor() {
  const cabang = document.getElementById("cabang").value;
  const a = timA.value;
  const b = timB.value;
  const skorA = parseInt(document.getElementById("skorA").value);
  const skorB = parseInt(document.getElementById("skorB").value);
  const pesan = document.getElementById("pesanSkor");

  if (a === b) {
    pesan.textContent = "Tim tidak boleh sama!";
    return;
  }

  if (isNaN(skorA) || isNaN(skorB)) {
    pesan.textContent = "Skor harus diisi dengan angka.";
    return;
  }

  const hasil = {
    cabang,
    timA: a,
    timB: b,
    skorA,
    skorB,
    waktu: new Date().toLocaleString()
  };

  // Simpan ke localStorage
  let data = JSON.parse(localStorage.getItem("skorOlahraga")) || [];
  data.push(hasil);
  localStorage.setItem("skorOlahraga", JSON.stringify(data));

  pesan.style.color = "green";
  pesan.textContent = "Skor berhasil disimpan!";
}
