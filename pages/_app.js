import '../styles/globals.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once:false
    });
  }, []);

  return <Component {...pageProps} />;}
