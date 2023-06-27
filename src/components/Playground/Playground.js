import React from 'react';
import './Playground.css';
import Flask from '../Flask/Flask';

class Playground extends React.Component {

    state = { values: this.props.values, clicked: null }

    clicked = id => {
        console.log("clicked");
        return this.setState({ clicked: id });
    };

    render() {
        const flasks = this.state.values.map(row => { return <Flask key={row.id} colors={row.colors} selected={this.state.clicked === row.id} onClick={() => this.clicked(row.id)} /> });

        return <div className='playground'>
            {flasks}
        </div>
    }
}
export default Playground