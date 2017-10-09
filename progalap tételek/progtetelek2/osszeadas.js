'use strict';

// osszadas elso 10 szamra

function osszead(){
    let osszead = 0;
    for(let i=0; i<=10 ; i++){
        osszead+=i;
    }
    return osszead;
}

module.exports = {
    osszadas : osszead
};