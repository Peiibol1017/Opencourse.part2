import countryService from '../Services/Services.jsx'
import { useState, useEffect } from 'react'
const TheOneCountry = (name) => {
    const [country, setCountry] = useState({})
    console.log(name.name)
    useEffect(() => {
    countryService
    .getOne(name.name)
    .then(response => { 
    setCountry(response.data)
})
}, [name])
    return (
        <div>
            <h1>{name.name}</h1>
            <div>    
            {country.capital}
            {country.area}
            </div>
            <h2>Languages</h2>
        </div>
    )
}
export default TheOneCountry