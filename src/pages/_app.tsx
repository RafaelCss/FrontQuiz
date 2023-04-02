import type { AppProps } from 'next/app';
import './styles/globals.css'
import 'antd/dist/reset.css';
import LayoutMod from '../Components/Layout/style';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutMod>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </LayoutMod>
  );
}
