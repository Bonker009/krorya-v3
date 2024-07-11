import { Icons } from '@/components/icons';
import { Decimal } from '@prisma/client/runtime/library';
import { UUID } from 'crypto';

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export interface Food {
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
export interface Recipe {
  recipe_id: UUID;
  image: string;
  title: string;
  cooking_level: string;
  cooking_time: number;
}
export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
