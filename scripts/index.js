
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const collisionBlocks = collisionsLevel1.createObjects();

const player = new Player({collisionBlocks});

const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
    s: {
        pressed: false,
    }
}

function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    collisionBlocks.forEach(collisionBlock => collisionBlock.draw())

    player.velocity.x = 0;

    if(keys.d.pressed) moveRight(player);
    else if (keys.a.pressed) moveLeft(player);
    else if (keys.s.pressed) duck(player);
    else if (keys.w.pressed) {
        jump(player);
        keys.w.pressed = false;
    }

    player.draw();
    player.update();
}

animate();

