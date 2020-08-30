import categories from '../mocks/categories.json';
import lectures from '../mocks/lectures.json';

import { Category } from '../types/categories';
import { Lecture } from '../types/lectures';

export const getCategories = (): Array<Category> => categories.items;

export const getCategoryById = (id: string): Category | undefined => {
    return categories.items.find(category => category.id === id);
};

export const getCategoryLectures = (id: string): Array<Lecture> => {
    return lectures.items.filter(lecture => lecture.categories.includes(id));
};