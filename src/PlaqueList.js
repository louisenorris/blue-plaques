import React, { Component } from 'react';
import Plaque from './Plaque.js'

class PlaqueList extends Component {

    state = {
        filterType: null
      }

    handleFilterChange = (event) => {
        // debugger
        this.setState({filterType: event.target.value})
      }
    
      searchAndFilterPlaques = () => {
        if (this.state.plaques && this.state.filterType) {
          // debugger
          this.searchPlaques().filter(plaque => plaque.colour_name !== null && plaque.colour_name === this.state.filterType)
        } else {
          return this.searchPlaques()
        }
      }

    render() {
        // debugger

        return (
            <div id="brick-wall">

                <form id="nav" >
                    <label className="filters" >Filter: blue </label>
                    <input type="radio" value="blue" checked={this.props.filterType === "blue"} onChange={this.props.handleFilterChange}/>
                    <label className="filters"> green </label>
                    <input type="radio" value="green" checked={this.props.filterType === "green"} onChange={this.props.handleFilterChange}/>
                    <label className="filters"> brown </label>
                    <input type="radio" value="brown" checked={this.props.filterType === "brown"} onChange={this.props.handleFilterChange}/>
                </form>

                { 
                    this.props.plaques.map(plaque => <Plaque plaque={plaque} handleClick={this.props.handleClick}/>)
                }
            </div>
        );
    }
}

export default PlaqueList;