class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image (this.sling1,200,20);
        image (this.sling2,170,20);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
            image (this.sling3,pointA.x-20,pointA.y-10,15,30);
            strokeWeight(4);
            stroke(84, 39, 15);
            //back of bird to left end
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
            //back of bird to right end
            line(pointA.x-20, pointA.y, pointB.x+20, pointB.y);
            }else{
                image (this.sling3,pointA.x+20,pointA.y-10,15,30);
            strokeWeight(4);
            stroke(84, 39, 15);
            //back of bird to left end
            line(pointA.x+20, pointA.y, pointB.x-20, pointB.y);
            //back of bird to right end
            line(pointA.x+20, pointA.y, pointB.x+20, pointB.y);
            }
        }
    }
    
}