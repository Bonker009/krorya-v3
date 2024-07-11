import { Food } from '@/types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function getFoods(): Promise<Food[]> {
  const result = await prisma.foods.findMany({
    select: {
      food_id: true,
      food_name: true,
      price: true,
      star_average: true,
      total_rater: true,
      image: true,
      created_at: true,
      updated_at: true,
      is_bookmarked: true
    }
  });
  return result as Food[];
}