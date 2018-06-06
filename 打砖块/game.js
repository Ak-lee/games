var Game = function(paddle,ball) {
    var fps = 60 
    var blocks = loadLevel(1)
    window.addEventListener('keydown',function(e){
        if('123'.includes(e.key)){
            blocks = loadLevel(e.key)
        }
    })
    document.getElementById('id-input-speed').addEventListener('input',function(e){
        var input = e.target
        fps = input.value
    })
    var g = {
        keydowns: {},
        actions: {},
    }
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context
    g.draw= function() {
        context.drawImage(paddle.img, paddle.x, paddle.y)
        context.drawImage(ball.img, ball.x, ball.y)
        blocks.forEach(block=>{
            if(block.alive){
                context.drawImage(block.img, block.x, block.y)
            }
        })
    }
    g.clear = function() {
        context.clearRect(0, 0, canvas.width,canvas.height)
    }
    g.registerAction = function(key, callback) {
        g.actions[key] = callback
    }
    g.update = function() {
        ball.move()
        // 判断相撞
        if (paddle.collide(ball,paddle)) {
            // 这里应该调用一个 ball.反弹() 来实现
            ball.reflect()
        }
        blocks.forEach((block)=>{
            if(block.collide(ball,block) && block.alive){
                block.kill()
                ball.reflect()
            }
        })
        g.draw()
    }
    window.addEventListener('keydown', function(e) {
        g.keydowns[e.key] = true
    })
    window.addEventListener('keyup', function(e){
        g.keydowns[e.key] = false
    })

    var runloop = function() {
        let actions = Object.keys(g.actions)
        for(let i = 0; i < actions.length; i++){
           var key = actions[i]
           if(g.keydowns[key]){
               g.actions[key]()
           }
        }
        g.clear()
        g.update()
        setTimeout(function(){
            runloop(fps)
        },1000/fps)
    }
    setTimeout(function(){
        runloop()
    },1000/fps)
    return g
}
