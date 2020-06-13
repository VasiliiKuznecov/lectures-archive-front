import React from 'react';

import { useRouter } from 'next/router';

import { getCategoryById } from '../../helpers/categories';

import Page from '../../components/Page';
import Title from '../../components/Title';

const Category: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    if (typeof id !== 'string') {
        return null;
    }

    const category = getCategoryById(id);

    if (!category) {
        return null;
    }

    return (
        <Page title={category.name}>
            <Title>
                {category.name}
            </Title>
        </Page>
    );
};

export default Category;
