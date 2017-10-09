'use strict';

function keres(nevsor){
    for(let i=0 ; i<nevsor.length ; i++ ){
        if(nevsor[i] === 'Kiss Petya'){
            console.log('Kiss Petya a '+(i+1)+'. a listában.');
            break;
        }
    }
};

module.exports = {
    kereso : keres
};