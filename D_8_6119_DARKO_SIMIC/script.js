let niz = [1, 11, 21, 31, 51, 103];


// 1. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća sumu elemenata niza sa parnim indeksom.

let suma = niz => {
    let suma1 = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 == 0) {
            suma1 = suma1 + niz[i];
        }
    }
    return suma1;
}
console.log(suma(niz));

// 2. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona menja znak svakom neparnom elementu celobrojnog niza sa parnim indeksom. Nakon promene znaka, funkcija ispisuje niz u konzoli.

let znak = niz => {
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 == 0) {
            if (niz[i] % 2 != 0) {
                niz[i] *= (-1);
            } 
        } 
    } return niz;
} 
console.log(znak(niz));

// 3. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća broj elemenata niza sa neparnim indeksom.

let broj = niz => {
    neparni = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 != 0) {
            neparni++;
        }
    } return neparni;
}

console.log(`Broj elemenata sa neparnim indeksom u nizu je : ` + broj(niz) );