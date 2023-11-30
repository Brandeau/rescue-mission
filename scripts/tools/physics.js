function moveRight(character, velocity = 5){

    character.velocity.x = velocity;
    
}

function moveLeft(character, velocity = -5){

    character.velocity.x = velocity;
    
}

function duck(character, height = 25){

    character.dimensions.height = height;

}

function jump(character){

    for(let i = 0; i < collisionBlocks.length; i++){
        const collisionBlock = collisionBlocks[i]; 

            if(character.coordinates.y === collisionBlock.coordinates.y - character.dimensions.height - 0.01){
                character.velocity.y = -20;
            }
    }
}


