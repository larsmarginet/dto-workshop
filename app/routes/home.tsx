import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import { Card } from "~/components/Card";

import type { Plant } from "~/types/plants";
import { fetchPlants } from "~/service/plants";
import { fetchDogs } from "~/service/dogs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [plants, setPlants] = useState<Plant[]>([]);

  const getPlants = async () => {
    setPlants(await fetchPlants());
  };

  useEffect(() => {
    getPlants();
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
            name={plant.name}
            image={plant.image}
            fact={plant.fact}
          />
        ))}
      </div>
    </div>
  );
}
