import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import { API_KEY } from './config';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div className="search-bar">
              <SearchBar />
              <VideoDetail video={this.state.selectedVideo} />
              <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated html and put it on the page (dom)
ReactDOM.render(<App />, document.querySelector('.container'));
