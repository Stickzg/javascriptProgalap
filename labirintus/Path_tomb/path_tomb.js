'use strict';
/**
 * Adott a következő táblázat:
 * 
 * |0|1|2|
 * |3|4|5|
 * |6|7|8|
 * 
 * Írjatok programot, ami a '4' pontról 2 lépést tesz és megmondja, melyik számon áll.
 * Írja ki számmal és betűvel is.
 * Egy lépés értékkészlete a következő lehet: up, down, left, right.
 * Ha olyan pontot érünk, ami a táblázaton kívül esik, írjon ki a program X-et.
 * A feladatot a switch statement segítségével oldjátok meg.
 * Ha tudnátok se használjatok máshol tanult megoldásokat.
 * Javaslom, hogy előbb rajzoljatok papíron. Pont mint az ősember.
 * Továbbá egy tipp: Kommentben írhattok a switch-ek fölé megjegyzést magatoknak.
 * Jó munkát!
 */

let step01;
let step02;
let number;
let texturalNumber;

let steps =['right','up'];

/* steps.splice(steps.length-1, 1)
/* let hash={
        kulcs: 'ertek',
        kulcs2: {
        kulcs3: 'ertek3'
        }
    }
} */
let i=0;
/*while(i<=10){
    console.log(i);
    i++;
} */
/* do {
    console.log(i);
    i++;
} while (i<=10); */
for(i=0;i<=10;i++){
console.log(i);
}

function ezEgyFuggveny(a, b){
    console.log('fuggvenyertek');
    return a+b;
}

console.log(ezEgyFuggveny(1,2) );

let osszeadas = (a, b) => {
    return a+b;
};

console.log(osszeadas(3,4));

// MAGIC HELYE

switch(step01){
    case'up':{
        number = 1;
        texturalNumber=number;
        console.log(texturalNumber)
            switch(step02){
                case 'up':{
                    number = 'x';
                    texturalNumber = number;
                    break;
                }
                case 'down':{
                    number = 4;
                    texturalNumber = number;
                    console.log(texturalNumber)
                    break;
                }
                case 'left':{
                    number = 0;
                    texturalNumber = number;
                    console.log(texturalNumber)
                    break;
                }
                case 'right':{
                    number = 2;
                    texturalNumber = number;
                    console.log(texturalNumber)
                    break;
                }
                default: console.log('hibás a 2. lépés');
            }
            break;
    }
    case'down':{
        number = 7;
        texturalNumber=number;
        console.log(texturalNumber)
        switch(step02){
            case 'up':{
                number = 4;
                texturalNumber = number;
                console.log(texturalNumber)
                break;
            }
            case 'down':{
                number = 'x';
                texturalNumber = number;
                console.log(texturalNumber)
                break;
            }
            case 'left':{
                number = 6;
                texturalNumber = number;
                console.log(texturalNumber)
                break;
            }
            case 'right':{
                number = 8;
                texturalNumber = number;
                console.log(texturalNumber)
                break;
            }
            default: console.log('hibás a 2. lépés');
        }
        break;
    }
    case'left':{
        number = 3;
        texturalNumber=number;
        console.log(texturalNumber)
        switch(step02){
            case 'up':{
                number = 0;
                texturalNumber = number;
                console.log(texturalNumber);
                break;
            }
            case 'down':{
                number = 6;
                texturalNumber = number;
                console.log(texturalNumber);
                break;
            }
            case 'left':{
                number = 'x';
                texturalNumber = number;
                console.log(texturalNumber);
                break;
            }
            case 'right':{
                number = 4;
                texturalNumber = number;
                console.log(texturalNumber);
                break;
            }
            default:console.log('hibás a 2. lépés');
        }
        break;
    }
    case'right':{
        number = 5;
        texturalNumber=number;
        console.log(texturalNumber)
        switch(step02){
            case 'up':{
                number = '2';
                texturalNumber = number;
                console.log(texturalNumber);
                break;
            }
            case 'down':{
                number = 8;
                texturalNumber = number;
                console.log(texturalNumber);
                break;
            }
            case 'left':{
                number = 4;
                texturalNumber = number;
                console.log(texturalNumber);
                break;
            }
            case 'right':{
                number = 'x';
                texturalNumber = number;
                console.log(texturalNumber);
                break;
            }
            default:console.log('hibás a 2. lépés');
        }
        break;
    }
    default:{
        console.log('hibás adat.')
    }
}

console.log(number, texturalNumber);
