// 1.Zadatak_________________________________________________________________________________________________

let dan = 9;
switch (dan) {
    case 1:
        document.body.innerHTML += `<p>Ponedeljak</p>`;
        break;
    case 2:
        document.body.innerHTML += `<p>Utorak</p>`;
        break;
    case 3:
        document.body.innerHTML += `<p>Sreda</p>`;
        break;
    case 4:
        document.body.innerHTML += `<p>Cetvrtak</p>`;
        break;
    case 5:
        document.body.innerHTML += `<p>Petak</p>`;
        break;
    case 6:
        document.body.innerHTML += `<p>Subota</p>`;
        break;
    case 7:
        document.body.innerHTML += `<p>Nedelja</p>`;
        break;
    default:
        document.body.innerHTML += `<p>Uneti broj nije ispravan.</p>`;
}

// 2.Zadatak _________________________________________________________________________________________________

let ocena = 1;
switch (ocena) {
    case 1:
        document.body.innerHTML += `<p>Nedovoljan</p>`;
        break;
    case 2:
        document.body.innerHTML += `<p>Dovoljan</p>`;
        break;
    case 3:
        document.body.innerHTML += `<p>Dobar</p>`;
        break;
    case 4:
        document.body.innerHTML += `<p>Vrlo dobar</p>`;
        break;
    case 5:
        document.body.innerHTML += `<p>Odlican</p>`;
        break;
    default:
        document.body.innerHTML += `<p>Uneta ocena nije ispravna.</p>`;
}

// 3.Zadatak_________________________________________________________________________________________________

let broj = 2;
switch (broj) {
    case 0:
        document.body.innerHTML += `<p>Nula</p>`;
        break;
    case 2:
        document.body.innerHTML += `<p>Dva</p>`;
        break;
    case 4:
        document.body.innerHTML += `<p>Cetiri</p>`;
        break;
    case 6:
        document.body.innerHTML += `<p>Sest</p>`;
        break;
    case 8:
        document.body.innerHTML += `<p>Osam</p>`;
        break;
    default:
        document.body.innerHTML += `<p>Uneti broj je pogresan.</p>`;
}

// 4.Zadatak  _________________________________________________________________________________________________

let a = 5;
b = 6;
operacija = 'd';
rezultat = '';
switch (operacija) {
    case 'm':
        rezultat = a * b;
        break;
    case 's':
        rezultat = a + b;
        break;
    case 'o':
        rezultat = a - b;
        break;
    case 'd':
        rezultat = a / b;
        break;
    default:
        console.log(`Uneta operacija nije ispravna.`);
}
console.log(rezultat);

// 5.Zadatak_________________________________________________________________________________________________

const d = new Date();
dan = d.getDay();
switch (dan) {
        case 0 :
        case 6 :
        document.body.innerHTML += `<p>Vikend je</p>`;
        break;
        case 1:
            document.body.innerHTML += `<p>Preostalo je 4 dana.</p>`;
        break;
        case 2:
            document.body.innerHTML += `<p>Preostalo je 3 dana.</p>`;
        break;
        case 3:
            document.body.innerHTML += `<p>Preostalo je 2 dana.</p>`;
        break;
        case 4:
            document.body.innerHTML += `<p>Preostao je 1 dan.</p>`;
        break;
        case 5:
            document.body.innerHTML += `<p>Vikend je sutra.</p>`;
            break;
}

// 6.Zadatak _________________________________________________________________________________________________

m = new Date();
let mesec = m.getMonth();
switch (mesec) {
        case 0:
        document.body.innerHTML += `<p>Januar</p>`;
        break;
        case 1:
            document.body.innerHTML += `<p>Februar</p>`;
        break;
        case 2:
            document.body.innerHTML += `<p>Mart</p>`;
        break;
        case 3:
            document.body.innerHTML += `<p>April</p>`;
        break;
        case 4:
            document.body.innerHTML += `<p>Maj</p>`;
        break;
        case 5:
            document.body.innerHTML += `<p>Jun</p>`;
        break;
        case 6:
            document.body.innerHTML += `<p>Jul</p>`;
        break;
        case 7:
            document.body.innerHTML += `<p>Avgust</p>`;
        break;
        case 8:
            document.body.innerHTML += `<p>Septembar</p>`;
        break;
        case 9:
            document.body.innerHTML += `<p>Oktobar</p>`;
        break;
        case 10:
            document.body.innerHTML += `<p>Novembar</p>`;
        break;
        case 11:
            document.body.innerHTML += `<p>Decembar</p>`;
        break;
    
}

// 7.Zadatak_________________________________________________________________________________________________

m = new Date();
mesec = m.getMonth();
g = new Date();
godina = g.getFullYear();
switch (mesec) {
        case 0:
        document.body.innerHTML += `<p>31 dan</p>`;
        break;
        case 1:
        if (((godina % 4 == 0) && (godina % 100 != 0)) || (godina % 400 == 0))  {
            document.body.innerHTML += `<p>29 dana</p>`;
        }
        else {
            document.body.innerHTML += `<p>28 dana</p>`;
        }
        break;
        case 2:
            document.body.innerHTML += `<p>31 dan</p>`;
        break;
        case 3:
            document.body.innerHTML += `<p>30 dana</p>`;
        break;
        case 4:
            document.body.innerHTML += `<p>31 dan</p>`;
        break;
        case 5:
            document.body.innerHTML += `<p>30 dana</p>`;
        break;
        case 6:
            document.body.innerHTML += `<p>31 dan</p>`;
        break;
        case 7:
            document.body.innerHTML += `<p>30 dana</p>`;
        break;
        case 8:
            document.body.innerHTML += `<p>31 dan</p>`;
        break;
        case 9:
            document.body.innerHTML += `<p>30 danar</p>`;
        break;
        case 10:
            document.body.innerHTML += `<p>31 danr</p>`;
        break;
        case 11:
            document.body.innerHTML += `<p>30 dana</p>`;
        break;
    
}

// 8.Zadatak  _________________________________________________________________________________________________

let color = 'green';
switch (color) {
    case 'blue':
        document.body.innerHTML += `<p style="color:blue;">Tekst paragrafa</p>`;
    break;
    case 'green':
            document.body.innerHTML += `<p style="color:green;">Tekst paragrafa</p>`;
    break;
    case 'red':
            document.body.innerHTML += `<p style="color:red;">Tekst paragrafa</p>`;
    break;
    default:
        document.body.innerHTML += `<p style="color:yellow;">Tekst paragrafa</p>`;
}