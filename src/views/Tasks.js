import React from 'react';
import {
  Text
} from 'react-vr';
import RobotsScene from '../scenes/Robots';

class TasksView extends React.Component {
  render() {
    return (
      <RobotsScene>
        <Text
          style={{
            fontSize: 1,
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translate: [0, 0, -3] }
            ]
          }}
        >
          Hello World!
        </Text>
      </RobotsScene>
    );
  }
}

export default TasksView;
