import React, { useEffect } from 'react';

import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';

import styles from './Page.module.css';

type Props = {
    title?: string;
}

const Page: React.FC<Props> = ({ title, children }) => {
    return (
        <div className={styles.page}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="https://static.tildacdn.com/tild3466-6563-4663-a262-663366633439/favicon.ico" />
            </Head>

            <Header />
            <main className={styles.content}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Page;