import React from 'react';
import '../styles/main.css'

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.defaultClassNames = "text-input "+this.props.className;
    this.invalidClassNames = "text-input-invalid "+this.props.className;
  }

  render() {
    return (
      <input type={this.props.type}
             id={this.props.id}
             name={this.props.name}
             style={this.props.style}
             placeholder={this.props.placeholder}
             className={this.props.isInvalid ? this.invalidClassNames : this.defaultClassNames}
             value={this.props.value}
             onChange={this.props.onChange}
             key={this.props.key}
      />
    )
  }
}

export default TextInput;