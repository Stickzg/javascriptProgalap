'use strict';

const random = require('./random');

function homerseklet(){
let y = 0;
let homerseklet=[];
    for(let i=0; i<10 ; i++ ){
        homerseklet[i]=random.random(15, 30);
    }
    for(let i = homerseklet.length; i>=0; i-- ){
        homerseklet[i] > homerseklet[i-1] ? y++
        :   y=0;    break;
        }
    }

    module.exports = {
        homerseklet : homerseklet
    };