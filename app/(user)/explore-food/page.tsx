import { getFoods } from '@/services/food-service';
import ExploreFoodsPage from './components/ui/ExploreFoodsPage';

export default async function Page() {
  const foodsList = await getFoods();

  return (
    <>
      <ExploreFoodsPage initialFoods={foodsList} />
    </>
  );
}
