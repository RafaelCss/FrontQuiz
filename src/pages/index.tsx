import Head from 'next/head';
import ContentMod from '../Components/Container/Central/style';
import ListaPerguntas from '../Components/Entidade/Perguntas';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import LayoutMod from '../Components/Layout/style';

//import { GlobalStyle } from '../Components/Logo/style';

export default function Home() {
  return (
    <>
      <Head>
        <title>Soccer Question</title>
        <meta
          name="description"
          content="Aplicativo de perguntas sobre futebol"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ListaPerguntas />
    </>
  );
}
