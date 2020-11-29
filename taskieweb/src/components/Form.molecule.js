import React from 'react';
import '../styles/main.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.defaultClassNames = "pad-5 radius20 pad-15 "+this.props.className;
  }

  render() {
    return (
      <div className={this.defaultClassNames}
           style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}

export default Form;