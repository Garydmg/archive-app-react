import React, { Component } from 'react';
import styled from 'styled-components'

export class Song extends Component {

  onClick = () => {
    this.props.play(this.props.name, this.props.url, this.props.idx);
  }

  render() {
    const { idx, name, isPlayingIdx } = this.props;
    const SongContainer = styled.div`
      max-width: 400px;
      width: 100%;
      text-align: left;
      border: .5px solid hsla(32, 0%, 96%, 1);
      background-color: ${idx === isPlayingIdx ? 'hsla(32, 0%, 96%, 1)' : 'white'};
      &:hover {
        background-color: hsla(32, 0%, 96%, 1);
        cursor: pointer;
      }
    `
    const Text = styled.p`
      margin-left: 10px;
      color: ${idx === isPlayingIdx ? 'darkblue' : 'black'};
      font-weight: ${idx === isPlayingIdx ? '700' : '400'};
    `

    return (
      <SongContainer onClick={this.onClick}>
        <Text>{ name }</Text>
      </SongContainer>
    );
  }
};