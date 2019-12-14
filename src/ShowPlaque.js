import React, { Component } from 'react';
import emptyPlaque from './emptyblue.png';

class ShowPlaque extends Component {
    render() {
        return (
        <div>
            <button onClick={this.props.backToAllPlaques} className="xbutton" >Back to all plaques</button>
            <div className="detailscard">
                <div className="image"><img src={(this.props.selectedPlaque.thumbnail_url !== null) ? this.props.selectedPlaque.thumbnail_url : emptyPlaque } alt="plaque" width="200" height="200"/></div>
                <div className="header">{this.props.selectedPlaque.subjects}</div>
                <div className="description">{this.props.selectedPlaque.address}</div>
                 <div className="description">{this.props.selectedPlaque.inscription}</div>
            </div>
        </div>
        );
    }
}

export default ShowPlaque;