interface Category {
  categoryName: string;
  categoryId: number;
  categoryImageUrl: string;
}
export const categories: Category[] = [
  {
    categoryName: 'ទាំងអស់',
    categoryId: 1,
    categoryImageUrl: '/category/all.svg'
  },
  {
    categoryName: 'ពេលព្រឹក',
    categoryId: 2,
    categoryImageUrl: '/category/breakfast.svg'
  },
  {
    categoryName: 'ពេលថ្ងៃ',
    categoryId: 3,
    categoryImageUrl: '/category/lunch-break 1.svg'
  },
  {
    categoryName: 'ពេលល្ងាច',
    categoryId: 4,
    categoryImageUrl: '/category/dinner.svg'
  },
  {
    categoryName: 'បង្អែម',
    categoryId: 5,
    categoryImageUrl: '/category/dessert.svg'
  },
  {
    categoryName: 'ភេសជ្ជៈ',
    categoryId: 6,
    categoryImageUrl: '/category/drink.svg'
  },
  {
    categoryName: 'ចៀនឆា',
    categoryId: 7,
    categoryImageUrl: '/category/fry.svg'
  },
  {
    categoryName: 'ស៊ុប',
    categoryId: 8,
    categoryImageUrl: '/category/soup.svg'
  },
  {
    categoryName: 'អាហារសម្រន់',
    categoryId: 9,
    categoryImageUrl: '/category/health.svg'
  }
];
