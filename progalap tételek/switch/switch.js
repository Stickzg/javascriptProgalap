'use strict';

let a = 5;
let b = 3.5;
let c = 4;

switch('alma'){
case 'alma':
    console.log('ez egy alma.');
    break;
case 'körte':
    console.log('ez egy körte.');
    break;
default:
    console.log('ez egy gyümölcs');
    break;
}


switch('3.5'){
case '5':
    console.log('a megadott érték: ' + a);
    break;
case '3.5':
    console.log('a megadott érték: '+b);
    break;
case '4' :
    console.log('a megadott érték: '+c);
    break;
default:
    console.log('hamis a megadott érték');
    break;
}

let x=6;
switch (true) {
case (x < 5):
    console.log('5 alatti');
    break;
case (x > 4 && x < 9):
    console.log('5 és 8 közötti');
    break;
case (x > 8 && x < 12):
    console.log('9 és 11 közötti');
    break;
default:
    break;
}
