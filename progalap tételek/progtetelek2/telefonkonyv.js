'use strict';

function nevKereso(telefonkonyv, keresettNev){
    for( let i=0 ; i<telefonkonyv.length; i++){
        if( telefonkonyv[i].nev === keresettNev ){
            console.log(telefonkonyv[i].tel);
        }
    }
}

module.exports = {
    nevKereso : nevKereso
};