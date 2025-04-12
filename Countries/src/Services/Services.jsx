import axios from "axios";
const weatherKey = import.meta.env.VITE_WEATHER_KEY
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'
const weatherGeoUrl=`http://api.openweathermap.org/geo/1.0/`
const weatherUrl=`http://api.openweathermap.org/data/2.5/`

const getAll = () => {
    return axios.get(`${baseUrl}api/all`)
}
const getOne = (name) => {
    return axios.get(`${baseUrl}api/name/${name}`)
}
const getWeatherGeo = (capital) => {
    return axios.get(`${weatherGeoUrl}direct?q=${capital}&limit=1&appid=${weatherKey}`)
}
const getWeather = ({lon, lat}) => {
    return axios.get (`${weatherUrl}weather?lat=${lat}&lon=${lon}&appid=${weatherKey}`)
}
//we could use the openweathermap option to get the weather just with the capital name, but lon and lat opens more posibilities if we want to update the app.
export default {getAll, getOne, getWeatherGeo, getWeather}