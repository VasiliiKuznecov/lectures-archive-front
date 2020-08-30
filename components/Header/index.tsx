import React from 'react';
import classNames from 'classnames';

import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Header.module.css';

const menu = [
    {
        name: 'Все лекции',
        href: '/'
    },
    {
        name: 'Категории',
        href: '/categories'
    }
];

const Header: React.FC = () => {
    const router = useRouter();

    return (
        <header className={styles.container}>
            <div className={styles.title}>Архив лекций ЗМШ</div>
            <div className={styles['menu-wrapper']}>
                <div className={styles.menu}>
                    {menu.map(item => {
                        const isActive = router.pathname === item.href;

                        return (
                            <Link key={item.href} href={item.href}>
                                <a className={classNames(styles['menu-link'], isActive && styles.active)}>
                                    {item.name}
                                </a>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className={styles['main-site']}>
                <a className={styles.link} href="https://zmh.viharev.com/" target="_blank" rel="noreferrer">
                    Сайт ЗМШ
                </a>
            </div>
        </header>
    );
};

export default Header;