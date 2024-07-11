import CategoryCard from '@/app/(user)/user/components/CategoryCard';
import { categories } from '@/lib/category-data';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoryList() {
  return (
    <>
      <div className="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <Image alt="romdul" src="/romdul.svg" width={25} height={25} />
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
    </>
  );
}
