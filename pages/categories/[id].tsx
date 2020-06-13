import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

const Category: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
      <div className="container">
          <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
                <h1 className="title">
                    Категория {id}
                </h1>
          </main>
      </div>
    );
};

export default Category;
