import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <form className="search" onChange={this.props.handleSearchChange}>
                    <input type="text" placeholder="Search plaques..." value={this.props.searchTerm}/>
                </form>
                <form className="filter" >
                    <label className="filters" >Filter blue: </label>
                    <input type="radio" value="blue" checked={this.props.filterType === "blue"} onChange={this.props.handleFilterChange}/>
                    <label className="filters">  green: </label>
                    <input type="radio" value="green" checked={this.props.filterType === "green"} onChange={this.props.handleFilterChange}/>
                    <label className="filters">  brown: </label>
                    <input type="radio" value="brown" checked={this.props.filterType === "brown"} onChange={this.props.handleFilterChange}/>
                </form>
            </div>
        );
    }
}

export default Search;