import React, { Component } from 'react';
import PlaqueList from './PlaqueList.js';
import ShowPlaque from './ShowPlaque.js';

class PlaquesContainer extends Component {

    renderContent = () => {
        if (this.props.selectedPlaque) {
            return <ShowPlaque 
                        selectedPlaque={this.props.selectedPlaque}
                        backToAllPlaques={this.props.backToAllPlaques}
                    />
        } else {
            return <PlaqueList 
                        plaques={this.props.plaques}
                        handleClick={this.props.handleShowPlaque}
                    />
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default PlaquesContainer;