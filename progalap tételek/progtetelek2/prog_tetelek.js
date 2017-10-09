'use strict';

const osszead = require('./osszeadas');
const szoroz = require('./szoroz');
const kereso = require('./keresoAlg');
const months = require('./melyikHonap');
const daysOfWeek = require('./melyikNap');
const kosarcsapat = require('./kosarcsapat');
const nevKereso = require('./telefonkonyv');
const aSzamlalo = require('./aSzamlalo');
const vektorok = require('./vektorNegativPozitiv');
const minMax = require('./minMax');
const leghidegebb = require('./leghidegebb');
const ecsere = require('./ecsere');

console.log(osszead.osszadas());

console.log('=============================');

console.log(szoroz.szoroz());

console.log('=============================');

let nevsor = ['Nagy Pista', 'Tóth Béla', 'Tekergő Gergő', 'Kiss Petya'];

kereso.kereso(nevsor);

console.log('=============================');

let date = 'Szep';
console.log(months.months[date]);

console.log('=============================');

let currentDay = 'wed';

console.log('Vasárnap '+(6-daysOfWeek.daysOfWeek[currentDay])+' nap múlva lesz.');

console.log('=============================');

let kosarCsapat = [{
    nev: 'Lebron James', magassag: 220,
},{ 
    nev: 'Shaq Oneil', magassag: 240,
},{
    nev : 'Törpe', magassag: 150,
}];

kosarcsapat.kosarcsapat(kosarCsapat);


console.log('=============================');
// telefonkönyv



let telefonkonyv = [{
    nev: 'Blanka', tel: 30568951,
}, {
    nev: 'István', tel: 20568231,
}, {
    nev: 'Timi', tel: 70652487,
}];
let keresettNev = 'Timi';
nevKereso.nevKereso(telefonkonyv, keresettNev)


console.log('=============================');

let tetszolegesSzoveg = 'A feladatban csak a kis "a" betű kerül megmelítésre, mert ez a feladat.';
let tetszolegesSzovegSzamlalo = 0;


console.log(`A szövegben ${aSzamlalo.aSzamlalo(tetszolegesSzoveg, tetszolegesSzovegSzamlalo)} darab "a" kötőszó van`);

console.log('=============================');

// A(n) vektor negatív vagy pozitív a több?

let vektor = [1, -1, 2, -2, 3, -4, 4];
let vPozitive = 0;
let vNegative = 0;
vektorok.vektorok(vPozitive, vNegative, vektor);

console.log('=============================');

// min-max számok

let szamTomb = [3, 4, 5, 10, 25, 1, 14, 8];

console.log('A max érték: '+minMax.max(szamTomb));
console.log('A min érték: '+minMax.min(szamTomb));

console.log('=============================');

let varosok = [
    {
    city : 'Szeged'
    , celsius : 22
    }, {
    city : 'Sopron'
    , celsius : 16
    }, {
    city : 'Kecskemét'
    , celsius : 18
    }, {
    city : 'Budapest'
    , celsius : 20
    }
];

console.log('A mai napon a leghidegebb város: '
+ leghidegebb(varosok)
);

console.log('=============================');

let text = 'Ez a szoveg ekezetek nelkul lesz csakis azert is mert.';
console.log(ecsere(text));