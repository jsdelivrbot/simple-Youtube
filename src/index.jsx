import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import API_KEY from './util/api_key.js';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: "surfboards"}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));