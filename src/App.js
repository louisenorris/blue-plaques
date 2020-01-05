import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Search from './Search.js';
import PlaquesContainer from './PlaquesContainer';


const plaquesURL = "http://localhost:3000/plaques"

class App extends Component {

  state = {
    plaques: [],
    searchTerm: "",
    selectedPlaqueId: null,
    // filterType: null
  }

  componentDidMount() {
    fetch(plaquesURL)
    .then(resp => resp.json())
    .then(plaques => this.setState({plaques}))
  }

  componentDidUpdate() {
    // debugger
  }
    
  handleSearchChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  searchPlaques = () => {
    if (this.state.searchTerm) {
      return this.state.plaques.filter(plaque => plaque.subjects !== null && plaque.subjects.toLocaleLowerCase().includes(this.state.searchTerm.toLocaleLowerCase()))
    } else {
      return this.state.plaques
    }
  }

  // handleFilterChange = (event) => {
  //   debugger
  //   this.setState({filterType: event.target.value})
  // }

  // searchAndFilterPlaques = () => {
  //   if (this.state.plaques && this.state.filterType) {
  //     debugger
  //     this.searchPlaques().filter(plaque => plaque.colour_name !== null && plaque.colour_name === this.state.filterType)
  //   } else {
  //     return this.searchPlaques()
  //   }
  // }

  handleShowPlaque = (plaqueId) => {
    this.setState({selectedPlaqueId: plaqueId})
  }

  backToAllPlaques = () => {
    this.setState({
      selectedPlaqueId: null,
      searchTerm: ""
      })
  }

  render() {
    return (
      <div>
        <Navbar />
        <Search  
          handleSearchChange={this.handleSearchChange} 
          searchTerm={this.state.searchTerm}
          // handleFilterChange={this.handleFilterChange}
          // filterType={this.state.filterType}
        />
        <PlaquesContainer 
          plaques={this.searchPlaques()}
          handleShowPlaque={this.handleShowPlaque}
          selectedPlaque={this.state.plaques.find(plaque => plaque.id ===  this.state.selectedPlaqueId)}
          backToAllPlaques={this.backToAllPlaques}
        />
      </div>
    );
  }
}

export default App;