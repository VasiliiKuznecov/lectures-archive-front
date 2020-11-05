import categories from '../mocks/categories.json';
import lectures from '../mocks/lectures.json';

import { Category } from '../types/categories';
import { Lecture } from '../types/lectures';

export const getCategories = (): Array<Category> => categories.items;

export const getCategoryById = (id: string): Category | undefined => {
    return getCategories().find(category => category.id === id);
};

export const getLectures = (): Array<Lecture> => lectures.items;

export const getCategoryLectures = (id: string): Array<Lecture> => {
    return getLectures().filter(lecture => lecture.categories.includes(id));
};