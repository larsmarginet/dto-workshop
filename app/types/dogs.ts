export type DogNumericRange = {
  min: number;
  max: number;
};

export type DogImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type DogCharacteristics = {
  size: string;
  weightKg: DogNumericRange;
  heightCm: DogNumericRange;
  coat: string;
  colors: string[];
  temperament: string[];
  lifespanYears: DogNumericRange;
  exerciseNeeds: string;
  shedding: string;
  goodWithChildren: boolean;
  goodWithOtherPets: boolean | string;
  brachycephalic?: boolean;
};

export type DogAttributes = {
  name: string;
  url: string;
  breed: string;
  breedType: string;
  image: DogImage;
  characteristics: DogCharacteristics;
  summary: string;
};

export type DogBreedGroupRef = {
  type: "breedGroup";
  id: string;
};

export type Dog = {
  id: string;
  type: "dog";
  attributes: DogAttributes;
  relationships: {
    breedGroup: {
      data: DogBreedGroupRef;
    };
  };
};
