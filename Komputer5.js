var jmlKomputer = 10;
var komputerBeroperasi = 6;


for( var noKomputer = 1; noKomputer <= jmlKomputer; noKomputer++) {

    if(noKomputer <= 6 && noKomputer !== 5) {
        console.log('Komputer No.' + noKomputer + ' Beroperasi dengan baik');
    
    } else if (noKomputer === 8 || noKomputer === 10 || noKomputer === 5) {
        console.log('Komputer No.' + noKomputer + ' Sedang beroperasi');
    
    } else
        console.log('Komputer No.' + noKomputer + ' Tidak beroperasi')
}