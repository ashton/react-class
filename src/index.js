import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyCxdovzJJDqel8q0vc3OkT54U_L1wLT1SE';

class App extends Component {
  constructor(props){
    super(props);
    this.searchYoutube = this.searchYoutube.bind(this);
    this.state = {
      videos: [],
      selectedVideo : null
     };
  }

  componentDidMount() {
      this.searchYoutube('Board Games');
  }

  searchYoutube(term) {
      YTSearch({key: API_KEY, term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  }

  render(){
    return (
      <div>
          <SearchBar onSearch={this.searchYoutube}/>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
              onVideoSelect={ selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
