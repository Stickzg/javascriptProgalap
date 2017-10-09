'use strict';

function max(szamTomb){
    max = 0;
    for(let i=0; i< szamTomb.length; i++){
        if( max < szamTomb[i]){
            max = szamTomb[i];
        }
    }
    return max;
}
function min(szamTomb){
    min = 0;
    for(let i=szamTomb.length; i > 0; i--){
        if( min > szamTomb[i]){
            min = szamTomb[i];
        }
    }
    return min;
}

module.exports = {
    max : max,
    min : min
}