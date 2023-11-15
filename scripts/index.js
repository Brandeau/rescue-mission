
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const player = new Player();

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

    player.velocity.x = 0;

    if(keys.d.pressed) moveRight(player);
    else if (keys.a.pressed) moveLeft(player);

    player.draw();
    player.update();
}

animate();
