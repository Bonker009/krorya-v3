import { Star } from 'lucide-react';
import Image from 'next/image';

export default function FoodCard() {
  return (
    <div className="flex h-80 w-64 flex-col gap-3 rounded-md p-4  shadow-md">
      <div className="relative h-48 w-full   ">
        <Image
          src="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg"
          alt="recipe image"
          fill={true}
          priority
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="text-lg font-semibold">បាយឆាផ្តើមស្នេហ៍</h1>
        <div className="flex items-center justify-start gap-1 text-xs">
          <Star size={14} fill="#FFD233" color="#FFD233" />
          <span>4.8</span>
          <span>(90)</span>
        </div>
        <span className="w-full self-end text-right text-lg text-main">
          8000 រៀល
        </span>
      </div>
    </div>
  );
}
