import { useEffect, useState } from 'react'
import './App.css'
import countryService from './Services/Services'
import TheList from './Components/ListComponent'
import TheOneCountry from './Components/OneCountryComponent'

function App() {
  const [countries, setCountries] = useState([])
  const [filtered,setFiltered] = useState('')
  const [weather, setWeather] = useState(null)
  const [lat, setWeatherLat] = useState('')
  const [lon, setWeatherLon] = useState('')
  const [loaded, setLoaded] = useState(false)
const loadPage = () => {
  countryService
  .getAll()
  .then(response => {
    setCountries(response.data)
})
}
useEffect(loadPage,[])

const filterHandler = (event) => {
  setFiltered(event.target.value)
}

const justFilteredCountries = countries.filter(country => country.name.common.toLowerCase().indexOf(filtered.toLowerCase()) > -1,)
console.log(justFilteredCountries.length)
if (justFilteredCountries.length > 10 || justFilteredCountries.length === 0) {
  return (
    <div>
        <div>
    Type the country you looking for: <input value={filtered} onChange={filterHandler}/>
  </div>
  <h2> too much or no one, keep writing</h2>
    </div>
  )
} else if ( justFilteredCountries.length < 10 && justFilteredCountries.length > 2){
  return (
    <div>
    <div>
      Type the country you looking for: <input value={filtered} onChange={filterHandler}/>
    </div>
   <ul>
   {justFilteredCountries.map((country) => <TheList name={country.name.common} key={country.population} setFiltered={setFiltered}/>)}
   </ul>
  </div>
  )
}
 else if ( justFilteredCountries.length === 1) {
  return (
    <div>
    <div>
      Type the country you looking for: <input value={filtered} onChange={filterHandler}/>
    </div> 
  <TheOneCountry setLoaded={setLoaded} loaded={loaded} lat={lat} setWeatherLat={setWeatherLat} lon={lon} setWeatherLon={setWeatherLon} weather={weather} setWeather={setWeather} key={justFilteredCountries[0].population} name={justFilteredCountries[0].name.common} capital={justFilteredCountries[0].capital} area={justFilteredCountries[0].area} languages={justFilteredCountries[0].languages} flag={justFilteredCountries[0].flags}/>
  </div>
  )
}
}


export default App
