export type Plant = {
  id: string;
  name: string;
  commonName: string;
  type: string;
  family: string;
  image: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  fact: string;
  nativeRegion: string;
  care: {
    light: string;
    water: string;
  };
};
