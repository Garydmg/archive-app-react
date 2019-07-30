import React, { Component } from 'react';
import AudioPlayer from "react-h5-audio-player";
import './App.css';
import { SongList } from './components/song-list/song-list.component';
import styled from 'styled-components'

class App extends Component {
  constructor() {
    super();
    // TODO: playerList will be from api call
    this.state = {
      year: '2019',
      season: 'Spring',
      playerList: [
        {
          id: 1,
          url: '1Laudes.mp3',
          name: '1. Laudes atque Carmina'
        }, 
        {
          id: 2,
          url: '2WeTookOff.mp3',
          name: '2. We Took off the Ugly Clothes'
        }, 
        {
          id: 3,
          url: '3IfMusicBe.mp3',
          name: '3. If Music be the Food of Love'
        },
        {
          id: 4,
          url: '4LaskaOpravdiva.mp3',
          name: '4. Laska Opravdiva'
        },
        {
          id: 5,
          url: '5LeibeUndWein.mp3',
          name: '5. Leibe Und Wein'
        },
        {
          id: 6,
          url: '6Innisfree.mp3',
          name: '6. Innisfree'
        },
        {
          id: 7,
          url: '7OIgnisSpiritus.mp3',
          name: '7. O Ignis Spiritus'
        },
        {
          id: 8,
          url: '8SpasenlyeSodelal.mp3',
          name: '8. Spasenlye'
        },
        {
          id: 9,
          url: '9-11Friars.mp3',
          name: '9-11. Selection of Friars Songs'
        },
        {
          id: 10,
          url: '12Bogoroditse.mp3',
          name: '12. Bogoroditse'
        },
        {
          id: 11,
          url: '13Sorida.mp3',
          name: '13. Sorida'
        },
        {
          id: 12,
          url: '14TeachMe.mp3',
          name: '14. Teach me Old World'
        },
        {
          id: 13,
          url: '15tarantella.mp3',
          name: '15. Tarantella'
        },
        {
          id: 14,
          url: '16Shenandoah.mp3',
          name: '16. Shenandoah'
        },
        {
          id: 15,
          url: '17YoullNeverWalk.mp3',
          name: '17. You Will Never Walk Alone'
        }
      ],
      isPlayingIdx: '',
      isPlaying: '',
      isPlayingUrl: ''
    }
  }

  handlePlay = (isPlaying, url, idx) => {
    this.setState({
      isPlaying: isPlaying,
      isPlayingIdx: idx,
      isPlayingUrl: url
    })
  }

  autoPlayNextSong = () => {
    const { isPlayingIdx, playerList } = this.state;
    const nextIdx = isPlayingIdx + 1;
    if (nextIdx < playerList.length) {
      this.setState({
        isPlaying: playerList[nextIdx].name,
        isPlayingUrl: playerList[nextIdx].url,
        isPlayingIdx: nextIdx
      })
    }
  }

  render() {
    /**
     * Define constants, styled components
     */
    const { year, season, playerList, isPlaying, isPlayingIdx } = this.state;
    const Footer = styled.footer`
      position: fixed;
      bottom: 0;
      width: 100%;
      padding-top: 1px;
      background-color: hsla(32, 0%, 96%, 1);
      border-radius: 10px;
    `
    const Header = styled.header`
      position: fixed;
      top: 0;
      width: 100%;
      background-color: black;
      color: white;
      text-align: left;
    `

    let progressBar;
    if (isPlaying) {
      progressBar = 
      <Footer>
        <p>Now Playing: { isPlaying }</p>
        <AudioPlayer
          src={process.env.PUBLIC_URL + '/asset/' + this.state.isPlayingUrl}
          autoPlay
          onEnded={ e => {
            this.autoPlayNextSong()
          }}
          controls
        />
      </Footer>
    }
    return (
      <div className="App">
        <Header>
          <img className='logo' alt='logo' src={process.env.PUBLIC_URL + '/asset/logo.png'} />
          <div className='title'>
            <h2>University of Michigan Men's Glee Club</h2>
            <h4>DIGITAL ARCHIVE</h4>
          </div>
        </Header>
        <SongList 
          title={ year + ' ' + season }
          songs={ playerList } 
          isPlayingIdx = { isPlayingIdx } 
          handlePlay={ this.handlePlay } 
        />
        { progressBar }
      </div>
    );
  }
}

export default App;
