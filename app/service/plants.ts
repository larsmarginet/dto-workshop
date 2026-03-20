import type { Plant } from "~/types/plants";
import type { PlantDTO } from "~/types/plants.dto";

const fetchPlants = async (): Promise<Plant[]> => {
  const response = await fetch("/api/plants.json");
  const data: { data: PlantDTO[] } = await response.json();

  return data.data.map((plant) => ({
    id: plant.id,
    image: {
      url: plant.image.url,
      alt: plant.image.alt,
      width: plant.image.width,
      height: plant.image.height,
    },
    name: plant.name,
    commonName: plant.commonName,
    type: plant.type,
    family: plant.family,
    fact: plant.fact,
  }));
};

export { fetchPlants };
