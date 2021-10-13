import React,{useEffect, useState} from "react";
import icoLupa from './assets/lupa.svg';
import './searchBar.css';
import services from '../../services/services.js';


function SearchBar(){
    const axios = require('axios');
    const [countries , setCountries ]=useState([]);
    const [selectRegions , setSelectRegions ]=useState("");
    const [input , setInput ]=useState("");
    const [countriesOrinalResponse , setcountriesOrinalResponse ]=useState([]);
    

    function GetServices() {
        axios.get(services.endpoint+'/all', {
           })
           .then(function (response) {
             console.log(response.data);
             const countriesResponse= response.data;
             countriesResponse.sort((a,b)=>(a.name.common.localeCompare(b.name.common)));
             setCountries(countriesResponse);
             setcountriesOrinalResponse (countriesResponse);
           })
           .catch(function (error) {
             console.log(error);
           });
        }


    function ChangeRegion(event){
      console.log(event.target.value,"ENTRE");
      setSelectRegions(event.target.value);  
    }

    function Input(event){
      console.log(event.target.value);
      setInput(event.target.value);
    }

    function OnSearch(){
      const filterCountries=countriesOrinalResponse.filter((item)=>(item.name.common.includes(input)) || (item.region.includes(input)) )
      setCountries(filterCountries);
    }


    useEffect(()=>{
      GetServices();
    },
    []
    )


    return(
       <div className="container-searchbox">
           <select value={selectRegions} onChange={ChangeRegion} placeholder="Show All">
                <option value="">Show All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value ="Europe">Europe</option>
                <option value ="Oceania">Oceania</option>
                <option value="Asia">Asia</option>

           </select>
           <input className="input-searchbox" value={input} onChange={Input} placeholder="Search contry"></input>
           <img alt="" className="ico-lupa-searchbox" src={icoLupa} onClick={OnSearch}></img>
           { (selectRegions===""|| selectRegions==="Africa") && <div>
            <h2>Africa</h2>
            
            {countries.filter((item)=>(item.region==="Africa")).map(item =>(<h3> {item.name.common} </h3>))}
           </div>}
           { (selectRegions===""|| selectRegions==="Americas") && <div>
            
            <h2>Americas</h2>
            
            {countries.filter((item)=>(item.region==="Americas")).map(item =>(<h3> {item.name.common} </h3>))}
           </div>}
           {(selectRegions===""|| selectRegions==="Asia") && <div>
            <h2>Asia</h2>
            
            {countries.filter((item)=>(item.region==="Asia")).map(item =>(<h3> {item.name.common} </h3>))}
           </div>}
           {(selectRegions===""|| selectRegions==="Europe") && <div>
            <h2>Europe</h2>
            
            {countries.filter((item)=>(item.region==="Europe")).map(item =>(<h3> {item.name.common} </h3>))}
           </div>}

           {(selectRegions===""|| selectRegions==="Oceania") && <div>
            <h2>Oceania</h2>
            
            {countries.filter((item)=>(item.region==="Oceania")).map(item =>(<h3> {item.name.common} </h3>))}
           </div>}

       </div>
    )
}
export default SearchBar;