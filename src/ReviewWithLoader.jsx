// Reviews.jsx
import { useState } from 'react'
import { travelReviews } from './data'

const ReviewWithLoader = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const { id, reviewText, name, url } = item

  return (
    <article key={id} className='review-card'>
      <div className='review-img-container'>
        <div className='review-img-wrapper'>
          {/* Loading spinner */}
          {!imageLoaded && !imageError && (
            <div className='review-img-loader'>
              <div className='review-spinner'></div>
            </div>
          )}

          <img
            className='review-img'
            src={url}
            alt=''
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            style={{
              opacity: imageLoaded ? 1 : 0.3,
              transition: 'opacity 0.3s ease',
            }}
          />

          {/* Error state */}
          {imageError && <div className='review-img-error'>Failed to load</div>}
        </div>
        <p className='review-name'>Written By: {name}</p>
      </div>
      <div className='review-text-container'>
        <p className='review-text'>{reviewText}</p>
        <div className='star-container'>
          <i className='fa-solid fa-star'></i>
          <i className='fa-solid fa-star'></i>
          <i className='fa-solid fa-star'></i>
          <i className='fa-solid fa-star'></i>
          <i className='fa-solid fa-star'></i>
        </div>
      </div>
    </article>
  )
}

export default ReviewWithLoader
