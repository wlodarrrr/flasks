class FlaskData {

    constructor(id, size) {
        this.id = id;
        this.size = size;
        this.colors = [];
    }

    isEmpty = () => { return this.colors.length === 0 }

    add = c => { this.colors.push(c) }
    remove = () => { return this.colors.pop() }

    topColor = () => { return this.colors[this.colors.length - 1] }

    topColorCount = () => {
        let topColor = this.topColor();
        let count = 0;
        for (let i = this.colors.length - 1; i >= 0; i--) {
            if (this.colors[i] === topColor) {
                count++;
            } else {
                break;
            }
        }
        return count;
    }

    emptySpace = () => this.size - this.colors.length;

    isOneColored = () => {
        return !this.isEmpty() && this.topColorCount() === this.colors.length;
    }

}

export default FlaskData;