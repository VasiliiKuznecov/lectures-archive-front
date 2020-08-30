import React from 'react';

import { getCategories } from '../../helpers/data';

import Page from '../../components/Page';
import Title from '../../components/Title';
import CategoryCard from '../../components/CategoryCard';

import styles from './Categories.module.css';

const Categories: React.FC = () => {
    const categories = getCategories();

    return (
        <Page title="Категории">
            <Title>
                Категории
            </Title>
            <div className={styles.categories}>
                {categories.map(category => (
                    <CategoryCard
                        key={category.id}
                        className={styles.category}
                        category={category}
                    />
                ))}
            </div>
        </Page>
    );
};

export default Categories;
