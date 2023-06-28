
class Game {
    values = [
        { id: 0, colors: [2, 1, 6, 3] },
        { id: 1, colors: [1, 1, 3, 3] },
        { id: 2, colors: [7, 2, 6, 3] },
        { id: 3, colors: [5, 1, 4, 3] },
        { id: 4, colors: [5, 1, 4, 3] },
        { id: 5, colors: [5, 1, 4, 3] },
        { id: 6, colors: [5, 1, 4, 3] }
    ];

    reset = (fullFlaskCount, emptyFlaskCount) => {
        this.values = [];
        for (let i = 0; i < fullFlaskCount; i++) {
            this.values.push({ id: i, colors: [i, i, i, i] });
        }
        for (let i = fullFlaskCount; i < fullFlaskCount + emptyFlaskCount; i++) {
            this.values.push({ id: i, colors: [] });
        }
    }
}

export default Game;