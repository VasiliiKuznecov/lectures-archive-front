import React from 'react';

import { useRouter } from 'next/router';

import { getCategoryById, getCategoryLectures } from '../../helpers/data';

import Page from '../../components/Page';
import Title from '../../components/Title';
import Lecture from '../../components/Lecture';
import LecturesList from '../../components/LecturesList';

const Category: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    if (typeof id !== 'string') {
        return null;
    }

    const category = getCategoryById(id);
    const lectures = getCategoryLectures(id);

    if (!category) {
        return null;
    }

    return (
        <Page title={category.name}>
            <Title>
                {category.name}
            </Title>
            <LecturesList lectures={lectures} />
            {lectures.map(lecture => <Lecture key={lecture.id} lecture={lecture} />)}
        </Page>
    );
};

export default Category;
