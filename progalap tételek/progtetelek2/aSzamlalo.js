'use strict';

function aSzamlalo(tetszolegesSzoveg, tetszolegesSzovegSzamlalo){
    for( let i = 0 ; i < tetszolegesSzoveg.length ; i++){
        if( tetszolegesSzoveg[i]=== 'a' && tetszolegesSzoveg[i-1] === ' ' && tetszolegesSzoveg[i+1] === ' '){
            tetszolegesSzovegSzamlalo++;
        }
    }
    return tetszolegesSzovegSzamlalo;
}
module.exports = {
    aSzamlalo : aSzamlalo
};