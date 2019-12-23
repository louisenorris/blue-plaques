import React, { Component } from 'react';
import Plaque from './Plaque.js'

class PlaqueList extends Component {
    render() {
        debugger
        return (
            <div>
                { 
                    this.props.plaques ? this.props.plaques.map(plaque => <Plaque plaque={plaque} handleClick={this.props.handleClick}/>) : null
                }
            </div>
        );
    }
}

export default PlaqueList;