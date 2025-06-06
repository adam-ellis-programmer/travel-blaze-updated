import { travelReviews } from './data'

const Reviews = () => {
  return (
    <section className="reviews">
      <h2 className="reviews-h2">
        <span className="h2-heading">What our customers say</span>
      </h2>

      <div className="reviews-container">
        {travelReviews.map((item) => {
          const { id, reviewText, name, url } = item

          return (
            <article key={id} className="review-card">
              <div className="review-img-container">
                <img className="review-img" src={url} alt="" />
                <p className="review-name">Written By: {name}</p>
              </div>
              <div className="review-text-container">
                <p className="review-text">{reviewText}</p>
                <div className="star-container">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Reviews
