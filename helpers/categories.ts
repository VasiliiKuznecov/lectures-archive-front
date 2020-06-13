import { Category } from '../types/categories';
import categories from '../mocks/categories.json';

export const getCategories = (): Array<Category> => categories.items;

export const getCategoryById = (id: string): Category | undefined => {
    return categories.items.find(category => category.id === id);
};