import classNames from 'classnames';
import React, { useLayoutEffect, useState } from 'react';

import Head from 'next/head';

import Header from '../Header';
import Footer from '../Footer';

import styles from './Page.module.css';

type Props = {
    title?: string;
}

const Page: React.FC<Props> = ({ title, children }) => {
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        setIsMobile(isMobile);
    }, []);

    return (
        <div className={classNames(styles.page, isMobile && 'app-env_mobile', !isMobile && 'app-env_desktop')}>
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