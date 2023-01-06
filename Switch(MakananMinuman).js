var item = prompt('Masukkan nama makanan/minuman : \n (cth : nasi, daging, susu, hamburger, softdrink)');

switch( item ) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('Makanan/Minuman Sehat!');
        break;

    case 'hamburger' :
    case 'softdrink' :
        alert('Makanan/Minuman Tidak Sehat');
        break;
        
    default :
    alert('Anda Salah Memasukkan Nama Makanan/Minuman');
}