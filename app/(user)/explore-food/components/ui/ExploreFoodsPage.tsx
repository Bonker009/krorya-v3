import FoodCard from '@/app/(user)/user/components/Foodcard';
import BreadCrumb from '@/components/breadcrumb';
import CategoryList from '@/components/categoryList';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Food } from '@/types';
import Image from 'next/image';
interface ExploreFoodsPageProps {
  initialFoods: Food[];
}
function ExploreFoodsPage({ initialFoods }: ExploreFoodsPageProps) {
  const breadcrumbItems = [{ title: 'Explore Foods', link: '/explore-food' }];

  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <CategoryList />
        <div className="mt-4 rounded-md bg-white p-4 shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex flex-row items-center gap-4">
              <Image alt="romdul" src="/romdul.svg" width={25} height={25} />
              <span className="">ម្ហូបពេញនិយម</span>
            </div>
          </div>
          <div className="grid grid-cols-4 place-items-center">
            {initialFoods?.map((food, index) => (
              <FoodCard key={food.food_id} {...food} />
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
export default ExploreFoodsPage;
