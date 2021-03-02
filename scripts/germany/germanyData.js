const cities = [
  {
    name: "Berlin",
    population: "3,645,000",
    funFact: "Berlin has the largest train station in Europe."
  },
  {
    name: "Munich",
    population: "1,472,000",
    funFact: "Munich is further north than any major US city"
  },
  {
    name: "Frankfurt",
    population: "753,056",
    funFact: "It is the home of the Frankfurter or hotdogs."
  }
];

const landmarks = [
  {
    name: "Cologne Cathedral",
    location: "Located in Cologne, North Rhine-Westphalia, Germany"
  },
  {
    name: "Brandenburg Gate",
    location: "Located in Berlin, Germany"
  },
  {
    name: "Eltz Castle",
    location: "Located above the Moselle River between Koblenz and Trier, Germany."
  }
]

const famousCitizens = [
  {
    name: "Adolf Hitler",
    occupation: "Was a dictator of Germany.",
    age: '56'
  },
  {
    name: "Albert Einstein",
    occupation: "Was a mathematician and scientist",
    age: '76'
  },
  {
    name: "Johann Wolfgang von Goethe",
    occupation: "Was a poet, playwright, and novelist",
    age: '82'
  }
]

export const getLandmarksData = () => {
  return landmarks;
}
export const getCitiesData = () => {
  return cities;
}
export const getFamousCitizenData = () => {
  return famousCitizens;
}

