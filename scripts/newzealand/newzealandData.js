const cities = [
    {
        name: "Auckland",
        population: "1,470,100",
        funFact: "Auckland is home to over 50 volcanoes."
    },
    {
        name: "Christchurch",
        population: "394,700",
        funFact: "The oldest bridge in NZ. It's in Victoria Square"
    },
    {
        name: "Wellington",
        population: "215,100",
        funFact: "Is the southernmost capital in the world.."
    }
];

const landmarks = [
    {
        name: "The Sky Tower",
        location: "Auckland"
    },
    {
        name: "Moeraki Boulders",
        location: "Otago coast on the South Island of New Zealand"
    },
    {
        name: "Tokatoka Peak",
        location: "Tokatoka Peak is in Northland"
    }
]

const famousCitizens = [
    {
        name: "Sir Peter Jackson",
        occupation: "Director",
        age: 59
    },
    {
        name: "Taika Waititi",
        occupation: "Director",
        age: 45
    },
    {
        name: "Lorde",
        occupation: "Singer",
        age: 24
    }
];

export const getCitiesData = () => {
    return cities;
};

export const getLandmarksData = () => {
    return landmarks;
};

export const getFamousCitizensData = () => {
    return famousCitizens;
}