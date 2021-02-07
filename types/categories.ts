import { Lecture } from './lectures';

export type Category = {
    id: string;
    name: string;
    color: string;
    iconUrl?: string;
};

export type CategoryWithLectures = Category & {
    lectures: Array<Lecture>;
};