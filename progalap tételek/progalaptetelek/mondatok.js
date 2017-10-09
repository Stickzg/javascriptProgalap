'use strict';

function mondatok(textSentences){
let szoveg = 'Ez egy szöveg? Szerintem igen. Akkor jó! Vagy nemtom.';
console.log(szoveg);
    for(let i = 0 ; i < szoveg.length; i++){
        if(szoveg[i] === '.' || szoveg[i] === '?' || szoveg[i] === '!'){
            if(szoveg[i+1] === ' '){
                textSentences++;
            }
        } 

    }
}
module.exports = {
    szoveg : mondatok
};