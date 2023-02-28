import React from 'react'
//import rgbToHex from './utils'

const SingleColor = ({index, rgb, weight, hex}) => {
  const [ isAlert, setIsAlert ] = React.useState(false);
  const bcg = rgb.join(',');
  const hexValue = `#${hex}`;
  //const hex = rgbToHex(...rgb)
  const handleClick = () => {
    setIsAlert(true);
    navigator.clipboard.writeText(hexValue)
  }

  React.useEffect(() => {
    const timer = setTimeout(()=> {
      setIsAlert(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  },[isAlert])

  return (
  <article  className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}} onClick={handleClick}>
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{hexValue}</p>
    {isAlert && <p className={`alert ${index >10 && 'color-light'}`}>copied to clipboard</p>}
  </article>)
}

export default SingleColor
