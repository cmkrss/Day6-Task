fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {

    //A) Get all the countries from Asia continent/region using filter function
    const asiaCountries = data.filter((country) =>
      country.continents.includes('Asia')
    );
    console.log('Countries from Asia:', asiaCountries);

    //B) Get all the countries with a population of less than 2 lakhs using filter function
    const countriesWithLowPopulation = data.filter(
      (country) => country.population < 200000
    );
    console.log('Countries with a population of less than 2 lakhs:', countriesWithLowPopulation);

    //C) Print the name, capital, and flag of each country using forEach function
    data.forEach((country) => {
      console.log(`Country: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.svg}`);
    });

    //D) Calculate the total population of countries using reduce function
    const totalPopulation = data.reduce(
      (acc, country) => acc + country.population,0);
    console.log('Total population:', totalPopulation);

    //E) Find the country that uses US dollars as currency
    const countryWithUSD = data.find((country) =>
      Object.values(country.currencies).includes('USD')
    );
    console.log('Country that uses USD:', countryWithUSD);
    
  })
  .catch((error) => console.log('Error fetching data:', error));
