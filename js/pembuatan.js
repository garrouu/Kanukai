// Mengatur halaman pembuatan

// Fungsi dipanggil setiap kali jenis furniture diganti ( onchange di HTML)
function ubahEstimasi() {
  // Ambil elemen yang punya id="jenis", lalu baca pilihannya (Meja / Rak / Lemari)
  var jenis = document.getElementById("jenis").value;

  // Variabel kosong untuk menyimpan teks estimasi
  var estimasi = "";

  // if / else if
  if (jenis == "Meja") {
    estimasi = "14–30 hari";
  } else if (jenis == "Rak") {
    estimasi = "14–20 hari";
  } else if (jenis == "Lemari") {
    estimasi = "21–30 hari";
  }

  document.getElementById("hint").innerHTML =
    "Estimasi awal " + jenis + ": " + estimasi + ". Pengrajin akan memberi estimasi final.";
}

// Fungsi  dipanggil saat formulir dikirim ( onsubmit di HTML)
function kirimForm(event) {
  // Cegah halaman reload otomatis
  event.preventDefault();

  // Cari  kayu yang sedang dipilih. (Bisa null, kalau belum ada yang dipilih)
  var kayuDipilih = document.querySelector('input[name="kayu"]:checked');

  // Kalau kayu belum dipilih, tampilkan peringatan lalu berhenti (return)
  if (kayuDipilih == null) {
    alert("Pilih jenis kayu dulu");
    return;
  }

  // untuk menyembunyikan button
  document.getElementById("form").style.display = "none";
  document.getElementById("sukses").style.display = "block";
}
