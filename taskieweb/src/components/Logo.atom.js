import React from 'react';
import '../styles/main.css'

const Logo = (props) => {

  return(
    <img src={props.src} alt={props.alt}
    className={props.className}
    style={props.style}/>
  )
}

export default Logo;