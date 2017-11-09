export const SEARCH_DONE = 'SEARCH_DONE';
export const SEARCH_REQUESTED = 'SEARCH_REQUESTED';
export const VIDEO_SELECTED = 'VIDEO_SELECTED';

const doSearch = (term) => ({
    type: SEARCH_REQUESTED,
    term
})

const searchDone = (videoList) => ({
    type: SEARCH_DONE,
    videoList
});


const videoSelected = (video) => ({
    type: VIDEO_SELECTED,
    video
});


export default {
    doSearch,
    searchDone,
    videoSelected
};
