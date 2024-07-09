import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';
import Image from 'next/image';

export default function page() {
  return (
    <ScrollArea className="h-full bg-slate-50">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className={'w-full overflow-hidden rounded-md bg-[#F6EEE3]'}>
          <div className="flex items-center justify-between">
            <div className="w-1/2 min-w-0 p-4">
              <h1 className="text-gradient text-4xl font-bold">
                ស្វាគមន៍មកកាន់ក្រយ៉ា
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
      </div>
    </ScrollArea>
  );
}
