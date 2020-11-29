import React from 'react';
import '../styles/main.css'

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={this.props.style}
        className={this.props.className}
      >
        {this.props.text}
      </div>

    )
  }
}

export default ErrorMessage;