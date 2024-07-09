import { Star } from 'lucide-react';
import Image from 'next/image';
export default function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-80 w-64 flex-col gap-3 rounded-md border border-dashed p-4">
        <div className="relative h-48 w-full border border-dashed ">
          <Image
            src="https://img.freepik.com/premium-photo/large-bowl-food-with-fish-vegetables_197463-2405.jpg"
            alt="recipe image"
            fill={true}
            priority
            className="rounded-md object-cover"
          />
        </div>
        <div className='flex flex-col justify-between'>
          <h1 className="text-lg font-semibold">បាយឆាផ្តើមស្នេហ៍</h1>
          <div className="flex items-center justify-start gap-1 text-xs">
            <Star size={14} fill="#FFD233" color="#FFD233" />
            <span>4.8</span>
            <span>(90)</span>
          </div>
          <span className="text-main text-right w-full self-end text-lg">8000 រៀល</span>
        </div>
      </div>
    </div>
  );
}
