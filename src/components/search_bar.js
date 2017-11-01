import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyCxdovzJJDqel8q0vc3OkT54U_L1wLT1SE';

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

const mapDispatchToProps = (dispatch) => ({
    onSearch: (term) => {
        YTSearch({key: API_KEY, term}, (videos) => {
          dispatch(actions.search(videos));
        });
    }
})


export default connect(null, mapDispatchToProps)(SearchBar);
