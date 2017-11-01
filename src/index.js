import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import actions from './actions';
import store from './store';
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

  componentDidUpdate() {
      if(this.props.videos) {
          this.props.selectVideo(this.props.videos[0]);
      }
  }

  searchYoutube(term) {
      YTSearch({key: API_KEY, term}, (videos) => {
        this.props.initialSearch(videos);
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


const mapStateToProps = (state) => ({ videos: state.videos });
const mapDispatchToProps = (dispatch) => ({
    initialSearch: (videos) => {
        dispatch(actions.search(videos));
    },
    selectVideo: (video) => {
        dispatch(actions.videoSelected(video));
    }
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>, document.querySelector('.container'));
