import { getCitiesData } from "./irelandData.js";
import { cityCard } from "./irelandMain.js";

const addCityDOM = () => {
    // Get a reference to the location on the DOM you want to display the list of cities
    const cityElement = document.querySelector(".cities");
    // create a variable to store the HTML representation in
    let cityHTMLRep = "<h3>Cities</h3>";
    // get the city array
    const cityArray= getCitiesData();
    // loop over the city array
    for(const city of cityArray) {
        cityHTMLRep += cityCard(city);
        
    };
    // set the DOM equal to the variable containing fish html representation
    cityElement.innerHTML = cityHTMLRep;
};