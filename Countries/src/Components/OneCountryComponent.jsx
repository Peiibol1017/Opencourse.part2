import { useEffect } from 'react'
import countryService from '../Services/Services'
const TheOneCountry = ({name, capital, area, languages, flag, weather, setWeatherLat, setWeather, setWeatherLon, lon, lat, setLoaded, loaded}) => {
    const languagesList = Object.values(languages)
useEffect(() =>{
    if (capital){
countryService
.getWeatherGeo(capital)
.then(response => {
    setWeatherLat(response.data[0].lat)
    setWeatherLon(response.data[0].lon)
})   
    } 
},[capital])
useEffect(() => {
    if (lon) {
    countryService
    .getWeather({lon,lat})
    .then(response =>{
        setWeather(response.data)
        setLoaded(true)
    })
    }
},[lon])
if (loaded) {
    return (
        <div>
            <h1>{name}</h1>
            <div>    
            <>CAPITAL: {capital}</>
            </div>
            <div>
            AREA: {area}
            </div>
            <h2>Languages</h2>
            <ul>
            {languagesList.map((l)=><li key={l}>{l}</li>)}
            </ul>
            <img src={flag.png} alt={flag.alt} height='150px' width='200px'/>
            <h2>weather in {name}</h2>
            <div>Actual temp: {weather.main.temp} ºF</div>
            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/>
            <div>Actual wind speed: {weather.wind.speed} m/s</div>
        </div>
    )}
}
export default TheOneCountry