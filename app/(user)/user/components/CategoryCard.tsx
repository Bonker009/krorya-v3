'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface CategoryCardProps {
  categoryId: number;
  categoryName: string;
  categoryImageUrl: string;
}
 
export default function CategoryCard({
  categoryId,
  categoryImageUrl,
  categoryName
}: CategoryCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/explore-food?category=${categoryName}`);
  };

  return (
    <div
      className="carousel-item group relative flex h-[90px] w-[94px] flex-col justify-end"
      onClick={handleClick}
    >
      <div
        className={`duration-20000 flex h-[60px] w-full flex-col items-center justify-center rounded-b-[20px] rounded-t-[7px] transition-all group-hover:bg-main`}
      >
        <div className="absolute left-0 right-0 top-0 mx-auto flex h-[54px] w-[54px] transform items-center justify-center rounded-2xl bg-white shadow-2xl">
          <div className="relative h-[28px] w-[28px]">
            <div className="flex items-center justify-center">
              <div className="h-full w-full">
                <Image src={categoryImageUrl} alt={'Icon'} fill={true} />
              </div>
            </div>
          </div>
        </div>
        <span
          className={`duration-10 lg:duration-2 md:duration-10 mt-4 text-[15px] text-black transition-all  group-hover:text-[#fefefe]`}
        >
          {categoryName}
        </span>
      </div>
    </div>
  );
}
