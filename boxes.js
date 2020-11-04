class redzone {

constructor (x,y,width,height) {

    var b = {

        isStatic: true
    }

    this.body = Bodies.rectangle(x,y,width,height,b)
    this.width=width
    this.height = height
    this.shapeColor = color(127,127,127)
    World.add(world,this.body)

}

display() {

var bps = this.body.position

rectMode(CENTER)
fill ("red")
rect (bps.x, bps.y, this.width, this.height)


}

}