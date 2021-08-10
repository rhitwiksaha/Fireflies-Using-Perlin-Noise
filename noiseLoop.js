class noiseLoop {
    constructor(diameter, min, max) {
        this.diameter = diameter;
        this.min = min;
        this.max = max;
        this.centerX = random(1000);
        this.centerY = random(1000);
    }

    value(angle) {
        let xOffset = map(cos(angle), -1, 1, this.centerX, this.centerX + this.diameter);
        let yOffset = map(sin(angle), -1, 1, this.centerY, this.centerY + this.diameter);
        let r = noise(xOffset, yOffset);
        return map(r, 0, 1, this.min, this.max);
    }
};
