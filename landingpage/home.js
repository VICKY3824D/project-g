// Fungsi untuk menampilkan tanggal hari ini
function tampilkanTanggalHariIni() {
  // Mendapatkan tanggal hari ini
  const hariIni = new Date();

  // Mendapatkan hari, bulan, dan tahun
  const hari = hariIni.getDate();
  const bulan = hariIni.getMonth() + 1; // Bulan dimulai dari 0, jadi tambahkan 1
  const tahun = hariIni.getFullYear();

  // Format tanggal (contoh: 11/11/2024)
  const tanggalHariIni = `${hari}/${bulan}/${tahun}`;

  // Menampilkan tanggal di elemen dengan id "tanggal-hari-ini"
  document.getElementById("tanggal-hari-ini").textContent = tanggalHariIni;
}

// Panggil fungsi saat halaman dimuat
window.onload = tampilkanTanggalHariIni;

function tampilkanWaktuSaatIni() {
  // Mendapatkan waktu saat ini
  const sekarang = new Date();

  // Mendapatkan jam, menit, dan detik
  const jam = sekarang.getHours();
  const menit = sekarang.getMinutes();
  const detik = sekarang.getSeconds();

  // Format waktu (contoh: 14:30:45)
  const waktuSaatIni = `${jam.toString().padStart(2, "0")}:${menit.toString().padStart(2, "0")}:${detik.toString().padStart(2, "0")}`;

  // Menampilkan waktu di elemen dengan id "waktu-saat-ini"
  document.getElementById("waktu-saat-ini").textContent = waktuSaatIni;
}

// Memperbarui waktu setiap detik
setInterval(tampilkanWaktuSaatIni, 1000);
