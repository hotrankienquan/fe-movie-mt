import React from 'react';
import JWPlayer from '@jwplayer/jwplayer-react';

class PlayerContainer extends React.Component {
    

  render() {
    const playlist = [
  {
    file: 'neudanhmatem.mp4',
    tracks: [
      {
        file: 'test.vtt',
        label: 'English',
        kind: 'captions',
        default: true,
      },
    ],
  },
];


    return (
      <div className='players-container'>
       
        <JWPlayer
  library='https://content.jwplatform.com/libraries/j9BLvpMc.js'
//   playlist='https://cdn.jwplayer.com/v2/playlists/B8FTSH9D'
  playlist={playlist}
/>
      </div>
    );
  }
}
export default PlayerContainer;