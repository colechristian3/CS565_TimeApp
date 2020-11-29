import React from 'react';
import '../styles/main.css'

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.defaultClassNames = ""+this.props.className;
    this.disabledClassName = this.props.disabledClassName;
  }

  render() {
    return (
      <button type="button"
             id={this.props.id}
             name={this.props.name}
             style={this.props.style}
             className={this.props.isDisabled ? this.disabledClassName : this.defaultClassNames}
             onClick={this.props.isDisabled ? () => {} : this.props.onClick}
      >
        {this.props.text}
        {this.props.children}
      </button>
    )
  }
}

export default Button;