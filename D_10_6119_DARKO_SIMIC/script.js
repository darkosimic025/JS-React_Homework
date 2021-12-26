let dan = {
    datum: "2021/12/23",
    kisa: false,
    sunce: true,
    oblacno: true,
    vrednostiTemp: [33, 6, 29, -30, 7],
    //1.Zadatak
    tropskiDan: function () {
        let rezultat = true;
        for (let i = 0; i < this.vrednostiTemp.length; i++) {
            if (this.vrednostiTemp[i] < 24) {
                rezultat = false;
            }
        } return rezultat;
    },
    //2.Zadatak
    nepovoljanDan: function () {
        let rez = false;
        for (let i = 0; i < this.vrednostiTemp.length-1 ; i++) {
            if (this.vrednostiTemp[i] - this.vrednostiTemp[i + 1] >= 8 || this.vrednostiTemp[i] - this.vrednostiTemp[i + 1] <= -8) {
                rez = true;
            }
        } return rez;
    },
    //3.Zadatak
    neuobicajenDan: function () {
        let rez = false;
        if (this.kisa == true && this.oblacno == true && this.sunce == true) {
            rez = true;
        }
        if (this.kisa == true) {
            for (let i = 0; i < this.vrednostiTemp.length; i++) {
                if (this.vrednostiTemp[i] < -5)
                    rez = true;
            }
        }
        if (this.oblacno == true) {
            for (let i = 0; i < this.vrednostiTemp.length; i++) {
                if (this.vrednostiTemp[i] > 25) {
                    rez = true;
                }
            }
        }
        return rez;
    } 
}
console.log(dan.tropskiDan());
console.log(dan.nepovoljanDan());
console.log(dan.neuobicajenDan());

