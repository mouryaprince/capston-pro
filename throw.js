class Throw{
    constructor(){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.01,
            length:10,
        }
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        World.add(world,this.throw)
    }

    fly(){
        this.throw.body=null;
    }
    Launch(){
        this.throw.bodyA=bodyA;
    }

    display(){

    }
}