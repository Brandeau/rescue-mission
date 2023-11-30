function  buttonsPressed(event){
    switch(event.key){
        case 'w': keys.w.pressed = true;
        
           break;
        case 'a': keys.a.pressed = true;
            break;  
        case 'd': keys.d.pressed = true;
            break;
        case 's': keys.s.pressed = true;

        
            break;
    }
}

function buttonsUnpressed(event){
    switch(event.key){
        case 'a': keys.a.pressed = false;
            break;
        case 'd': keys.d.pressed = false;
            break;
        case 's': keys.s.pressed = false;
            player.coordinates.y -= 50;
            player.dimensions.height = 50;
            break;    
       case 'w': keys.w.pressed = false;
       break;
    }
}

window.addEventListener('keydown', buttonsPressed);

window.addEventListener('keyup', buttonsUnpressed);