'use strict';

const random = require('./random');
const szabaszat = require('./szabaszat');
const homerseklet = require('./homerseklet');
const mondatok = require('./mondatok')
const jegyek = require('./jegyekszama.js')
const noErkezes = require('./elsono');
const vizsgazok = require('./vizsgazok');

let min = 0;
let max = 10;
let x = 0;
let y = 0;
random.random(min, max);

szabaszat.szabaszat();


console.log('=============================');

homerseklet.homerseklet();
y > 0 ? console.log('Szigorúan monoton növekvő') : console.log('Nem szigorúan monton növekvő');

console.log('=============================');
let textSentences = 1;
mondatok.szoveg(textSentences);

console.log('A megadott szöveg: '+textSentences+ ' mondtaból áll');
console.log('=============================');

// értékadás kiíratás
jegyek.jegyek();

console.log('=============================');

let estResztvevo = [ {
    nev: 'Tóth Béla', 
    nem: 'Férfi',
    erkezes: 1800,
}, {
    nev: 'Kiss Mariann',
    nem: 'Nő',
    erkezes: 1830,
}, {
    nev: 'Kocsis Tímea',
    nem: 'Nő',
    erkezes: 1759,
}];


let elsoNo;
noErkezes.estResztvevo(estResztvevo);
let nok = noErkezes.estResztvevo(estResztvevo);
noErkezes.kiErtOda(nok, elsoNo)



console.log('=============================');
//10.
vizsgazok.vizsgazok();