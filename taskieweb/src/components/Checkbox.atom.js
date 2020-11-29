import React from 'react';
import '../styles/main.css'

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.defaultClassNames = " "+this.props.className;
    this.invalidClassNames = " "+this.props.className;
  }

  render() {
    return (
      <div style={this.props.style}>
        <label htmlFor={this.props.name} >
          <input type={"checkbox"}
                 id={this.props.id}
                 name={this.props.name}
                 className={this.props.isInvalid ? this.invalidClassNames : this.defaultClassNames}
                 value={this.props.value}
                 onChange={this.props.onChange}
                 key={this.props.key}
          />{this.props.text}
        </label>
      </div>
    )
  }
}

export default Checkbox;