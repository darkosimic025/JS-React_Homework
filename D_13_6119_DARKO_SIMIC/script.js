let sportisti = callback => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(request.responseText);
            callback(data);
        } else if (this.readyState === 4) {
            console.log("Doslo je do greske prilikom preuzimanja podataka")
        }
    });
    request.open("GET", "sportisti.json");
    request.send();
}

let prosecnaVisina = niz => {
    let brojSportista = niz.length;
    let ukupnaVisina = 0;
    niz.forEach(sportista => {
        ukupnaVisina += parseFloat(sportista.visina);
    });
    let prosecnaVisinaIspis = Math.round(ukupnaVisina / brojSportista);
    console.log(`Prosecna visina svih sportista je : ${prosecnaVisinaIspis}cm`);
}

sportisti(prosecnaVisina);

let najmanjeTransfera = niz => {
    let min = niz[0];
    niz.forEach(sportista => {
        if (sportista.timovi.length <= min.timovi.length) {
            min = sportista;
        }
    });
    console.log(`Sportista ${min.imePrezime} je imao najmanje transfera. Broj transfera : ${min.timovi.length}`)
}

sportisti(najmanjeTransfera);

let timLakers = niz => {
    niz.forEach(sportista => {
        let sportistaTimovi = sportista.timovi;
        sportistaTimovi.forEach(tim => {
            if (tim == "Los Angeles Lakers") {
                console.log(`Sportista ${sportista.imePrezime} je igrao za tim "Los Angeles Lakers".`)
            }
        })
    })
}

sportisti(timLakers);