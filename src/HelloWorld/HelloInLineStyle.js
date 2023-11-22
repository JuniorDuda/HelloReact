import React from 'react';

class HelloInLineStyle extends React.Component {
  render() {
    return <p style={{color: 'red', fontSize: '36px'}}>{this.props.text}</p>;
  }
}

export default HelloInLineStyle;