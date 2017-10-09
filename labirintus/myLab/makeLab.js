'use strict';

function makeLab(matrix){
    let n=0;
    for(let x=0; x<4; x++) {
        matrix[x] = [];
        for(let y=0; y<4; y++) {
            matrix[x][y] = n++;
        }
    }
};

module.exports = {
    makeLab : makeLab
};