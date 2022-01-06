let knjiga1 = {
    naziv: "Upitaj prah",
    autor: "Dzon Fante",
    slika: "https://www.delfi.rs/_img/artikli/2019/08/upitaj_prah_vv.jpg",
    procitana: true
};
let knjiga2 = {
    naziv: "Na putu",
    autor: "Dzek Keruak",
    slika: "http://www.laguna.rs/_img/korice/2897/na_putu-dzek_keruak_v.jpg",
    procitana: true
};
let knjiga3 = {
    naziv: "1984",
    autor: "Dzordz Orvel",
    slika: "https://www.delfi.rs/_img/artikli/2015/02/1984_vv.jpg",
    procitana: false
};
let knjiga4 = {
    naziv: "Vrli novi svet",
    autor: "Oldus Haksli",
    slika: "https://www.delfi.rs/_img/artikli/2020/02/vrli_novi_svet_vv.jpg",
    procitana: true
};

let knjige = [knjiga1, knjiga2, knjiga3, knjiga4];



let knjigeFunkcija = niz => {
    let telo = document.getElementsByTagName("body")[0];
    tabela = document.createElement("table");
    niz.forEach(knjiga => {
        let putanja = knjiga.slika;
        procitanaKnjiga = knjiga.procitana;
        red = document.createElement("tr");
        if (niz.indexOf(knjiga) % 2 == 0) {
            red.style.backgroundColor = "red";
        } else {
            red.style.backgroundColor = "yellow";
        }
        for (i = 0; i < 2; i++) {
            let celija = document.createElement("td");
            if (i == 0) {
                img = document.createElement("img");
                img.setAttribute("src", putanja);
                img.setAttribute("width", "200px")
                celija.appendChild(img);
            }
            else if (i == 1) {
                p = document.createElement("p");
                tekst = document.createTextNode(`${knjiga.naziv} - ${knjiga.autor}`);
                p.appendChild(tekst);
                if (procitanaKnjiga == true) {
                    p.style.color = "blue";
                } else {
                    p.style.color = "silver";
                }
                celija.appendChild(p);
            }
            red.appendChild(celija);
        }
        tabela.appendChild(red);
    });
    telo.appendChild(tabela);
}
knjigeFunkcija(knjige);





