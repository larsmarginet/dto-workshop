const fetchPlants = async () => {
  const response = await fetch("/api/plants.json");
  const data = await response.json();

  return data.data;
};

export { fetchPlants };
