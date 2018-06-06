var Block = function(_x,_y) {
    var obj = {
        img: imageFromPath('./block.png'),
        x: _x,
        y: _y,
        width: 50, 
        height: 20,
        alive: true,
        kill: function() {
            this.alive = false
        },
        collide,
    }
    return obj
}