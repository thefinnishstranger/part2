import React from "react"

const Result = ({ filteredCountries, showCountryDetails }) => {
    if (filteredCountries.length > 10) {
      return (
        <p>
          Too many matches, specify the filter
        </p>
      )
    } else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
      return (
        <ul>
          {filteredCountries.map((country, i) => 
            <li key={i}>
              {country.name.common} <button onClick={() => showCountryDetails(country)}>
                show
              </button>
            </li>
          )}
        </ul>
      )
    } else if (filteredCountries.length === 1) {
      const country = filteredCountries[0]
      const languages = Object.values(country.languages)
      
      return (
        <div>
          <h2>
            {country.name.common}
          </h2>
          <p>
            capital {country.capital}
          </p>
          <p>
            area {country.area} km^2
          </p>
          <ul>
            {languages.map((language, i) => 
              <li key={i}>
                {language}
              </li>
            )}
          </ul>
          <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="100" />
          
        </div>
      )
    } else {
      return null
    }
  }



export default Result
