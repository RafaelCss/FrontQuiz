export default async function handler(request: any, response: any) {
  const responseFn = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API_URL_CONNECT}/tabela/atualizar-tabela`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const retorno = await responseFn.json();

  response.status(200).end('Hello Cron!', retorno);
}
