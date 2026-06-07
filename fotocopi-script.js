function pesan() {
    alert("Selamat datang di Fotokopi Barokah!");
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Selamat datang di Fotokopi Barokah");
});

console.log("Contribution test");

document.getElementById("formKontak").addEventListener("submit", function(e){
    e.preventDefault();

    alert("Pesan berhasil dikirim!");

    this.reset();
});