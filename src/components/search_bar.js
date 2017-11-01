import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.search = this.search.bind(this);
  }

  search() {
      this.props.onSearch(this.state.term);
  }

  render(){
      return (
          <div className="search-bar">
              <input
                  value={this.state.term}
                  onChange={this.onInputChange} />
              <button onClick={this.search}>Buscar</button>
          </div>

      )
  }

  onInputChange(event){
    this.setState({
        term: event.target.value
    })
  }
}

export default SearchBar;
