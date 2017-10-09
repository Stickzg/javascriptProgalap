'use strict';

function vektorok(vPozitive, vNegative, vektor){
    for(let i=0; i<vektor.length; i++){
        vektor[i]>0 ? vPozitive++ : vNegative++;
    }

    if(vPozitive>vNegative){
        console.log('pozitív számból van több.');
    }   else if(vPozitive=vNegative){
        console.log('egyenlő számú pozitív és negatív elem van');
    }   else {
        console.log('negatív számból van több');
    }
}

module.exports = {
    vektorok : vektorok
};