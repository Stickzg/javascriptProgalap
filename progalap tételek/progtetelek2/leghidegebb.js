'use strict'

module.exports =  function leghidegebb(homerseklet){
    let min = 0;
    for(let i=0; i<homerseklet.length;i++){
        if(homerseklet[i].celsius < homerseklet[min].celsius){
            min = i;
        } 
    }
    return homerseklet[min].city;
} 