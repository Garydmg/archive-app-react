import React from 'react';

import { Song } from '../song/song.component';
import styled from 'styled-components'


export const SongList = (props) => {
  console.log(props)
  const SongList = styled.header`
    margin-top: 180px;
    margin-left: 5%;
    margin-bottom: 150px;
  `
  return (
    <SongList>
      <h1>{ props.title }</h1>
      {
        props.songs.map((song, idx) => (
          <Song 
            key={ song.id } 
            url={ song.url } 
            name={ song.name }
            play={ props.handlePlay }
            idx={ idx }
            isPlayingIdx = { song.idx }
          />
        ))
      }
    </SongList>
  )
}