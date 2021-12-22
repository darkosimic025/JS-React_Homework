// 1.Zadatak
// Napraviti funkciju kojoj se prosleđuje niz stavki za kupovinu (članovi niza su stringovi). U funkciji, prolaskom foreach petljom kroz niz, napraviti neuređenu listu i ispisati je u html dokument.

let namirnice = ["Hleb", "Mleko", "Jaja", "Jogurt"];

let kupovina = niz => {
    let lista = `<ul>`;
    niz.forEach(stavka => {
        lista += `<li>${stavka}</li>`;
    });
    lista += `</ul>`;
    document.body.innerHTML += lista;
}

kupovina(namirnice);

// 2.Zadatak
// Napraviti funkciju kojoj se prosleđuje niz imena košarkaških timova. U funkciji, prolaskom foreach petljom kroz niz, formirati tabelu u čijim su redovima imena timova i tabelu ispisati u html dokument.

let timovi = ["Boston Celtics", "Chicago Bulls", "Atlanta Hawks"];

let kosarka = niz => {
    let tabela = `<table style="border: solid 1px black; border-spacing: 0px">`;
        niz.forEach(stavka => {
            tabela += `<tr><td style="border: solid 1px black;">${stavka}</td></tr>`;
        });
        tabela += `</table>`;
        document.body.innerHTML += tabela;
    }

kosarka(timovi);

// 3.Zadatak
// Napraviti funkciju kojoj se prosleđuje niz stringova čiji su članovi putanje do slika. U funkciji, prolaskom foreach petljom kroz niz, prikazati sve slike u html dokumentu.

let linkovi = ["https://i.pinimg.com/originals/e7/e4/6c/e7e46c2164e249af734527afa9a1eb03.png", "https://i1.sndcdn.com/avatars-000034198762-fk2ytt-t500x500.jpg", "https://i1.sndcdn.com/artworks-000395642361-4m877b-t500x500.jpg"];

let slike = niz => {
    niz.forEach(stavka => {
        document.body.innerHTML += `<img src=${stavka}>`;
    });
}

slike(linkovi);