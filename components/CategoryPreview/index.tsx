import classNames from 'classnames';
import React from 'react';

import Link from 'next/link';

import { CategoryWithLectures } from '../../types/categories';
import LecturesCarousel from '../LecturesCarousel';

import styles from './CategoryPreview.module.css';

type Props = {
    categoryWithLectures: Readonly<CategoryWithLectures>;
    className?: string;
};

const CategoryPreview: React.FC<Props> = ({ categoryWithLectures, className }) => {
    const hasMoreLectures = categoryWithLectures.lectures.length > 10;
    console.log(categoryWithLectures.name, categoryWithLectures.lectures.length);

    return (
        <section className={className}>
            <header className={styles.header}>
                <Link href="/categories/[id]" as={`/categories/${categoryWithLectures.id}`}>
                    <a className={styles.link}>{categoryWithLectures.name}<div className={styles.arrow} /></a>
                </Link>
            </header>
            <LecturesCarousel
                lectures={categoryWithLectures.lectures.slice(0, 10)}
                additional={hasMoreLectures ? (
                    <Link href="/categories/[id]" as={`/categories/${categoryWithLectures.id}`}>
                        <a className={styles['more-link']}>
                            <div className={styles.more}>
                                <div className={styles['more-icon']} />
                                <div className={styles['more-text']}>Показать все</div>
                            </div>
                        </a>
                    </Link>
                ) : null}
            />
        </section>
    );
};

export default CategoryPreview;