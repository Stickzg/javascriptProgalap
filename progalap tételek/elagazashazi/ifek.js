'uses strict';


function legelsoIf(a, b){
    if(a>b){
        console.log('Az első változó nagyobb mint a második');
        } else {
        console.log('A második változó nagyobb mint az első')
        }
}

function elsoIf(a, b){
    if(a==b){
        console.log('Az első változó megegyezik a másodikkal')
        } else {
        console.log('az első és a második változó nem egyezik meg.')
        }
}

function masodikIf(c){
    if('string' == c){
        console.log(c);
        } else {
        console.log('a megadott string nem egyezik a c változóval')
        }
}

function harmadikIf(a, b, c){
    if(a>b && c=='string'){
        console.log('a feltételek helyesek')
        } else {
        console.log('a feltételek helytelenek')
        }
}

module.exports = {
    number1 : legelsoIf,
    number2 : elsoIf,
    number3 : masodikIf,
    number4 : harmadikIf
}