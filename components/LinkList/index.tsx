import classNames from 'classnames';
import React from 'react';

import styles from './LinkList.module.css';

type LinkType = {
    name: string;
    url: string;
}

type LinkListProps = {
    title: string;
    links: Array<LinkType>;
    type?: 'materials' | 'contacts';
    className?: string;
};

const LinkList: React.FC<LinkListProps> = ({ title, links, type = 'materials', className }) => {
    return (
        <section className={classNames(styles[type], className)}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.list}>
                {links.map(link => (
                    <li key={link.url} className={styles.item}>
                        <a className={styles.link} href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default LinkList;
