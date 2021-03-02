// Data Imports  
import { getCitiesData, getLandmarksData, getFamousCitizenData } from "./italyData.js";
// Html imports
import { cityCard, landmarkCard, citizenCard } from "./italyHtml.js";

// adding to the DOM

export const addCityDom = () => {
    const cityElement = document.querySelector(".cities");
    let cityHTMLRep = "<h3>Cities</h3>";
    const cityArray = getCitiesData();
    for(const city of cityArray) {
        cityHTMLRep += cityCard(city)
    }
    cityElement.innerHTML = cityHTMLRep;
};

export const addLandmarkDom = () => {
    const landmarkElement = document.querySelector(".landmarks");
    let landmarkHTMLRep = "<h3>Landmarks</h3>";
    const landmarkArray = getLandmarksData();
    for(const landmark of landmarkArray) {
        landmarkHTMLRep += landmarkCard(landmark)
    }
    landmarkElement.innerHTML = landmarkHTMLRep;
};

export const addCitizenDom = () => {
    const citizenElement = document.querySelector(".citizens");
    let citizenHTMLRep = "<h3>Famous Citizens</h3>";
    const citizenArray = getFamousCitizenData();
    for(const citizen of citizenArray) {
        citizenHTMLRep += citizenCard(citizen)
    }
    citizenElement.innerHTML = citizenHTMLRep;
}

