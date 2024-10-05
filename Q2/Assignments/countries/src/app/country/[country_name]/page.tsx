import "@/app/globals.css";
import Link from "next/link";

export default function CountryName({ params }: any) {
  let countries: {
    name: string;
    population: number;
    capital: string;
  }[] = [
    {
      name: "Pakistan",
      population: 2166,
      capital: "Islamabad",
    },
    {
      name: "India",
      population: 765464,
      capital: "Delhi",
    },
  ];

  function findCountry(name: string): any {
    return countries.find(
      (country) => name.toLowerCase() == country.name.toLowerCase()
    );
  }

  let result = findCountry(params.country_name);

  return (
    <div>
      <div>
        {result ? (
          <>
            <h1>Country Name: {result.name}</h1>
            <h1>Country Population: {result.population}</h1>
            <h1>Country Capital: {result.capital}</h1>
          </>
        ) : (
          <h1>
            {params.country_name} not found in the database. Please check the
            parameter name in the URL.
          </h1>
        )}
      </div>
      <div>
        <li className="cust_button">
          <Link className="" href="/">
          Back
          </Link>
        </li>
        
      </div>
    </div>
  );
}
