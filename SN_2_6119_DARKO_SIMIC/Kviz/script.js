let pitanje1 = {
    tekst: "Stenli Kjubrik je rodjen u :",
    odgovori: ["Njujorku", "Cikagu", "Los Andjelesu", "San Francisku"],
    indeksTacnogOdgovora: 0
};
let pitanje2 = {
    tekst: "Stenli Kjubrik pre nego sto je postao reditelj, bio je zaljubljenik u :",
    odgovori: ["Fotografiju", "Slikarstvo", "Grafite", "Mozaik"],
    indeksTacnogOdgovora: 0
};
let pitanje3 = {
    tekst: "Njegov film `2001: A Space Odyssey` dobio je oskara za :",
    odgovori: ["Glumu", "Specijalne efekte", "Scenario", "Reziju"],
    indeksTacnogOdgovora: 1
};
let pitanje4 = {
    tekst: "Njegovi vizuelni izrazaj je karakteristicna po :",
    odgovori: ["Monotonosti boja", "Simetriji", "Krupnim kadrovima", "Izrazenim bojama"],
    indeksTacnogOdgovora: 1
};
let pitanje5 = {
    tekst: "Njegov prvi film je bio :",
    odgovori: ["Dani borbe", "Paklena pomorandza", "Isijavanje", "Sirom zatvorenih ociju"],
    indeksTacnogOdgovora: 0
};
let pitanje6 = {
    tekst: "Po romanu Vladimira Nabokova snimio je film :",
    odgovori: ["Ocajanje", "Plin", "Smeh u tami", "Lolita"],
    indeksTacnogOdgovora: 3
};
let pitanje7 = {
    tekst: "Poslednji Kjubrikov film je: :",
    odgovori: ["Isijavanje", "Sirom zatvorenih ociju", "Doktor Strejndzlav", "Beri Lindon"],
    indeksTacnogOdgovora: 1
};
let pitanje8 = {
    tekst: "Stenli Kjubrik je rodjen u :",
    odgovori: ["Njujorku", "Cikagu", "Los Andjelesu", "San Francisku"],
    indeksTacnogOdgovora: 0
};
let pitanje9 = {
    tekst: "Stenli Kjubrik je rodjen u :",
    odgovori: ["Njujorku", "Cikagu", "Los Andjelesu", "San Francisku"],
    indeksTacnogOdgovora: 0
};
let pitanje10 = {
    tekst: "Stenli Kjubrik je rodjen u :",
    odgovori: ["Njujorku", "Cikagu", "Los Andjelesu", "San Francisku"],
    indeksTacnogOdgovora: 0
};

let pitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7,pitanje8,pitanje9,pitanje10];

//Permutacija niza

let permutacija = niz => {
    for (let i = niz.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let trenutni = niz[i];
        niz[i] = niz[j];
        niz[j] = trenutni;
    }
    return niz;
}

let okvir = document.getElementsByTagName("body")[0];



let strukturaKviza = (niz, callback) => {
    //Permutacija
    callback(niz);
    let naslov = document.createElement("h1");
    let tekst = document.createTextNode(`Stenli Kjubrik Kviz`);
    naslov.appendChild(tekst)
    okvir.appendChild(naslov)
    //Pravljenje strukture
    for (let i = 0; i < 5; i++) {
        let okvirPitanja = document.createElement("form");
        let pitanje = document.createElement("p");
        let tekst = document.createTextNode(`${i+1}. ${niz[i].tekst}`);
        pitanje.appendChild(tekst);
        pitanje.style.bold
        okvirPitanja.appendChild(pitanje);
        for (let j = 0; j < niz[i].odgovori.length; j++) {
            let odgovorZajedno = document.createElement("div");
            let odgovor = document.createElement("input");
            let label = document.createElement("label");
            label.innerText = `${niz[i].odgovori[j]}`;
            odgovor.setAttribute("type", "radio");
            odgovor.setAttribute("name", `odgovor${i}`);
            odgovor.setAttribute("value", `${j}`)
            odgovor.setAttribute("value2", `${j}${i}`)
            odgovorZajedno.appendChild(odgovor);
            odgovorZajedno.appendChild(label);
            okvirPitanja.appendChild(odgovorZajedno);
        }
        okvir.appendChild(okvirPitanja);

        //Cekiranje prvih radiio button-a

        let cekiran = document.querySelector(`input[value2="0${i}"]`);
        // let cekiran = document.getElementsByClassName(`odgovor${j}${i}`)
        cekiran.setAttribute("checked", true);
    }    
    
    //Kreiranje dugmica
    let dugmePosalji = document.createElement("input");
    dugmePosalji.setAttribute("type", "submit");
    dugmePosalji.setAttribute("value", "Posalji odgovore");
    dugmePosalji.setAttribute("class","dugme")
    let dugmeNova = document.createElement("input");
    dugmeNova.setAttribute("type", "reset")
    dugmeNova.setAttribute("value", "Nova pitanja")
    dugmeNova.setAttribute("class","dugme")
    okvir.appendChild(dugmePosalji);
    okvir.appendChild(dugmeNova);
    
    //Dodavanje event listener-a

    //Dugme za posalji

    dugmePosalji.addEventListener("click", () => {
        for (let i = 0; i < 5; i++) {
            let selektovani = document.querySelector(`input[name="odgovor${i}"]:checked`); 
            if (selektovani.value == niz[i].indeksTacnogOdgovora) {
                let ispis = document.createTextNode(`Tacno ste odgvorili na ${i + 1}. pitanje`);
                let p = document.createElement("p");
                p.appendChild(ispis);
                p.style.color = "green";
                okvir.appendChild(p);
                console.log(selektovani.value)
            } else {
                let ispis = document.createTextNode(`Niste tacno odgvorili na ${i+1}. pitanje`);
                let p = document.createElement("p");
                p.appendChild(ispis);
                p.style.color = "red";
                okvir.appendChild(p);
            }
            
        }
        //Disable radio button nakon submit
        let nizOdgovora = document.querySelectorAll('input[type="radio"]');
        Array.from(nizOdgovora).forEach(odgovor => {
            odgovor.disabled = true;
        })
        //Disabel posalji button nakon submit
        dugmePosalji.disabled = true;

    })

    //Dugme za nova pitanja

    dugmeNova.addEventListener("click", () => {
        location.reload();
    })
}
strukturaKviza(pitanja, permutacija)






