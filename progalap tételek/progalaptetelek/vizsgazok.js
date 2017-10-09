'use strict';

var random = require('./random');

let vizsgazokSzama = random.random(1, 50);
let vizsgazokPontszama = [];
function vizsgazok(){ for(let i = 0; i<vizsgazokSzama; i++ ){
        vizsgazokPontszama.push(random.random(1, 100));
    }

    for(let i=0 ; i<vizsgazokSzama ; i++ ){
        if(vizsgazokPontszama[i] === vizsgazokPontszama[i-1]){
            console.log('Az azonos pontszámú egymás mellet ülő vizsgázók sorszáma:');
            console.log( i-1, i);
        } 
    }
}
module.exports = {
    vizsgazok : vizsgazok
};