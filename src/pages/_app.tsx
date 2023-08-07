import type { AppProps } from 'next/app';
import './styles/globals.css';
import 'antd/dist/reset.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ContentMod from '../Components/Container/Central/style';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <ContentMod>
        <Component {...pageProps} />
      </ContentMod>
      <Footer />
    </>
  );
}
