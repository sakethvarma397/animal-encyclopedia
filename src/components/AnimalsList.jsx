import React from "react";

function AnimalGroups({ selected, animals, onChange }) {
  return (
    <div
      className={"p-4 rounded flex-col justify-center w-60 mt-20 border-r-2"}
    >
      {animals.map((animal) => (
        <div
          className={`${
            selected === animal ? "bg-cyan-300" : "bg-cyan-100"
          } rounded h-6 my-1  w-full p-6 text-xl text-left flex items-center gap-3`}
          key={animal}
          onClick={() => onChange(animal)}
        >
          <div>{animal}</div>
        </div>
      ))}
    </div>
  );
}

export default AnimalGroups;
