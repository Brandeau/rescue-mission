function  buttonsPressed(event){
    switch(event.key){
        case 'w': 
            if(player.sides.bottom === canvas.height){
                player.velocity.y = -15;
            }
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
            player.coordinates.y = 525
            player.dimensions.height = 50;
            console.log(player.dimensions.height)

                    
            break;    
       
    }
}

window.addEventListener('keydown', buttonsPressed);

window.addEventListener('keyup', buttonsUnpressed);