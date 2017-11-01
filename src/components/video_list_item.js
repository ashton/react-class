import React from 'react';
import actions from '../actions';
import { connect } from 'react-redux';

const VideoListItem = ({content, onVideoSelect}) => {
  return(
      <li className="list-group-item" onClick={()=>onVideoSelect(content)}>
          <div className="video-list-media">
              <div className="media-left">
                  <img className="media-object" src={content.snippet.thumbnails.default.url}/>
              </div>
              <div className="media-body">
                  <div className="media-heading">
                      {content.snippet.title}
                  </div>
              </div>
          </div>

      </li>
  )
}

const mapDispatchToProps = (dispatch) => ({
    onVideoSelect: (video) => {
        dispatch(actions.videoSelected(video));
    }
})

export default connect(null, mapDispatchToProps)(VideoListItem);
