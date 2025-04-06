// Story:
// Abah telah menyiapkan sebuah kue ulang tahun besar yang diletakkan  di meja ruang jamu istana.
const tamu = [
    {nama: "Ningguang", kebiasaan: "memeriksa kue", interact_with_cakes: true}, //Selalu memeriksa kue
    {nama: "Hutao", kebiasaan: "langsung memberikan kado", interact_with_cakes: false}, //Tidak memperhatikan kue
    {nama: "Xiao", kebiasaan: "memotret pertama kali dilihat", interact_with_cakes: false}, // Mengambil foto untuk setiap masuk ruagan
    {nama: "Childe", kebiasaan: "meletakkan air di meja", interact_with_cakes: true} //Meletakkan air di meja 
  ];
  
  // Temukan posisi Xiao
  const indexXiao = tamu.findIndex(t => t.nama === "Xiao");
  
  // Cek siapa yang datang setelah Xiao
  const tersangka = [];

  for (let i = indexXiao + 1; i < tamu.length; i++){
    if (tamu[i].interact_with_cakes === true){
        tersangka.push(tamu[i].nama);
    }
  }
  
  // Asumsikan bahwa kue hilang setelah Xiao, cari yang paling mungkin mengambilnya
  if (tersangka.length === 0) {
    console.log("Penyelidikan belum cukup, perlu informasi lebih lanjut.");
  } else if (tersangka.length === 1){
    console.log(`Berdasarkan penyelidikan, yang paling mungkin mengambil kue adalah ${tersangka[0]}.`);
  } else {
    console.log(`Berdasarkan penyelidikan, yang paling mungkin mengambil kue adalah ${tersangka.join(' dan ')}`)
  } 
