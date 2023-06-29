import FlaskData from "./FlaskData";

class Game {
    flaskHeight = 4;

    values = [];

    reset = (fullFlaskCount, emptyFlaskCount) => {
        this.values = [];
        for (let i = 0; i < fullFlaskCount; i++) {
            let flask = new FlaskData(i, this.flaskHeight);
            for (let j = 0; j < this.flaskHeight; j++) {
                flask.add(i);
            }
            this.values.push(flask);
        }

        for (let i = fullFlaskCount; i < fullFlaskCount + emptyFlaskCount; i++) {
            this.values.push(new FlaskData(i, this.flaskHeight));
        }
    }

    randomize = movesCount => {
        for (let i = 0; i < movesCount; i++) {
            this.moveRandomColorReversible();
        }
    }

    move = (fromId, toId) => {

        let from = this.values.find(x => x.id === fromId)
        let to = this.values.find(x => x.id === toId)

        if (!to.isEmpty() && to.topColor() !== from.topColor()) {
            console.log("colors not matching");
            return;
        }

        if (to.emptySpace() === 0) {
            console.log("no space in target flask");
            return;
        }

        let countOfColorsToMove = Math.min(to.emptySpace(), from.topColorCount())

        for (let i = 0; i < countOfColorsToMove; i++) {
            to.add(from.remove());
            console.log("color moved");
        }
    }

    moveRandomColorReversible = () => {
        let filledFlasks = this.values.filter(flask => !flask.isEmpty());
        let flasksWithSpace = this.values.filter(flask => flask.emptySpace() > 0);

        if (filledFlasks.length === 0 || flasksWithSpace.length === 0) {
            return;
        }

        let moved = false;
        let safetyCounter = 0;

        while (!moved) {
            safetyCounter++;
            if (safetyCounter > 1000) {
                console.error("safety counter");
                return;
            }
            let from = filledFlasks[Math.floor(Math.random() * filledFlasks.length)];
            flasksWithSpace = flasksWithSpace.filter(x => x !== from);

            if (flasksWithSpace.length === 0) {
                continue;
            }

            let to = flasksWithSpace[Math.floor(Math.random() * flasksWithSpace.length)];

            if (from.topColor() === to.topColor()) {
                // potentially it can be viable, but I don't want to think about it now
                continue;
            }

            let max = Math.min(from.topColorCount() - (from.isOneColored() ? 0 : 1), to.emptySpace());

            if (max === 0) {
                return;
            }
            let moveCount = Math.floor(Math.random() * (max - 1)) + 1;

            for (let i = 0; i < moveCount; i++) {
                to.add(from.remove());
            }
            moved = true;
        }
    }
}

export default Game;