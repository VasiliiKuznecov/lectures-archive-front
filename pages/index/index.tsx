import React from 'react';
import CategoryPreview from '../../components/CategoryPreview';

import Page from '../../components/Page';
import { getCategoriesWithLectures } from '../../helpers/data';

import styles from './Index.module.css';

const Index: React.FC = () => {
    const categories = getCategoriesWithLectures();

    return (
        <Page title="Главная">
            {categories
                .filter(category => category.lectures.length > 0)
                .map(categrory => (
                    <CategoryPreview
                        key={categrory.id}
                        className={styles.category}
                        categoryWithLectures={categrory}
                    />
                ))
            }
        </Page>
    );
};

export default Index;
