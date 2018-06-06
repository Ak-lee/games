var log = console.log.bind(console)
var imageFromPath = function (path) {
    var img = new Image()
    img.src = path
    return img
}
var collide = function (a, b) {
    if (a.x + a.width < b.x ||
        a.x > b.x + b.width ||
        a.y > b.y + b.height ||
        a.y + a.height < b.y
    ) {
        return false
    } else {
        return true
    }
}