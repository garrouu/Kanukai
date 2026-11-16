//  mengatur halaman perawatan

// Fungsi ketika form dikirim (lihat onsubmit di HTML)
function kirimForm(event) {
  // Cegah halaman reload otomatis
  event.preventDefault();

  // Fungsi untuk menyembunyikan form, button "Permintaan terkirim"
  document.getElementById("form").style.display = "none";
  document.getElementById("sukses").style.display = "block";
}
