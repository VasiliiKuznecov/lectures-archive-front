import React from 'react';

import Head from 'next/head';

import Footer from '../components/Footer';

const Index: React.FC = () => {
    return (
      <div className="container">
          <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
                <h1 className="title">
                    Главная    
                </h1>

                <Footer />
          </main>
      </div>
    );
};

export default Index;
