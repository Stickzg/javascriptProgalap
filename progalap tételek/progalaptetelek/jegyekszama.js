'use strict';

const random = require('./random');


function jegyek(){
    let jegyekSzama = random.random(10, 200);
    let eladottSzam = random.random(1, jegyekSzama);
    console.log('A szabad jegyek száma: '+(jegyekSzama-eladottSzam)+'.');
    return jegyekSzama;
}

module.exports = {
    jegyek : jegyek
};