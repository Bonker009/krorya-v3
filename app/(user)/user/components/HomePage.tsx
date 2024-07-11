import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';
import { categories } from '@/lib/category-data';
import CategoryCard from './CategoryCard';
import RecipeCard from './RecipeCard';
import FoodCard from './Foodcard';
import { Food, Recipe } from '@/types';
interface HomePageProps {
  foodsList: Food[];
  recipeList: Recipe[];
}
const HomePage = ({ recipeList, foodsList }: HomePageProps) => {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div
          className={'w-full overflow-hidden rounded-md  bg-white shadow-md'}
        >
          <div className="flex items-center justify-between">
            <div className="w-1/2 min-w-0 p-4">
              <h1 className="text-gradient text-4xl font-bold">
                ស្វាគមន៍មកកាន់ក្រយា
              </h1>
              <p className="my-4">
                ម្ហូបខ្មែរ មានច្រើនសណ្ឋានដូចជា ស្ល ឆា ចៀន ស្ងោរ ជាដើម
                និងមានរសជាតិប្លែកៗពីគ្នា។
              </p>
              <Link
                href="#"
                className="rounded-md bg-main px-4 py-2 text-white"
              >
                ស្វែងរកមុខម្ហូប
              </Link>
            </div>
            <div className="relative h-[200px] w-1/2 min-w-0 p-4">
              <Image
                src="/hero-image.jpg"
                alt="hero image"
                fill={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid h-full w-full grid-cols-12 gap-4  ">
          <div className="col-span-9 ">
            <div className="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    alt="romdul"
                    src="/romdul.svg"
                    width={25}
                    height={25}
                  />
                  <span className="">បញ្ជីមុខម្ហូប</span>
                </div>
                <Link href={'#'} className="text-main">
                  មើលទាំងអស់
                </Link>
              </div>
              <div className="flex items-center justify-between">
                {categories.map((category) => (
                  <CategoryCard {...category} key={category.categoryId} />
                ))}
              </div>
            </div>
            <div className="mt-4 rounded-md bg-white p-4 shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    alt="romdul"
                    src="/romdul.svg"
                    width={25}
                    height={25}
                  />
                  <span className="">ម្ហូបពេញនិយម</span>
                </div>
                <Link href={'#'} className="text-main">
                  មើលទាំងអស់
                </Link>
              </div>
              <div className="grid grid-cols-4">
                {foodsList?.map((food, index) => (
                  <FoodCard key={food.food_id} {...food} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-3 rounded-md bg-white p-4 shadow-md">
            <div className="flex w-full flex-col  items-center justify-between gap-y-4">
              <div className="flex w-full flex-row items-center gap-4">
                <Image alt="romdul" src="/romdul.svg" width={25} height={25} />
                <span className="">រូបមន្តមុខម្ហូប</span>
              </div>
              <div className="flex w-full  flex-col items-center  justify-between gap-4">
                {recipeList.map((recipe: any, index: number) => (
                  <RecipeCard {...recipe} key={recipe.recipeId} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default HomePage;
