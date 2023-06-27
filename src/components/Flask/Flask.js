import './Flask.css'
import React from 'react';

function Flask(props) {
    return <div className={'flask' + (props.selected ? ' selected' : '')}  >
        <div className={'colorContainer c' + props.colors[0]} onClick={() => props.onClick()} />
        <div className={'colorContainer c' + props.colors[1]} onClick={() => props.onClick()} />
        <div className={'colorContainer c' + props.colors[2]} onClick={() => props.onClick()} />
        <div className={'colorContainer c' + props.colors[3]} onClick={() => props.onClick()} />
    </div>
}

export default Flask;