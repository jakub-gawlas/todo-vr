import React from 'react';
import {
  Text
} from 'react-vr';
import RobotsScene from '../scenes/Robots';
import Message from '../components/Message';

const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  .toUpperCase()
  .split(' ');

class TasksView extends React.Component {
  state = {
    i: 0
  }
  componentDidMount(){
    setInterval(this.nextWord, 1500);
  }
  nextWord = () => {
    this.setState(({ i }) => ({ i: i + 1 }));
  }
  render() {
    const text = message[this.state.i % message.length];
    return (
      <RobotsScene>
        <Message message="hello darkness my old friend" />
      </RobotsScene>
    );
  }
}

export default TasksView;
