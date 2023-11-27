class CollisionBlock {
    constructor({coordinates}){
        this.coordinates = coordinates;
        this.dimensions = {
            width: 64,
            height: 64
        }
    }

    draw(){
        c.fillStyle = 'rgba(0, 0, 255, 0.5)';
        c.fillRect(this.coordinates.x, this.coordinates.y, this.dimensions.width, this.dimensions.height);
    }
}