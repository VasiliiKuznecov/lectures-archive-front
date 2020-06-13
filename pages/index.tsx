import Head from 'next/head';

import Footer from '../components/Footer';

export default function Index() {
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
}
