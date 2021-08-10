class Particle {
    constructor() {
        this.xNoise = new noiseLoop(0.81, random(width), random(width));
        this.yNoise = new noiseLoop(0.81, random(height), random(height));
        this.alphaColor = random(40);
        this.forward = true;
    }

    render(angle) {

        push();
        noStroke();
        if (this.forward) {
            if (this.alphaColor >= 40) {
                this.forward = false;
            }
            this.alphaColor += 0.2;
        }
        else {
            this.alphaColor -= 0.5;
            if (this.alphaColor <= 5) {
                this.forward = true;
            }
        }
        blendMode(ADD);

        let x = this.xNoise.value(angle);
        let y = this.yNoise.value(angle);
        for (let i = 0; i < 1; i += 0.05) {
            fill(232, 222, 53, this.alphaColor);
            circle(x, y, 24 * i);
        }
        pop();
    }
};