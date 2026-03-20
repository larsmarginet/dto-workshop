const fetchDogs = async () => {
  const response = await fetch("/api/dogs.json");
  const data = await response.json();

  return data.data;
};

export { fetchDogs };
