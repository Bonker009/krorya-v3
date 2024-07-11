import { getRandomRecipes } from '@/services/home-service';
import HomePage from './components/HomePage';
import { getFoods } from '@/services/food-service';

export default async function page() {
  const recipesList = await getRandomRecipes();
  const foodsList = await getFoods();
  return (
    <>
      <HomePage recipeList={recipesList} foodsList={foodsList} />
    </>
  );
}
