import { Decimal } from '@prisma/client/runtime/library';
import { UUID } from 'crypto';
import { Star } from 'lucide-react';
import Image from 'next/image';
interface FoodItemProps {
  food_id: UUID;
  food_name: string;
  price: Decimal;
  star_average: number;
  total_rater: number;
  image: string;
  created_at: Date;
  updated_at: Date;
  is_bookmarked: boolean;
}
export default function FoodCard({
  food_id,
  food_name,
  price,
  star_average,
  total_rater,
  image,
  created_at,
  updated_at,
  is_bookmarked
}: FoodItemProps) {
  return (
    <div className="flex flex-col gap-3 rounded-md p-4 shadow-md lg:h-96 lg:w-80">
      <div className="relative w-full lg:h-56">
        <Image
          src="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg"
          alt="recipe image"
          fill={true}
          priority
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex flex-grow flex-col justify-between">
        <div>
          <h1 className="text-lg font-semibold">{food_name}</h1>
          <div className="flex items-center justify-start gap-1 text-xs">
            <Star size={14} fill="#FFD233" color="#FFD233" />
            <span>{star_average}</span>
            <span>({total_rater})</span>
          </div>
        </div>
        <span className="w-full self-end text-right text-lg text-main">
          {price.toString()} រៀល
        </span>
      </div>
    </div>
  );
}
