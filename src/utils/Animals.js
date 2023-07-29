export const addUserStateToSpecies = (speciesArray, localStorageValue) => {
  return speciesArray?.map((species) => ({
    ...species,
    favouriteTraits: localStorageValue.species[species.name]
      ? [...localStorageValue.species[species.name]]
      : [],
  }));
};

export const modifyFavourites = (currentFavourites, newItem) => {
  const { name, toAdd } = newItem;
  let newFavourites;
  if (currentFavourites.includes(name) && !toAdd) {
    newFavourites = currentFavourites.filter((item) => item !== name);
  } else if (!currentFavourites.includes(name) && toAdd) {
    newFavourites = [...currentFavourites, name];
  } else {
    newFavourites = currentFavourites;
  }
  return newFavourites;
};
