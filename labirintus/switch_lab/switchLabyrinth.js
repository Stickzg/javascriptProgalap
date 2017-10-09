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

let steps =['right','up']
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
