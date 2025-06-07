import { countries } from './data'
import ImageWithLoader from './ImageWithLoader'

console.log(countries)
// countries-section
const Countries = () => {
  return (
    <div className='countries-container'>
      {countries.map((item) => (
        <ImageWithLoader key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Countries
