'use strict';

let tomb = [1, 2, 3, 10, 25, 30];
let needToFind = 10;

for(let i=0; i<tomb.length;i++){
    if(tomb[i] === needToFind ){
        console.log('A keresett szam a tomb: '+(i+1)+'. eleme.');
        break;
    }
}