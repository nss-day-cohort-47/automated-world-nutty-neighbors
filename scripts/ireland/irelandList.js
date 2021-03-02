import { getCitiesData } from "./irelandData.js";
import { cityCard } from "./irelandMain.js";

const addCityDOM = () => {
    // Get a reference to the location on the DOM you want to display the list of cities
    const cityElement = document.querySelector(".cities");
    // create an empty string to store the HTML representation in
    let cityHTMLRep = "<h3>Cities</h3>";
    
    const cityArray= getCitiesData();
    for(const city of cityArray) {
        cityHTMLRep += cityCard(city);
        
    };
    cityElement.innerHTML = cityHTMLRep;
};