let it = 0;
let win;
let particles = [];

function setup() {
    win = new Window();
    
    createCanvas(win.width, win.height);
}

function draw() {
    background(100);
    translate(win.widthDivide(2), win.height - win.heightDivide(4))
    
    for (let i = 0; i < 10; i++) {
        let p = new Particle();
        particles.push(p);
    }

    // particles.sort((p1, p2) => p1.col.x - p2.col.x);
    
    particles.forEach(p => p.run());
    particles = particles.filter(p => !p.finished());

    let sumV = particles.reduce((v, p) => v.add(p.pos.x, p.pos.y), new p5.Vector(0, 0));
    let cntV = sumV.div(particles.length);


    // stroke(0);
    // strokeWeight(4)
    // noFill();

    fill(255, 0, 0);
    circle(cntV.x, cntV.y, 50);

    
    // it += 1;
    // it > 50 ? noLoop() : null
}