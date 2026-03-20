import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import { Card } from "~/components/Card";

import { fetchPlants } from "~/service/plants";
import type { Plant } from "~/types/plants";
import type { Dog } from "~/types/dogs.";
import { fetchDogs } from "~/service/dogs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [dogs, setDogs] = useState<Dog[]>([]);

  const getPlants = async () => {
    setPlants(await fetchPlants());
  };

  const getDogs = async () => {
    setDogs(await fetchDogs());
  };

  useEffect(() => {
    getPlants();
    getDogs();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-10">
        My plant collection
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto my-10">
        {plants.map((plant) => (
          <Card
            key={plant.id}
            title={plant.name}
            image={plant.image}
            description={plant.fact}
            action={{
              callback: () => {
                console.log("🌱💦🪴");
              },
              label: "Water me",
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto my-10">
        {dogs.map((dog) => (
          <Card
            key={dog.id}
            title={dog.breed}
            image={dog.image}
            description={dog.summary}
            action={{
              callback: () => {
                window.open(dog.url, "_blank");
              },
              label: "More info",
            }}
          />
        ))}
      </div>
    </div>
  );
}
