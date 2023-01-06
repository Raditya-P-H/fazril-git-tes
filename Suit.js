var tanya = true;
while ( tanya ) {
    // Opsi Player
    var p = prompt('Pilih : gajah , semut , orang');

    // Opsi Komputer
    // Membangkitkan bilangan random
    var comp = Math.random();

    if(comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp <= 0.67) {
        comp ='orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    // Membuat Rules
    if( p == comp ) {
        hasil = 'SERI!';
    } else if( p == 'gajah' ) {
        // if(comp == 'orang') {
        //    hasil = 'MENANG!';
        // } else {
        //  hasil = 'KALAH!';
        // }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if ( p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if ( p == 'semut')  {
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Memasukkan Pilihan Yang Salah!';
    }


    // Tampilkan hasilnya
    alert('Kamu Memilih : ' + p + ' Dan Komputer Memilih : ' + comp + '\nMaka Hasilnya : Kamu ' + hasil);

    tanya = confirm('Lagi? ');
}

alert('Terima Kasih Sudah Bermain');