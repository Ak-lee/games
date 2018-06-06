var Ball = function () {
    var obj = {
        img: imageFromPath('./ball.png'),
        x: 150,
        y: 243,
        speedX: 5,
        speedY: -5,
        fired: false,
        fire: function () {
            this.fired = true
        },
        move: function () {
            if (this.fired) {
                if (obj.x < 0 || obj.x > 400 - obj.width) {
                    obj.speedX = - obj.speedX
                }
                if (obj.y < 0 || obj.y > 300 - obj.height) {
                    obj.speedY = - obj.speedY
                }
                obj.x += obj.speedX
                obj.y += obj.speedY
            }
        },
        reflect: function () {
            // 反弹
            this.speedY *= -1
        }
    }
    obj.img.onload = function () {
        obj.width = obj.img.width
        obj.height = obj.img.height
    }
    return obj
}