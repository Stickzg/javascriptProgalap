'use strict';



function agszelector(x, y){
    if (x) {
      if(y) {
        console.log('x.1 ág');
      } else {
        console.log('x.2 ág');
      }
    } else {
      console.log('y ág');
    }
}

function kinekVoltTobbLoszere(ammoDean, ammoSam){
    ammoDean>ammoSam ? console.log("Deannek volt több tölténye.")
    :   console.log("Samnek volt több tölténye.")
    }

  function needCastiel(ammoDean, ammoSam, ammoNeedToKill){
    ammoNeedToKill>(ammoDean+ammoSam)? console.log("Kellett Castiel segítsége.")
    :   console.log("Nem kellett Castiel segítsége.")
    }

  function kiLottLeTobbet(ammoDean, ammoSam){
    ((ammoDean/3)*2 ) > (ammoSam) ? console.log("Dean lőtt le több vámpírt.")
    :   console.log("Sam lőtt le több vámpírt, mert Dean részeg volt.")
  }

  function elegLoszer(vampireRemainingammo, crowley){
    vampireRemainingammo<crowley?
        console.log("Nem marad elég lőszerük.")
    :   console.log("marad elég lőszerük.")
  }

  module.exports = {
      agak : agszelector,
      tobbloszer : kinekVoltTobbLoszere,
      castiel : needCastiel,
      kiLottLeTobbet : kiLottLeTobbet,
      elegLoszer : elegLoszer,
  }