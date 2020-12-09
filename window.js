class Window {
    constructor() {
        this.width = windowWidth - 9;
        this.height = windowHeight - 21;
    }

    widthDivide(split) {
        return this.width / split;
    }

    heightDivide(split) {
        return this.height / split;
    }
}