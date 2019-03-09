import React, { Fragment } from "react"

const Logo = ({ color }) => {
  return (
    <Fragment>
      <svg style={{
        fill: `${color}`,
        width: '50px'
      }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.99 62.99" role="img">
        <title>frankluongo.com</title>
        <path d="M31.49,0A31.5,31.5,0,1,0,63,31.49,31.49,31.49,0,0,0,31.49,0Zm0,61A29.5,29.5,0,1,1,61,31.49,29.5,29.5,0,0,1,31.49,61Zm0-57.5a28,28,0,1,0,28,28A28,28,0,0,0,31.49,3.49Zm-.26,25.45-.77,4.63H23.61L22.24,41.7H16.06l3.59-21.34h15l-.8,4.8H25l-.64,3.78ZM47.71,41.7H33.15l3.58-21.34H43.2L40.48,36.58h8.09Z">
        </path>
      </svg>
    </Fragment>
  )
}

export default Logo;
