import React, {useState,useEffect} from 'react';
import { } from 'reactstrap';
import "../styles/SearchForm.css";

const SearchForm = (props) =>{
    const [search, setSearch] = useState();
    
}



//!bing
https://dev.virtualearth.net/REST/v1/LocalSearch/?type={type_string_id_list}&userLocation={point}&key={BingMapsAPIKey}

https://dev.virtualearth.net/REST/v1/LocalSearch/?query={query}&userLocation={point}&key={BingMapsAPIKey}
https://dev.virtualearth.net/REST/v1/LocalSearch/?type=golf&userLocation=39.76838,-86.15804&key=Amzp_2nSaesZQQiTLAeeQI6tYyEd7V-AeVoxYvSECJd1dQOojOjhUzRYG0BPNje6

https://dev.virtualearth.net/REST/v1/LocalSearch/?query=coffee&userLocation=47.602038,-122.333964&key={BingMapsAPIKey}
https://dev.virtualearth.net/REST/v1/LocalSearch/?query={query}&userCircularMapView={lat,lon,radius}&key={BingMapsAPIKey}
https://dev.virtualearth.net/REST/v1/LocalSearch/?type=CoffeeAndTea&userLocation=47.602038,-122.333964&o=xml&key={BingMapsAPIKey}

//!bing

//?
https://api.opentripmap.com/0.1/en/places/geoname?name=${search}&apikey=${key}`
https://api.opentripmap.com/0.1/en/places/geoname?name=$indianapolis&apikey=$5ae2e3f221c38a28845f05b647f834925ea24e44fb12d1cbd631c42a

export default SearchForm;