import React from 'react';
import '../styles/main.css'

const Loading = (props) => {
  const className = 'loader '+props.className;

  return(
    <div className={className} style={props.style}></div>
  )
}

export default Loading;