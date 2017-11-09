import { SEARCH_DONE, VIDEO_SELECTED } from './actions';

const defaultState = {
  videos: [],
  selectedVideo : null
 };

const videosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_DONE:

            return {
                ...state,
                videos: action.videoList
            };
        case VIDEO_SELECTED:
            return {
                ...state,
                selectedVideo: action.video
            };
        default:
            return state;
    }
};

export default videosReducer;
