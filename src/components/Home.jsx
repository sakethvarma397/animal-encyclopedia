import React, { useState } from "react";
import axios from "axios";
import AnimalsList from "./AnimalsList.jsx";
import Animals from "./Animals.jsx";

const mockAnimals = [
  "Elephant",
  "Cheetah",
  "Fox",
  "Tiger",
  "Lion",
  "Giraffe",
  "Horse",
  "Monkey",
  "Sloth",
  "Panda",
  "Bear",
];

function Home() {
  const [animal, setAnimal] = useState(mockAnimals[0]);

  return (
    <div>
      <div className="border-1 border-cyan-700 flex gap-10 bg-cyan-50">
        <AnimalsList
          animals={mockAnimals}
          onChange={setAnimal}
          selected={animal}
        />
        <Animals animal={animal} />
      </div>
    </div>
  );
}

export default Home;
