import Head from 'next/head';
import Container from '../Components/Container/Central/index';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import LayoutApp from '../Components/Layout';
//import { GlobalStyle } from '../Components/Logo/style';

export default function Home() {
  return (
    <>
      <Head>
        <title>Soccer Question</title>
        <meta name="description" content="Aplicativo de perguntas sobre futebol" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutApp>
        <>
           {/* <GlobalStyle/> */}
          <Header />
          <Container />
          <Footer />
        </>
      </LayoutApp>
    </>
  );
}
