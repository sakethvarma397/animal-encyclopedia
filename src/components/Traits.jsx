import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Trait = ({ content, isLiked, onReact }) => {
  return (
    <div className="flex-row items-center bg-cyan-100 m-2 p-2 rounded-md">
      {content}
      {content && (
        <span className="pl-2" onClick={() => onReact(!isLiked)}>
          {isLiked ? (
            <AiFillHeart className="inline" />
          ) : (
            <AiOutlineHeart className="inline" />
          )}
        </span>
      )}
    </div>
  );
};

export const Traits = ({ traits, onReact, favourites }) => {
  const { slogan, most_distinctive_feature, top_speed, name_of_young } =
    traits || {};
  return (
    <div className="">
      {slogan && (
        <Trait
          content={slogan}
          isLiked={favourites.includes("slogan")}
          onReact={(isLiked) => onReact("slogan", isLiked)}
        />
      )}
      {most_distinctive_feature && (
        <Trait
          content={most_distinctive_feature}
          isLiked={favourites.includes("most_distinctive_feature")}
          onReact={(isLiked) => onReact("most_distinctive_feature", isLiked)}
        />
      )}
      {name_of_young && (
        <Trait
          content={name_of_young}
          isLiked={favourites.includes("name_of_young")}
          onReact={(isLiked) => onReact("name_of_young", isLiked)}
        />
      )}
      {top_speed && (
        <Trait
          content={top_speed}
          isLiked={favourites.includes("top_speed")}
          onReact={(isLiked) => onReact("top_speed", isLiked)}
        />
      )}
    </div>
  );
};
