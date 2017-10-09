'use strict';
const random = require('./random');

function szabaszat(){
    let x=0;
    let szabaszat = [];
    for(let i=0; i<10 ; i++){
        szabaszat[i]=random.random(10, 29);
        if(szabaszat[i]<19){
            x++;
        }
    }
x > 0 ? console.log('Dolgozik férfi a szabászatban') : console.log('Nem dolgozik férfi a szabászatban');
}

module.exports = {
    szabaszat : szabaszat
};
