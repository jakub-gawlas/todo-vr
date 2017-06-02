import React from 'react';
import {
  Text
} from 'react-vr';

const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  .toUpperCase()
  .split(' ');

class Message extends React.Component {
  state = {
    i: 0
  }
  componentDidMount(){
    setInterval(this.nextWord, 1500);
  }
  nextWord = () => {
    this.setState(({ i }) => ({ i: i + 1 }));
  }
  random(min = -3, max = 3){
    return Math.random() * (max - min) + min;
  }
  render() {
    const message = this.props.message.toUpperCase().split(' ');
    const text = message[this.state.i % message.length];
    const transform = [
      { translate: [this.random(), this.random(), this.random(-5, -3)] },
      { rotateY: this.random(-30, 30) }
    ];
    return (
      <Text
        style={{
          transform,
          fontSize: 1,
          layoutOrigin: [0.5, 0.5]
        }}
      >
        {text}
      </Text>
    );
  }
}

export default Message;
