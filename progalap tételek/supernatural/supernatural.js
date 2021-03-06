#!/usr/bin/env node
'use strict';

/**
 * SUPERNATURAL GYAKORLÓFELADAT
 * 
 * Sam és Dean Winchester egy vámpírtanya kiírtására készülnek Missouri állambeli Green Ridge külvárosában.
 * Bobby információi szerint 12 vámpír tanyázik az elhagyott pajtában, ebből 3 nő, egy pedig alfa.
 * Egy hím vámpírt 4 ezüstgolyó terít le. A nőket fele ennyi. Az alfát viszont a háromszora a normálisnak.
 * Samnek 3 tára van táranként 8 golyóval, Dean felkészültebb, 4 darab 10 töltényes tárral érkezett hentelni.
 * A megbeszéltek szerint Castiel a segítségükre siet, ha kifogynak a munícióból. Castiel egy angyal,
 * szinte halhatatlan, de egy kis esélye, 3%-a minden általa elpusztított vámpír esetén van, hogy megsérül.
 */

/** 
 * A FELADAT
 * 
 * - Olvassátok el a segédletet. (a w3schools-osat mindenképp)
 * - Önálló munkában ismerkedjetek meg a ! (not) logikai operátort
 *   Ezt követően az osztás (/) és maradék képzés (%) aritmetikai operátorait próbáljátok ki.
 * - Vegyétek fel a számértékeket 1-1 beszédes nevű változóba.
 * - A kalkulálható számértékeket a változók felhasználásával
 *   és az alapvető aritmetikai operátorokkal (+,-,%,/) számoljátok ki és töltsétek újabb változókba.
 *   Aritmetikai műveleteket ahol csak lehet változókkal végezzetek!
 *   pl: let osszes tolteny = deantoltenyei + samtoltenyei
 * - A változók értékét szöveges formátumban írjátok ki console.log-gal.
 *   Több paraméter is megadható, amit egybefűz a log!
 * - A kérdésekre az IF statemant segítsével szövegesen válaszoljatok szintén a console.log felhasználásával.
 * - Azokat az ágakat is írjátok meg, amiről tudjátok, hogy nem fog lefutni.
 * - Használjatok egymásba ágyazott if-eket. Példa:
 **/
const ifek = require('./ifek');

let x = true;
let y = false;

ifek.agak(x, y);

let magazineDean=10;
let magazineSam=8;
let ammoDean=4*magazineDean;
let ammoSam=3*magazineSam;
let maleVampire=4;
let alfaVampire=maleVampire*3;
let femaleVampire=maleVampire/2;
let castielDanger=3;
let crowley=alfaVampire*5;
console.log("Deannek "+ammoDean+" tölténye volt.")
console.log("Samnek "+ammoSam+" tölténye volt.")
console.log("Össszesen "+(ammoDean+ammoSam)+" töltényük volt.")
console.log("Egy női vámpír kivégzéséhez: "+(maleVampire/2)+" töltény kell.")
console.log("Egy alfához "+(maleVampire*3)+" töltény kell.")


ifek.tobbloszer(ammoDean, ammoSam);

let ammoNeedToKill = 3*(femaleVampire)+alfaVampire+8*(maleVampire);
console.log("Az összes vámpír kivégzéséhez "+ammoNeedToKill+" lőszer kell." );

console.log("Samnek "+(magazineSam%maleVampire)+" tölténye marad ha minden golyó betalál.")
console.log("Deannek "+(magazineDean%maleVampire)+" tölténye marad ha minden golyó betalál.")


ifek.castiel(ammoDean, ammoSam, ammoNeedToKill);


console.log("Castielnek "+4*castielDanger+"% esélye volt, hogy megsérüljön.")
let DeanWhiskeyBullets = ( ammoDean / 3 ) * 2
/* if(DeanWhiskeyBullets > ammoSam){
  if((DeanWhiskeyBullets % ammoSam) >= (ammoSam) * 0.1 ){
    console.log('Dean legalább 10%-al tobbet olt.');
  } else  {
    console.log('Dean többet ölt mint Sam');
} 
else {
  console.log('Sam tobbet olt.');
}
}
 */

 ifek.kiLottLeTobbet(ammoDean, ammoSam);


let vampireRemainingammo=(ammoDean+ammoSam)-(3*(femaleVampire)+alfaVampire);


ifek.elegLoszer(vampireRemainingammo, crowley);


let seasonepisodes=23;
let weeklyepisodes=(5*5)+(2*10);
let currentseason=8;
let currentepisode=18;
console.log("Tasi "+(((currentseason*seasonepisodes)+currentepisode)/weeklyepisodes)+" hete néz Supernaturalt.")
/**
 * KÉRDÉSEK
 * 
 * - Hány tölténye volt Deannek?
 * - Hány tölténye volt Samnek?
 * - Hány töltényük volt összesen?
 * - Hány töltény kell egy női vámpír kivégzéséhez?
 * - Hány töltény kell az alfához?
 * - Kinek volt több tölténye?
 * - Hány töltény szükséges az összes vámpír kivégzéséhez?
 * - Ha minden golyó betalál, Samnek hány tölténye marad az egy tárral maximálisan lelőhető vámpírok után?
 * - A kérdés ugyanez, csak Dean esetén
 * - Szükséges volt-e Castiel közbelépése?
 * - Mekkora esélye (%) volt Castielnek arra, hogy baja essen?
 * - Sam vagy Dean lőtt le több vámpírt, ha Deannek minden harmadik lövése félrement a sok wiskeytől?
 * - Ha Dean küldött a purgatóriumba több vámpírt, elérte-e a többlet a 10%-ot Dean-éhez képest?
 * - Ha megjelenik a csetepaté végén Crowley, a keresztúti démon, marad-e elég golyó a számára?
 *   5x annyi kell neki mint az alfának.
 * - Hány hete néz folyamatosan Supernatural-t Tasi, ha most tart az S8E18-nál
 *   és napi átlag 5 rész lecsúszik, de hétvégén 10 is.
 */

/**
 * SEGÉDLET
 * 
 * Operátorok: https://www.w3schools.com/js/jsoperators.asp
 * Aritmetikai műveletek: https://www.w3schools.com/js/jsarithmetic.asp
 * If statement: https://www.w3schools.com/js/jsifelse.asp
 * Supernatural: http://www.imdb.com/title/tt0460681/
 */ 