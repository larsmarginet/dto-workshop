import type { Dog } from "~/types/dogs.";
import type { DogDTO } from "~/types/dogs.dto";

const fetchDogs = async (): Promise<Dog[]> => {
  const response = await fetch("/api/dogs.json");
  const data: { data: DogDTO[] } = await response.json();

  return data.data.map((dog) => ({
    id: dog.id,
    image: {
      url: dog.attributes.image.src,
      alt: dog.attributes.image.alt,
      width: dog.attributes.image.width,
      height: dog.attributes.image.height,
    },
    name: dog.attributes.name,
    breed: dog.attributes.breed,
    summary: dog.attributes.summary,
    url: dog.attributes.url,
  }));
};

export { fetchDogs };
