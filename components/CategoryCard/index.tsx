import React from 'react';
import classNames from 'classnames';

import Link from 'next/link';

import { Category } from '../../types/categories';

import styles from './CategoryCard.module.css';

type Props = {
    category: Category;
    className?: string;
};

const CategoryCard: React.FC<Props> = ({ category, className }) => {
    const background = `linear-gradient(135.11deg, ${category.color} 28.76%, #fff 133.42%)`;
    const icon = category.iconUrl && `url(${category.iconUrl})`;

    return (
        <article className={classNames(className, styles.wrapper)}>
            <Link href="/categories/[id]" as={`/categories/${category.id}`}>
                <a className={styles.link}>
                    <div className={styles.container}>
                        {category.name}
                        <div className={styles.background} style={{ background }} />
                        {icon && <div className={styles.icon} style={{ backgroundImage: icon }} />}
                    </div>
                </a>
            </Link>
        </article>
    );
};

export default CategoryCard;