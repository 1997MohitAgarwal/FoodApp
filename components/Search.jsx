import React from "react";
import { useState, useEffect } from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

export default function Search() {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSearch() {
    setValue1(value);
  }

  const url = `https://edamam-recipe-search.p.rapidapi.com/search?q=${value1}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "13fbf5fb4cmshe5434ba75767937p101de4jsnbb4b3cf53777",
      "X-RapidAPI-Host": "edamam-recipe-search.p.rapidapi.com",
    },
  };

  async function fetch_data() {
    try {
      setError(false); // Reset error state before API call
      const data = await fetch(url, options);
      const parsedData = await data.json();

      // Check if there are too many requests or if the API key is invalid
      if (!data.ok) {
        throw new Error("API Limit Exceeded or Invalid API Key");
      }

      setResults(parsedData.hits);
    } catch (err) {
      setError(true);
      setTimeout(() => {
        setError(false); // Remove the error message after 3 seconds
      }, 5000);
    }
  }

  useEffect(() => {
    if (value1) {
      fetch_data();
    }
  }, [value1]);

  return (
    <>
      <div className="searchcontainer">
        <img
          className="widthset"
          src="pexels-lucie-liz-3193647.jpg"
          width="400"
          alt="Recipe Ingredients"
        ></img>
        <div className="flex flex-col items-right p-4 innercontainer">
          <p className="text-gray-100 text text-3xl textnew">
            What can I make with..... ??
          </p>
          <p className="text-gray-100 text text-lg textnew mt-4">
            Got a few slices of leftover bread, an odd onion in your cupboard
            and some milk in the fridge? Our recipe finder tool will show you
            all the things you can make, so none of your food goes to waste,
            with only the main ingredient needed. Type the ingredient you want
            to use up in the search box and pick the best match.
          </p>
          <div className="h-12 flex mt-8">
            <input
              onChange={handleChange}
              value={value}
              className="px-4 py-3 bg-transparent border-2 border-white rounded-md textnew focus:outline-none text-white placeholder:text-white"
              type="text"
              placeholder="Enter Ingredient"
            ></input>
            <a>
              <button
                onClick={handleSearch}
                className="ml-3 h-12 px-2 border-2 border-white focus:outline-none rounded-md"
              >
                🔍
              </button>
            </a>
          </div>
          {error && (
            <div className="mt-4 text-red-500 text-sm">
              API limit exceeded or server error. Please try again later.
            </div>
          )}
        </div>
      </div>

      <div
        id="searchdata"
        className="grid grid-cols-2 lg:grid-cols-5 background"
      >
        {results?.map((item, index) => (
          <Card className="touch" key={index}>
            <CardBody className="overflow-hidden">
              <Image
                width="100%"
                alt={item.recipe.label}
                className="w-full rounded-md object-fit bg-center"
                src={item.recipe.image}
              />
              <p className="text-center font-semibold text-gray-700 mt-3">
                {item.recipe.label}
              </p>
              <a className="mx-auto" href={item.recipe.url} target="_blank">
                <button className="mt-2 text-sm focus:outline-none bg-green-500 text-white py-1 px-4 rounded-md">
                  Show Recipe
                </button>
              </a>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}
