class Sprite {
    constructor({coordinates}, imageSrc){
        this.coordinates = coordinates;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
        }
        this.image.src = imageSrc;
        this.loaded = false;
    }

    draw(){
        if(!this.loaded) return;
        c.drawImage(this.image, this.coordinates.x, this.coordinates.y);
    }
}