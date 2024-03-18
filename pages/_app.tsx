import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import '../styles/globals.scss';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { Preloader } from '@content/landing/index';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <Head>
        <title>FAQ solution</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <ReactLenis root options={{ lerp: 0.05 }}>
        {loading ? <Component {...pageProps} /> : <Preloader />}
      </ReactLenis>
    </>
  );
}
