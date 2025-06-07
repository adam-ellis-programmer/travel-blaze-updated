// ImageWithLoader.jsx
import { useState } from 'react'

const ImageWithLoader = ({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const { id, url, countryName, fromPrice, moneyOff } = item

  return (
    <article key={id} className='country-card'>
      <div className='img-wrapper' style={{ position: 'relative' }}>
        {/* Loading spinner - only shows while loading */}
        {!imageLoaded && !imageError && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#e5e5e5',
              zIndex: 10,
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                border: '4px solid #d1d5db',
                borderTop: '4px solid #3b82f6',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            ></div>
          </div>
        )}

        {/* Your exact image structure */}
        <img
          src={url}
          alt=''
          className='country-img'
          style={{
            opacity: imageLoaded ? 1 : 0.3,
            transition: 'opacity 0.3s ease',
          }}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />

        {/* Error state */}
        {imageError && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f3f4f6',
              color: '#6b7280',
              zIndex: 10,
            }}
          >
            Failed to load
          </div>
        )}

        {/* Your exact card info structure */}
        <div className='card-info-div'>
          <h3>{countryName}</h3>
          <p>
            <span>From £{fromPrice}</span>
          </p>
        </div>

        <div className='offer-div'>
          <span>
            {moneyOff} % <br />
            Off
          </span>
        </div>
      </div>
    </article>
  )
}

export default ImageWithLoader
