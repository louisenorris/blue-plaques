import React, { Component } from 'react';
import Plaque from './Plaque.js'

class PlaqueList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.plaques.map(plaque => <Plaque plaque={plaque} handleClick={this.props.handleClick}/>)
                }
            </div>
        );
    }
}

export default PlaqueList;