// A container component responsible for populating video list entry components
//import PropTypes from 'prop-types';
import VideoListEntry from './VideoListEntry.js';

var VideoList = ({ videos, handleVideoListEntryClick }) => (

  <div className="video-list">

  {videos.map((currentVideo) => {
    return <VideoListEntry  key={videos.etag} video={currentVideo}
    handleVideoListEntryClick={handleVideoListEntryClick}/>
  })}

  </div>

);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
   videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;


// {console.log(exampleVideoData)}
// <div><h5><em>videoListEntry</em> view goes here</h5></div>
// <div><h5><em>videoListEntry</em> view goes here</h5></div>
// <div><h5><em>videoListEntry</em> view goes here</h5></div>
// <div><h5><em>videoListEntry</em> view goes here</h5></div>
// <div><h5><em>videoListEntry</em> view goes here</h5></div>