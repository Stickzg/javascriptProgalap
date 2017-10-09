'use strict';

function szoroz(){
    let szoroz = 1;
    for(let i=1; i<=10 ; i++){
        szoroz*=i;
    }
    return szoroz;
}

module.exports = {
    szoroz : szoroz
};