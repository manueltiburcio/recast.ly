// The top level container for the entire application. This is the component that will be rendered to the DOM
import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0],
      videoArray: exampleVideoData,
    }
  }

  handleVideoListEntryClick(video) {
    this.setState( {
      currentVideo: video
    })
  }


  render() {
    return (
  <React.Fragment>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
       <VideoPlayer video={this.state.currentVideo} />
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videoArray}
        handleVideoListEntryClick={this.handleVideoListEntryClick.bind(this)}/>
      </div>
    </div>
  </React.Fragment>
    )
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
