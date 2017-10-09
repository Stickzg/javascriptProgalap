'use strict';


let nok = [];
function estResztvevo(EstResztvevo){

    for(let i=0 ; i<EstResztvevo.length ; i++){
        if(EstResztvevo[i].nem === 'Nő'){
            nok.push(EstResztvevo[i]);
        }
    }
    return nok;
}
let elsoNo;

function kiErtOda(nok, elsoNo){
    for(let i=1; i<nok.length ; i++){
        nok[i-1]>nok[i] ? elsoNo=nok[i-1].nev : elsoNo=nok[i].nev;
    }
    console.log(elsoNo +'ért oda leghamarabb a nők közül.');
}

module.exports = {
    estResztvevo : estResztvevo,
    kiErtOda : kiErtOda,
};