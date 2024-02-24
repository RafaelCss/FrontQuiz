export default function handler(request: any, response: any) {
  const responseFn = async () =>
    await fetch(
      `${process.env.NEXT_PUBLIC_URL_API_URL_CONNECT}/tabela/atualizar-tabela`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

  console.log(responseFn());

  response.status(200).end('Hello Cron!');
}
