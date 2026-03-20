export type DogNumericRangeDTO = {
  min: number;
  max: number;
};

export type DogImageDTO = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type DogCharacteristicsDTO = {
  size: string;
  weightKg: DogNumericRangeDTO;
  heightCm: DogNumericRangeDTO;
  coat: string;
  colors: string[];
  temperament: string[];
  lifespanYears: DogNumericRangeDTO;
  exerciseNeeds: string;
  shedding: string;
  goodWithChildren: boolean;
  goodWithOtherPets: boolean | string;
  brachycephalic?: boolean;
};

export type DogAttributesDTO = {
  url: string;
  name: string;
  breed: string;
  breedType: string;
  image: DogImageDTO;
  characteristics: DogCharacteristicsDTO;
  summary: string;
};

export type DogBreedGroupRefDTO = {
  type: "breedGroup";
  id: string;
};

export type DogDTO = {
  id: string;
  type: "dog";
  attributes: DogAttributesDTO;
  relationships: {
    breedGroup: {
      data: DogBreedGroupRefDTO;
    };
  };
};
