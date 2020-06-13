import React from 'react';

import styles from './Title.module.css';

const Title: React.FC = ({ children }) => {
    return (
        <div className={styles.title}>
            {children}
        </div>
    );
};

export default Title;