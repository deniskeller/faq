import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import '../styles/globals.scss';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { Preloader } from '@content/landing/index';

import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 300);
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
      {/* <OverlayScrollbarsComponent className="overlayscrollbars-react222222222222"> */}
      {/* <ReactLenis root options={{ lerp: 0.05, smoothWheel: false }}> */}
      {loading ? <Component {...pageProps} /> : <Preloader />}
      {/* </ReactLenis> */}
      {/* </OverlayScrollbarsComponent> */}
    </>
  );
}
