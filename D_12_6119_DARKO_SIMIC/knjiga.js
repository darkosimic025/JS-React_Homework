export class Knjiga {
    constructor(n, a, gi, bs, c) {
        this.naslov = n;
        this.autor = a;
        this.godIzdanja = gi;
        this.brojStrana = bs;
        this.cena = c;
    }
    //Naslov set & get
    set naslov(n) {
        this._naslov = n;
    }
    get naslov() {
        return this._naslov;
    }
    //Autor set & get
    set autor(a) {
        this._autor = a;
    }
    get autor() {
        return this._autor;
    }
    //Godina izdanja set & get
    set godIzdanja(gi) {
        this._godIzdanja = gi;
    }
    get godIzdanja() {
        return this._godIzdanja;
    }
    //Broj strana set & get
    set brojStrana(bs) {
        this._brojStrana = bs;
    }
    get brojStrana() {
        return this._brojStrana;
    }
    //Cena set & get
    set cena(c) {
        this._cena = c;
    }
    get cena() {
        return this._cena;
    }
    //Metode
    stampaj() {
        console.log(`Knjiga ${this.naslov} od autora ${this.autor} cija je godina izdanja ${this.godIzdanja} sadrzi ${this.brojStrana} strana i njena cena iznosi ${this.cena} dinara.`)
    }
    obimna() {
        if (this.brojStrana > 600) {
            return true;
        } else {
            return false;
        }
    }
    skupa() {
        if (this.cena > 8000) {
            return true;
        } else {
            return false;
        }
    }
    dugackoIme() {
        if (this.autor.length > 18) {
            return true;
        } else {
            return false;
        }
    }
}
