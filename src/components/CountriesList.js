import countries from '../countries.json'
import { Link } from 'react-router-dom'
function CountriesList() {
    return (
        <div>
            {countries
                .map((country) => (
                   
                        <Link to={`/${country.alpha3Code}`}>
                           
                                
                                    <h5>{country.name.common}</h5>
                              
                         
                        </Link>
                  
                ))}
        </div>
    )
}
export default CountriesList