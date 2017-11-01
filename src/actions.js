export const SEARCH_HAPPENED = 'SEARCH_HAPPENED';
export const VIDEO_SELECTED = 'VIDEO_SELECTED';

const search = (videoList) => ({
    type: SEARCH_HAPPENED,
    videoList
});


const videoSelected = (video) => ({
    type: VIDEO_SELECTED,
    video
});


export default {
    search,
    videoSelected
};
