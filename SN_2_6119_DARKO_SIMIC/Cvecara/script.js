let inputRuze = document.getElementById("ruze");
 inputLjiljani = document.getElementById("ljiljani");
 inputGerberi = document.getElementById("gerberi");
 dugmeIzracunaj = document.getElementById("izracunaj");
 bombonjera = document.getElementById("bombonjera");
 cokolada = document.getElementById("cokolada");
 sampanjac = document.getElementById("sampanjac");
 okvirBombonjera = document.getElementById("bombonjera1");
 okvirCokolada = document.getElementById("cokolada1"); 
 okvirSampanjac = document.getElementById("sampanjac1");
 kartica = document.getElementById("kartica");
 okvirCenaBezPopusta = document.getElementById("cenaBezPopusta");
 okvirCenaSaPopustom = document.getElementById("cenaSaPopustom");

dugmeIzracunaj.addEventListener("click", () => {

    let inputRuzeValue = inputRuze.value;
    inputRuzeValue = parseInt(inputRuzeValue || 0);
    let inputLjiljaniValue = inputLjiljani.value;
    inputLjiljaniValue = parseInt(inputLjiljaniValue || 0);
    let inputGerberiValue = inputGerberi.value;
    inputGerberiValue = parseInt(inputGerberiValue || 0);

    for (i = 0; i < inputRuzeValue; i++) {
        let slikaruze = document.createElement("img");
        slikaruze.setAttribute("src", "slike/ruza.png");
        slikaruze.setAttribute("width", "100px");
        let okvirRuza = document.getElementById("slikeRuza");
        okvirRuza.append(slikaruze);
    };
    for (i = 0; i < inputLjiljaniValue; i++) {
        let slikaljiljana = document.createElement("img");
        slikaljiljana.setAttribute("src", "slike/ljiljan.png");
        slikaljiljana.setAttribute("width", "100px")
        let okvirLjiljana = document.getElementById("slikeLjiljana");
        okvirLjiljana.append(slikaljiljana);
    };
    for (i = 0; i < inputGerberiValue; i++) {
        let slikaGerber = document.createElement("img");
        slikaGerber.setAttribute("src", "slike/gerber.png");
        slikaGerber.setAttribute("width", "100px")
        let okvirGerber = document.getElementById("slikaGerber");
        okvirGerber.append(slikaGerber);
    }
    
    let cenaBuketa = inputRuzeValue * 150 + inputLjiljaniValue * 120 + inputGerberiValue * 70;

    if (bombonjera.checked == true) {
        cenaBuketa += 500;
        okvirBombonjera.append('+Bombonjera');
    }
    if (cokolada.checked == true) {
        cenaBuketa += 500;
        okvirCokolada.append('+Cokolada');
    }
    if (sampanjac.checked == true) {
        cenaBuketa += 500;
        okvirSampanjac.append('+Sampanjac');
    }


    let cenaBuketaPopust = 0;
    if (kartica.checked == true && cenaBuketa > 2000) {
        cenaBuketaPopust = cenaBuketa - (cenaBuketa * 10 / 100);
        okvirCenaSaPopustom.innerHTML = `<p style="font-size:40px;">Cena sa popustom: ${cenaBuketaPopust}</p>`;
    }
    okvirCenaBezPopusta.innerHTML = `<p style="font-size:20px;">Cena bez popusta: ${cenaBuketa}</p>`;
 
    dugmeIzracunaj.disabled = true;
})

// let dodaci = document.querySelectorAll(`input[type="checkbox"]`);
// let dodaciNiz = Array.from(dodaci);
// dodaciNiz.forEach(dodatak => {
//     if (dodatak.checked == true) {
//         cenaBuketa += 500;
//     }
// })