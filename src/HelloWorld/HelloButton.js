import React from 'react';

class HelloButton extends React.Component {
  render() {
    return <button>{this.props.text}</button>;
  }
}

export default HelloButton;