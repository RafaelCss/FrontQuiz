import type { AppProps } from 'next/app';
import './styles/globals.css';
import 'antd/dist/reset.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContentMod from '../Components/Container/Central/style';
import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header />
      <ContentMod>
        <Component {...pageProps} />
      </ContentMod>
      <Footer />
    </SessionProvider>
  );
}
