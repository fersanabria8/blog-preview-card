import React from 'react'
import imagen1 from '../assets/images/illustration-article.svg'
import imagen2 from '../assets/images/image-avatar.webp'

const Card = () => {
  return (
    <div className='container'>
      <div className="card">
        <div className='imagen'>
          <img src={imagen1} alt="imagen1" />
        </div>
        <div className="text">
          <h3 className='title-1'>
            Learning
          </h3>
          <p>
            Published 21 Dec 2023
          </p>
          <h2 className='title-2'>
            HTML & CSS foundations
          </h2>
          <p className='phrase'> 
            These languages are the backbone of every website, defining structure, content, and presentation.
          </p>
        </div>
        <div className="autor">
          <img src={imagen2} alt="imagen2" />
          <p className='autor-text'>
            Greg Hooper
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card