import React from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor ] = React.useState('');
  console.log(color)
  const [isError, setIsError] = React.useState(false);
  const [list, setList ] = React.useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(Values)
      let colors = new Values(color).all(10);
      setList([...colors])
      setIsError(false)
    } catch (error) {
      setIsError(true);
    }
  }
  return (
  <div>
  <div className='container'>
    <h3>Color Generator</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" value={color} placeholder="#FFFFFF" onChange={(e) => setColor(e.target.value)}className={`${isError?'error': null}`} />
      <button className='btn' type='submit'>generate</button>
    </form>
  </div>
  <section className="colors">
      {list.map((color, idx) => {
        return <SingleColor key={idx} {...color} index={idx} hex={color.hex} />
      })}
    </section>
  </div>)
}

export default App
