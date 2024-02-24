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

  if (!response.ok) {
    throw new Error('Erro ao cadastrar usuário');
  }

  const data = await response.json();
  return new Response(`Hello from ${process.env.VERCEL_REGION}`, {
    status: 200,
  });
}
