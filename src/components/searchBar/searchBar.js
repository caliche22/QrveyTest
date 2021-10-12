import React from "react";
import icoLupa from './assets/lupa.svg';
import './searchBar.css';
import services from '../../services/services.js';


function searchBar(){
    const axios = require('axios');


    function GetServices() {
        axios.get(services.endpoint+'/all', {
           })
           .then(function (response) {
             console.log(response.data);
           })
           .catch(function (error) {
             console.log(error);
           });
        }
  

    return(
       <div className="container-searchbox">
           <select className="select-searchbox" placeholder="Show All">
                <option>Show All</option>
           </select>
           <input className="input-searchbox" placeholder="Search contry"></input>
           <img alt="" className="ico-lupa-searchbox" src={icoLupa} onClick={ GetServices}></img>
       </div>
    )
}
export default searchBar;