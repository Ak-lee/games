var Paddle = function() {
    var obj = {
        img: imageFromPath('./paddle.png'),
        x: 100,
        y: 270,
        width: 0,
        height: 0,
        speed: 5,
        moveLeft: function() {
            this.x -= this.speed
            if(this.x < 0 ){
                this.x = 0
            }
        },
        moveRight: function(){
            this.x += this.speed
            if(this.x > 400 - obj.width){
                this.x = 400 - obj.width
            }
        },
        collide,
    }
    obj.img.onload = function() {
        obj.width = obj.img.width
        obj.height = obj.img.height
    }
    return obj
}