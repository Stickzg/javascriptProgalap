'use strict';

function processStep(step){
    let x=0;
    let y=0; 
    for(let i=0; i<step.length;i++){
        /* console.log(step[i]); */
        switch(step[i]){
        case 'up' :
            y--;
            break;
        case 'down' :
            y++;
            break;
        case 'left' :
            x--;
            break;
        case 'right' :
            x++;
            break;
        }
        
    }
    return x,y;
}

module.exports = {
    processStep : processStep
};