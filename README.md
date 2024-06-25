# Countries API

- The Countries API provides comprehensive information about countries around the world, including details such as names, capitals, populations, languages, and more.

## Base URL

`[https://restcountries.com/v3.1/name/{india}]`

## Endpoints

Get All Countries

- Endpoint: GET /countries
- Description: Returns a list of all countries with basic details.
- Response Example:
  [
  {
  "name": "Afghanistan",
  "alpha2Code": "AF",
  "alpha3Code": "AFG",
  "capital": "Kabul",
  "region": "Asia",
  "subregion": "Southern Asia",
  "population": 27657145
  },
  ...
  ]

## Get Country by Code

- Endpoint: GET /countries/{code}
- Description: Returns details of a country specified by its alpha-2 or alpha-3 code.
- Path Parameters: code (required): The alpha-2 or alpha-3 code of the country.

## Search Countries by Name

- Endpoint: GET /countries/search
- Description: Search for countries by name.
- Query Parameters: name (required): The name or partial name of the country.
- Response Example:
  [
  {
  "name": "Thailand",
  "alpha2Code": "TH",
  "alpha3Code": "THA",
  "capital": "Bangkok",
  "region": "Asia",
  "subregion": "South-Eastern Asia",
  "population": 65327652
  },
  {
  "name": "Switzerland",
  "alpha2Code": "CH",
  "alpha3Code": "CHE",
  "capital": "Bern",
  "region": "Europe",
  "subregion": "Western Europe",
  "population": 8372098
  }
  ]

## Get Countries by Region

- Endpoint: GET /countries/region/{region}
- Description: Returns a list of countries in a specified region.
- Path Parameters: region (required): The region name (e.g., Europe, Asia, Africa).
- Response Example:
  [
  {
  "name": "France",
  "alpha2Code": "FR",
  "alpha3Code": "FRA",
  "capital": "Paris",
  "region": "Europe",
  "subregion": "Western Europe",
  "population": 66710000
  },
  ...
  ]

# Error Handling

- The API uses standard HTTP status codes to indicate the success or failure of an API request
