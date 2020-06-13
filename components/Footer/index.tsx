import React from 'react';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
            Архив лекций Зимней Математической Школы существует с 2020 года
        </div>
    );
};

export default Footer;