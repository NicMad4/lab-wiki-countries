
import { useParams,Link } from "react-router-dom";
import countries from '../countries.json'

function CountryDetails () {
 
  const params = useParams();//es la funcion que llamo en linea 1 sirve para sacar la url.
  const codigo = params.id

//country es un array que guarda el metodo filter donde me busca y filtra la const codigo que es 
 const country= countries.filter((elem)=>{
    return elem.alpha3Code===codigo
 })
 console.log(country)
  return (
    <div id="targeta">
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country[0].alpha2Code.toLowerCase()}.png`} alt={country.name}></img>
    <h3>{country[0].name.common}</h3>
    <h4>Area: {country[0].area} Km²</h4>
    <h5>Borders</h5>
                            {country[0].borders.map((border) =>
                                <ul key={`${border}`}>
                                    <Link to={`/${border}`}>{border}</Link>
                                </ul>
                            )}
    </div>
  );
}

export default CountryDetails;
