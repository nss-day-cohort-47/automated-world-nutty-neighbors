// Data Imports
import {getCitiesData, getLandmarksData, getFamousCitizensData} from "./newzealandData.js"
// Html imports
import {cityCard, landmarkCard, citizenCard} from "./newzealandHtml.js";


// adding to the Dom

export const addCityDom = () => {
    const cityElement = document.querySelector(".cities");
    let cityHTMLRep = "<h3>Cities</h3>";
    const cityArray = getCitiesData();
    for(const city of cityArray) {
        cityHTMLRep += cityCard(city)
    }
        cityElement.innerHTML = cityHTMLRep;
};

export const addLandmarksDom = () => {
    const landmarksElement = document.querySelector(".landmarks")
    let landmarksHTMLRep = "<h3>landmarks</h3>";
    const landmarksArray= getLandmarksData();
    for(const landmarks of landmarksArray) {
        landmarksHTMLRep += landmarkCard(landmarks)
    }
        landmarksElement.innerHTML = landmarksHTMLRep;


}

export const addCitizenDom = () => {
    const famousCitizensElement = document.querySelector(".citizens");
    let famousCitizensHTMLRep = "<h3>famousCitizens</h3>";
    const famousCitizensArray = getFamousCitizensData();
    for(const famousCitizens of famousCitizensArray) {
        famousCitizensHTMLRep += citizenCard(famousCitizens)
    }
        famousCitizensElement.innerHTML = famousCitizensHTMLRep;
}