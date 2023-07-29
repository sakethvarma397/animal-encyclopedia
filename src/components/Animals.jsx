import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSpecies } from "../api/index";
import SpeciesCard from "./SpeciesCard";
import useLocalStorage from "../hooks/useLocalStorage";
import { useState } from "react";
import { addUserStateToSpecies, modifyFavourites } from "../utils/Animals";

function Animals({ animal }) {
  const [localValue, setLocalValue] = useLocalStorage(animal, {
    favourites: [],
    species: {},
  });
  const [showFavourites, setShowFavourites] = useState(false);
  const { isLoading, data } = useQuery([animal], () => fetchSpecies(animal));

  const setFavouriteSpecies = (name, isFavourite) => {
    setLocalValue({
      ...localValue,
      favourites: modifyFavourites(localValue.favourites, {
        name,
        toAdd: isFavourite,
      }),
    });
  };

  const setFavouriteTraits = (speciesName, favourites) => {
    setLocalValue({
      ...localValue,
      species: {
        ...localValue.species,
        [speciesName]: favourites,
      },
    });
  };

  const animalSpecies = showFavourites
    ? data.filter((species) => localValue.favourites.includes(species.name))
    : data;
  const enhancedSpecies = addUserStateToSpecies(animalSpecies, localValue);

  return (
    <div className="flex-col text-center p-4">
      <div className=" text-xl flex space-between p-6 justify-center">
        <div
          onClick={() => setShowFavourites(false)}
          className={`${
            showFavourites ? "bg-cyan-100" : "bg-cyan-300"
          } p-3 rounded rounded-r-none`}
        >
          All species
        </div>
        <div
          onClick={() => setShowFavourites(true)}
          className={`${
            showFavourites ? "bg-cyan-300" : "bg-cyan-100"
          } p-3 rounded rounded-l-none`}
        >
          My favourites
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-rows-3">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {enhancedSpecies.map((species) => (
              <SpeciesCard
                key={species.name}
                species={species}
                markFavourite={setFavouriteSpecies}
                isFavourite={localValue.favourites.includes(species.name)}
                setFavouriteTraits={setFavouriteTraits}
              ></SpeciesCard>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Animals;
