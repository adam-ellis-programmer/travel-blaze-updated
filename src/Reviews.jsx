import { travelReviews } from './data'
import ReviewWithLoader from './ReviewWithLoader'
const Reviews = () => {
  return (
    <section className='reviews'>
      <h2 className='reviews-h2'>
        <span className='h2-heading'>What our customers say</span>
      </h2>

      <div className='reviews-container'>
        {travelReviews.map((item) => (
          <ReviewWithLoader key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Reviews
