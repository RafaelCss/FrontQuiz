import Head from 'next/head';
import Home from '../Components/Entidade/Home';

//import { GlobalStyle } from '../Components/Logo/style';

export default function HomeApp() {
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

      <Home />
    </>
  );
}
