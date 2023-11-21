function moveRight(character, velocity = 5){

    character.velocity.x = velocity;
    
}

function moveLeft(character, velocity = -5){

    character.velocity.x = velocity;
    
}

function duck(character, height = 25){

    character.dimensions.height = height;
    console.log(character.dimensions.height)

}

