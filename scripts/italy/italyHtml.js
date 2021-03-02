export const cityCard = (cityObject) => {
    return `
    <section class= "citiesCard">
    <h4>${cityObject.name}<h4>
    <p>${cityObject.population}<p>
    <p>${cityObject.funFact}<p>
    </section>`
};

export const landmarkCard = (landmarkObject) => {
    return `
    <section class= "landmarksCard">
    <h4>${landmarkObject.name}<h4>
    <p>${landmarkObject.location}<p>
    </section>`
};

export const citizenCard = (citizenObject) => {
    return `
    <section class= "citizenCard">
    <h4>${citizenObject.name}<h4>
    <p>${citizenObject.occupation}<p>
    <p>${citizenObject.age}<p>
    </section>`
};