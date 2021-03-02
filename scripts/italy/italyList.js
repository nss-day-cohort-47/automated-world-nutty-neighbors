// Data Imports  
import { getCitiesData, getLandmarksData, getFamousCitizenData } from "./italyData.js";
// Html imports
import { cityCard, landmarkCard, citizenCard } from "./italyHtml.js";

// adding to the DOM

export const addCityDom = () => {
    const cityElement = document.querySelector(".cities");
    let cityHTMLRep = "<h3>Cities</h3>";
    const cityArray= getCitiesData();
    for(const city of cityArray) {
        cityHTMLRep += cityCard(city)
    }
    cityElement.innerHTML = cityHTMLRep;
};

const addLandmarkDom = () => {
    const cityElement = document.querySelector(".cities");
    let cityHTMLRep = "<h3>Landmarks</h3>";
    

}

const addCitizenDom = () => {
    const cityElement = document.querySelector(".cities");
    let cityHTMLRep = "<h3>Famous Citizens</h3>";
}

