import React from 'react'

const Button = ({style, text, onClick}) => {
  return (
    <div>
        <button className={style} onClick={onClick}>
            {text}
        </button>
    </div>
  )
}

export default Button