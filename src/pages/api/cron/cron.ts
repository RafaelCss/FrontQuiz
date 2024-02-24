export default async function GET(request: Request) {
  const response = async () =>
    await fetch(
      `${process.env.NEXT_PUBLIC_URL_API_URL_CONNECT}/tabela/atualizar-tabela`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

  console.log(response());
}
