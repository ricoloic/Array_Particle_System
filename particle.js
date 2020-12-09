class Particle {
    constructor() {
        this.pos = new p5.Vector(mouseX - win.widthDivide(2), mouseY - win.heightDivide(1.35));
        this.vel = new p5.Vector(random(-1, 1), random(1, -1));
        // this.col = new p5.Vector(random(256), 0);
        this.lifespan = 255;
    }

    finished() {
        return this.lifespan < 0;
    }
  
    update() {
        this.pos.add(this.vel);
        this.lifespan -= random(10, 15);
    }
  
    show() {
        noStroke();
        // stroke(255);
        // fill(this.col.x);
        fill(255, this.lifespan);
        ellipse(this.pos.x, this.pos.y, 16);
    }

    run() {
        this.update();
        this.show();
    }
}