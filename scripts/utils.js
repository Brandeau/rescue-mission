Array.prototype.createObjects = function(){

    const objects = [];

    this.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if(symbol === 292){
                // push new collision into collisions block array
                objects.push(new CollisionBlock({
                    coordinates: {
                        x: x * 64,
                        y: y * 64
                    }
                }));
            }
        });
    });

    return objects;
}