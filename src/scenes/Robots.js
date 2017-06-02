import React from 'react';
import {
  asset,
  Pano,
  View,
} from 'react-vr';

class RobotsScene extends React.Component {
  render() {
    return (
      <View>
        <Pano 
          source={asset(
            'robots--stereo.jpg', 
            { stereo: 'TOP_BOTTOM_3D' }
          )}
          style={{
            transform: [
              { rotateY: -60 }
            ]
          }}
        />
        {this.props.children}
      </View>
    );
  }
}

export default RobotsScene;
