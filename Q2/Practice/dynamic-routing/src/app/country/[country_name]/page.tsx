export default function CountryName({ params }: any) {

  const countries: { //array of objects
    name: string;
    population: number;
    capital: string;
  }[] = [
    {
      name: "Pakistan",
      population: 216000000,
      capital: "Islamabad",
    },
    {
      name: "India",
      population: 4573475656456,
      capital: "Delhi",
    },
    {
      name: "Japan",
      population: 7565666,
      capital: "XYZ",
    },
  ];


  function findCountry(country_url:string){
        return countries.find(country=> country.name.toLowerCase() == country_url.toLowerCase());
  }

  let result = findCountry(params.country_name);

  return (
    <div>
        {
            result ? (
                <>
                    <h1>Country Name: {result.name}</h1>
                    <h1>Country Capital: {result.capital} </h1>
                    <h1>Country Population: {result.population}</h1>
                </>
            ) : (
                    <h1>{params.country_name} Not Found</h1>
            )
        }
      
    </div>
  );
}
