import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { modifyFavourites } from "../utils/Animals";
import { Traits } from "./Traits";

const SpeciesCard = ({
  species,
  isFavourite,
  markFavourite,
  setFavouriteTraits,
}) => {
  const { name, characteristics, favouriteTraits } = species;

  const onTraitReact = (trait, isLiked) => {
    setFavouriteTraits(
      name,
      modifyFavourites(favouriteTraits, { name: trait, toAdd: isLiked })
    );
  };

  const onSpeciesReact = () => {
    markFavourite(name, !isFavourite);
  };

  return (
    <div className="w-72 h-80 flex-col text-start border-1 border-stone-500 rounded-md bg-cyan-300 p-6 overflow-auto">
      <div className="flex items-center justify-between">
        <span className="text-xl pl-2 pt-1 pr-1">{name}</span>
        <span className="pr-1" onClick={onSpeciesReact}>
          {isFavourite ? (
            <AiFillHeart className="text-red-500 text-lg" />
          ) : (
            <AiOutlineHeart />
          )}
        </span>
      </div>
      <Traits
        name={name}
        traits={characteristics}
        favourites={favouriteTraits}
        onReact={onTraitReact}
      />
    </div>
  );
};

export default SpeciesCard;
