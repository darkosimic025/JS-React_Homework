// 1.Zadatak__________________________________________________

let n = 7;
    m = 14;
    i = n;
    proizvod = 1;
while (i <= m) {
    if (i % 7 == 0 && i % 3 != 0) {
        proizvod = i * proizvod;
    }
    i++;
}
console.log(`Proizvod svih brojeva od ${n} do ${m}, koji su deljivi sa 7, ali ne i sa 3 je : ${proizvod}.`);

// 2.Zadatak_____________________________________________________

n = 8;
m = 28;
i = n;
suma = 0;
while (i <= m) {
    if (i % 3 == 0 && i % 7 != 0) {
        suma = suma + i;
    }
    i++;
}
console.log(`Suma svih brojeva od ${n} do ${m}, koji su deljivi sa 3, ali ne i sa 7 je: ${suma}.`);