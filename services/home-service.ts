export async function getRandomRecipes() {
  try {
    const response = await fetch(`http://34.142.187.76:8080/api/v1/recipes/random`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.payload;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to fetch random recipes:', error);
    throw error;
  }
}
