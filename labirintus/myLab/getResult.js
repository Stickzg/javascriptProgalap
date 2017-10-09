'use strict';

function getResult(x, y, matrix){
    if(x < matrix.length){
        if(y < matrix.length){
            return matrix[x][y];
        } else {
            return ('X');
        }
    } else {
        return('X');
    }
}

module.exports = {
    getResult : getResult
};