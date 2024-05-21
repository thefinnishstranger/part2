import { useEffect, useState } from 'react'
import './App.css'
import axios, { all } from 'axios'
import Result from './components/Result'

function App() {
    const [search, setSearch] = useState('')
    const [allCountries, setAllCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
    
    useEffect(() => {
      axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(response => {
          setAllCountries(response.data)
        })
        .catch((error) => {
          console.error('Error: ', error)
        })
    }, [])

    useEffect(() => {
      if (search) {
        const filteredSearch = allCountries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
        setFilteredCountries(filteredSearch)
      } else {
        setFilteredCountries([])
      }
      
    }, [search, allCountries])

    const handleSearch = (event) => {
      setSearch(event.target.value)
      setSelectedCountry(null)
    }
    
    const showCountryDetails = (country) => {
      setSelectedCountry(country)
    }

    const fullCountryDetails = () => {
      if (!selectedCountry) {
        return null
      }
      const country = selectedCountry
      const languages = Object.values(country.languages)

      return (
        <div>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area} km²</p>
        <h3>Languages:</h3>
        <ul>
          {languages.map((language, i) => (
            <li key={i}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="100" />
      </div>
    )
      
    }

  return (
    <div>
      <div>
        find countries <input 
        value={search}
        onChange={handleSearch} 
        />
      </div>

      <Result filteredCountries={filteredCountries} showCountryDetails={showCountryDetails}/>
      {fullCountryDetails()}
    </div>
  )
}

export default App
