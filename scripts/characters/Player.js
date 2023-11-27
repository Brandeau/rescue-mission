class Player{
    constructor({collisionBlocks = []}){

        this.coordinates = {
            x: 100,
            y: 376
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.gravity = 1;
        this.momentum = 5;

        this.dimensions = {
            width: 50,
            height: 50,
        }
        
        this.sides = {
            bottom: this.coordinates.y + this.height,
        }

        this.collisionBlocks = collisionBlocks;
    }

        draw(){
            c.fillStyle = 'red';
            c.fillRect(this.coordinates.x, this.coordinates.y, this.dimensions.width, this.dimensions.height);
        }


        update(){

            this.coordinates.x += this.velocity.x;

            //check for horizontal collisions
            for(let i = 0; i < this.collisionBlocks.length; i++){
                const collisionBlock = this.collisionBlocks[i]; 

                //if a collision exists
                if(this.coordinates.x <= collisionBlock.coordinates.x + collisionBlock.dimensions.width && 
                    this.coordinates.x + this.dimensions.width >= collisionBlock.coordinates.x &&
                    this.coordinates.y <= collisionBlock.coordinates.y + collisionBlock.dimensions.height &&
                    this.coordinates.y + this.dimensions.height >= collisionBlock.coordinates.y){
                        //collsion on x going left
                        if(this.velocity.x < 0){
                            this.coordinates.x = collisionBlock.coordinates.x + collisionBlock.dimensions.width + 0.01;
                            break;
                        }

                        if(this.velocity.x > 0){
                            this.coordinates.x = collisionBlock.coordinates.x - this.dimensions.width - 0.01;
                            break;
                        }
                    }
            }
            //apply gravity
            this.velocity.y += this.gravity;
            this.coordinates.y += this.velocity.y;
            //this.sides.bottom = this.coordinates.y + this.dimensions.height;

            //check for vertical collition
            for(let i = 0; i < this.collisionBlocks.length; i++){
                const collisionBlock = this.collisionBlocks[i]; 

                //if a collision exists
                if(this.coordinates.x <= collisionBlock.coordinates.x + collisionBlock.dimensions.width && 
                    this.coordinates.x + this.dimensions.width >= collisionBlock.coordinates.x &&
                    this.coordinates.y <= collisionBlock.coordinates.y + collisionBlock.dimensions.height &&
                    this.coordinates.y + this.dimensions.height >= collisionBlock.coordinates.y){
                        if(this.velocity.y < 0){
                            this.velocity.y = 0;
                            this.coordinates.y = collisionBlock.coordinates.y + collisionBlock.dimensions.height + 0.01;
                            break;
                        }

                        if(this.velocity.y > 0){
                            this.velocity.y = 0;
                            this.coordinates.y = collisionBlock.coordinates.y - this.dimensions.height - 0.01;
                            break;
                        }
                    }
            }


            //if(this.sides.bottom + this.velocity.y < canvas.height){
            //} else this.velocity.y = 0;
        
 }

}
