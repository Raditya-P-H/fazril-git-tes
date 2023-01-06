var jmlKomputer = 10;
var komputerBeroperasi = 6;
var noKomputer = 1;

while(noKomputer <= komputerBeroperasi) {
    console.log('Komputer No.' + noKomputer + ' Beroperasi dengan baik');

    noKomputer++;
}

for(noKomputer = komputerBeroperasi + 1; noKomputer <= jmlKomputer; noKomputer++) {
    console.log('Komputer No.' + noKomputer + ' Tidak beroperasi');
}