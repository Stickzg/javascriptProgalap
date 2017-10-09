'use strict';

const makeLab = require('./makeLab');
const possibleResults = require('./possibleResult');
const getResult = require('./getResult');
const processStep = require('./processStep');

let steps = ['down', 'right', 'right', 'up', 'left', 'down' ];
let matrix = [];

// mátrix létrehozása
makeLab.makeLab(matrix);
// teszt kiíratás
console.log(matrix);
// érték meghatárotás
let textValue= getResult.getResult(processStep.processStep(steps),processStep.processStep(steps), matrix);
// kiíratás számmal, angolul és magyarul
let currentValueHu = possibleResults.possibleResults[textValue]['hu'];
let currentValueEn = possibleResults.possibleResults[textValue]['en'];
console.log(textValue+'-'+currentValueHu+'-'+currentValueEn);