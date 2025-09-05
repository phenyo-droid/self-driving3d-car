class Car{
    constructor(x,y,width,height){
        this.y=y;
        this.x=x;
        this.height=height;
        this.width=width;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height,
        );

        ctx.fill();
    }
}