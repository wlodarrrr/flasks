import React from 'react';
import './Playground.css';
import Flask from '../Flask/Flask';

class Playground extends React.Component {

    state = { game: this.props.game, clickedId: null }

    clicked = id => {
        if (this.state.clickedId === null) {
            console.log("selecting");
            this.setState({ clickedId: id })
        } else {
            console.log("moving");
            this.state.game.move(this.state.clickedId, id);
            this.setState({ clickedId: null });
            this.setState({ game: this.state.game });
        }
    };

    reset = () => {
        this.state.game.randomize(20);
        this.setState({ clickedId: null });
        this.setState({ game: this.state.game });
    }

    render() {
        const flasks = this.state.game.values.map(row => { return <Flask key={row.id} colors={row.colors} selected={this.state.clickedId === row.id} onClick={() => this.clicked(row.id)} /> });


        return <div className='container'>
            <div className='header'>
                <button onClick={() => this.reset()}>Reset</button>
                <span>{' Moves: ' + this.state.game.moves}</span>
            </div>
            <div className='playground'>
                {flasks}
            </div>
        </div>
    }
}
export default Playground