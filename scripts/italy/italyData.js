const cities = [
    {
        name: "Rome",
        population: "2.873 million",
        funFact: "Modern Rome has 280 fountains and more than 900 churches."
    },
    {
        name: "Venice",
        population: "261,905",
        funFact: "There are no cars in Venice."
    },
    {
        name: "Florence",
        population: "382,258",
        funFact: "Florence is the Capital City of the Region of Tuscany."
    }
];

const landmarks = [
    {
        name: "Colosseum",
        location: "Rome"
    },
    {
        name: "St. Mark's Basilica",
        location: "Northern Italy"
    },
    {
        name: "Cathedral of Santa Maria del Fiore",
        location: "Florence, Italy"
    }
]

const famousCitizens = [
    {
        name: "Gianluigi Buffon",
        occupation: "Athlete",
        age: 43
    },
    {
        name: "Monica Bellucci",
        occupation: "Model/Actress",
        age: 56
    },
    {
        name: "Joel McHale",
        occupation: "Actor",
        age: 49
    }
]

export const getCitiesData = () => {
return cities 
};

export const getLandmarksData = () => {
    return landmarks
};

export const getFamousCitizenData = () => {
    return famousCitizens
};
     