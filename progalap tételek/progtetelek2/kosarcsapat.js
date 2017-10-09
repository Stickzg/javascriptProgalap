'use strict';

function kosarCsapat(kosarCsapat){
    for( let i=0 ; i<kosarCsapat.length ; i++ ){
        if( kosarCsapat[i].magassag > 210 ){
            console.log(kosarCsapat[i].nev);
        }
    }
}
module.exports = {
    kosarcsapat : kosarCsapat
};