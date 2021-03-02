export const cityCard = (cityObject) => {
    return `
    <section class= "citiesCard">
    <h4>${cityObject.name}</h4>
    <p>Population: ${cityObject.population}</p>
    <p>Fun Fact: ${cityObject.funFact}</p>
    </section>`
};

export const landmarkCard = (landmarkObject) => {
    return `
    <section class= "landmarksCard">
    <h4>${landmarkObject.name}</h4>
    <p>${landmarkObject.location}</p>
    </section>`
};

export const citizenCard = (citizensObject) => {
    return `
    <section class= "citizensCard">
    <h4>${citizensObject.name}</h4>
    <p>Occupation: ${citizensObject.occupation}</p>
    <p>Age: ${citizensObject.age}</p>
    </section>`
};