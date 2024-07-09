import { getRandomRecipes } from '@/services/home-service';
import HomePage from './components/HomePage';

export default async function page() {
  const recipesList = await getRandomRecipes();

  return (
    <>
      <HomePage recipeList={recipesList} />
    </>
  );
}
