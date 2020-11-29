import React from 'react';
import '../styles/main.css'

const Select = (props) => {

  const generateList = () => {
    let options = props.options;
    return options.map((option) =>
      <option
        value={option.value}
        id={option.value}
        className={props.optionsClassName}
        style={props.optionsStyle}
      >
        {option.name}
      </option>
    );

  }

  return(
    <select id={props.id}
            className={props.selectClassName}
            style={props.selectStyle}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
    >
      {generateList()}
    </select>
  )
}

export default Select;