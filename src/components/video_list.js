import React, {Component} from 'react';
import VideoListItem from './video_list_item';
import { connect } from 'react-redux';
import actions from '../actions';

const VideoList = ({videos, onVideoSelect}) => {
    let videoItems = videos.map(
    video => {
      return (
        <VideoListItem
            key={video.etag}
            content={video} />
      )
    });

  return (
      <ul className='col-md-4 list-group'>
          {videoItems}
      </ul>
  );
}

const mapStateToProps = (state) => ({
    videos: state.videos
});

export default connect(mapStateToProps)(VideoList);
