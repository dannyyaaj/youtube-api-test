import React, { Component } from 'react';
// import AddressInput from './AddressInput';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import { repInfoByAddress } from '../api/civicInfo';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    houseReps: [],
    senateRep: []
  }

  componentDidMount = () => {
   this.onTermSubmit('nfl')
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[1]
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  onAddressSubmit = async (address) => {
    const response = await repInfoByAddress.get('/representatives', {
      params: {
        address: address
      }
    });

    console.log(response.data.officials)
    this.setState({
      houseReps: response.data.officials[0]
    })
  }

  render() {
    return (
      <div className="ui container">
        {/* <AddressInput onFormSubmit={this.onAddressSubmit} />
        <p>Your representative is {this.state.houseReps.name}</p>
        <img alt={this.state.houseReps.name} src={this.state.houseReps.photoUrl} /> */}

        <SearchBar onFormSubmit={this.onTermSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
