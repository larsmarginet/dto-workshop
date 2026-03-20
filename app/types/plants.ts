import type { Image } from "./shared";

export type Plant = {
  id: string;
  image: Image;
  name: string;
  commonName: string;
  type: string;
  family: string;
  fact: string;
};
