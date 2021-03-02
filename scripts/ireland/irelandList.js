import { getCitiesData, getCitizenData, getLandmarkData } from "./irelandData.js";
import { cityCard, landmarkCard, citizenCard } from "./irelandHTML.js";

export const addCityDOM = () => {
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

export const addLandmarkDOM = () => {
    const landmarkElement = document.querySelector(".landmarks");
    let landmarkHTMLRep = "<h3>Landmarks</h3>";
    const landmarkArray= getLandmarkData();
    for(const landmark of landmarkArray) {
        landmarkHTMLRep += landmarkCard(landmark);
    };
    landmarkElement.innerHTML = landmarkHTMLRep;
};

export const addCitizenDOM = () => {
    const citizenElement = document.querySelector(".citizens");
    let citizenHTMLRep = "<h3>Famous Citizens</h3>";
    const citizenArray= getCitizenData();
    for(const citizen of citizenArray) {
        citizenHTMLRep += citizenCard(citizen);
    };
    citizenElement.innerHTML = citizenHTMLRep;
};