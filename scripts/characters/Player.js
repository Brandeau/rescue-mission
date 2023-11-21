class Player{
    constructor(){

        this.coordinates = {
            x: 100,
            y: 476
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
    }

        draw(){
            c.fillStyle = 'red';
            c.fillRect(this.coordinates.x, this.coordinates.y, this.dimensions.width, this.dimensions.height);
        }


        update(){

            //this.dimensions.height = 50;

            this.coordinates.x += this.velocity.x;
            this.coordinates.y += this.velocity.y;

            this.sides.bottom = this.coordinates.y + this.dimensions.height;

            if(this.sides.bottom + this.velocity.y < canvas.height){
                this.velocity.y += this.gravity;
            } else this.velocity.y = 0;
        }
}