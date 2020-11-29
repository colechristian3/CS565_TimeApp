import React from 'react';
import '../styles/main.css'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.defaultClassNames = '';
  }

  render() {
    return (
      <div className={this.props.className+this.defaultClassNames}
           style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}

export default Footer;