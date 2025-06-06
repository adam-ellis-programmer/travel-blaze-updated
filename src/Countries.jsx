import { countries } from './data'
console.log(countries)

const Countries = () => {
  return (
    <section className="countries-section">
      <h2>
        <span className="h2-heading">A few cool countries to visit</span>
      </h2>

      <div className="countries-wrapper">
        {countries.map((item) => {
          const { id, countryName, url, moneyOff, fromPrice } = item
          return (
            <article key={item.id} className="country-card">
              <div className="img-wrapper">
                <img src={url} alt="" className="country-img" />

                <div className="card-info-div">
                  <h3>{countryName}</h3>
                  <p>
                    <span>From £{fromPrice}</span>
                  </p>
                </div>

                <div className="offer-div">
                  <span>
                    {moneyOff} % <br />
                    Off
                  </span>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Countries
