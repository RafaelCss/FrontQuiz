export default async function GET(request: Request) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_API_URL_CONNECT}/atualizar-tabela`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  console.log({ request });
}
