'use strict';

function elagazas(eredmeny){
    if(eredmeny!=10){
        console.log('eredmeny: ' +eredmeny);
    } else {
        console.log('ez hamis');
    }
}

module.exports = {
    eldontes : elagazas
}