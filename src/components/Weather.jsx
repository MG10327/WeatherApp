import React from 'react'
import './Weather.scss'

const Weather = () => {
  return (
    <div>
        <h1 className='weather'>
          <div className="search-bar">
            <input type="text" placeholder='Search'/>
            <img src="" alt="" />
          </div>
        </h1>
    </div>
  )
}

export default Weather