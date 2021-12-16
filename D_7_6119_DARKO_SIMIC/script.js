// 1.Zadatak_______________________________________________________________________________________________

function mnozi(n, m) {
    let proizvod=1;
    for (n; n <= m; n++) {
        proizvod = proizvod * n;
    }
    console.log(proizvod);
}

mnozi(1, 3);


// 2.Zadatak_________________________________________________________________________________________________

function arSr(n, m) {
    let suma = 0;
    brojBrojeva = 0;
    for (n; n <= m; n++) {
        suma = suma + n;
        brojBrojeva++; 
    }
    return aritmetickaSredina = suma / brojBrojeva;
}
console.log(arSr(0, 10));

// 3.Zadatak_____________________________________________________________________________________________________

function arSr3(n, m) {
    let suma = 0;
    brojBrojeva = 0;
   
    for (n; n <= m; n++) {
        if (n % 10 == 3) {
            suma = suma + n;
            brojBrojeva++;
        }
    }
    return aritmetickaSredina = suma / brojBrojeva;
}
console.log(arSr3(0, 13));

// 4.Zadatak_________________________________________________________________________________________________________

function tekst(velicina) {
    document.body.innerHTML += `<p style="font-size: ${velicina}px;"> Tekst paragrafa </p>`;
}

tekst(40);