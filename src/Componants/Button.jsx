import React, { Children } from 'react'

const Button = ({text, className}) => {
  return (
    <div className={`${className}`}>{text}</div>
  )
}

export default Button