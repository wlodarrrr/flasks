import React from 'react';
import './Playground.css';
import Flask from '../Flask/Flask';

class Playground extends React.Component {

    state = { game: this.props.game, clicked: null }

    clicked = id => {
        return this.setState({ clicked: id });
    };

    render() {
        const flasks = this.state.game.values.map(row => { return <Flask key={row.id} colors={row.colors} selected={this.state.clicked === row.id} onClick={() => this.clicked(row.id)} /> });

        return <div className='playground'>
            {flasks}
        </div>
    }
}
export default Playground