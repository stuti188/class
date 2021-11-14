class Link {
    constructor(bodyA,bodyB){
        //badyA = ropebody, bodyB = fruit
        var lastLink = bodyA.body.bodies.length-2
        //bodyA.body.bodies.length=6-2=4
        this.link=Constraint.create({
            bodyA:bodyA.body.bodies[lastLink],
            pointA:{X:0,y:0},
            bodyA:bodyB,
            pointB:{x:0,y:0},
            length:-10,
            stiffness:0.01

        })
        World.add(world,this.link)
    }
}