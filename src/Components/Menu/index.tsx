'use client';
import Link from 'next/link';
import Style from './style';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Router, useRouter } from 'next/router';

function Menu() {
  const { data: session } = useSession();
  const router = useRouter();
  const listaDeBotoes = [
    'Home',
    'Campeonato',
    'Curiosidades',
    'Cadastro',
    'Logout',
  ];

  function redirectLogin() {
    router.push('/auth/signin');
  }

  return (
    <Style.ContainerMenu>
      {listaDeBotoes.map((btn) => {
        if (session && btn === 'Logout') {
          return (
            <Style.ButtonMod onClick={() => signOut()}>{btn}</Style.ButtonMod>
          );
        } else if (!session && btn === 'Logout') {
          return (
            <Style.ButtonMod onClick={() => redirectLogin()}>
              {'Login'}
            </Style.ButtonMod>
          );
        } else {
          return (
            <Link
              key={btn}
              href={btn === 'Home' ? '/' : btn}
              style={{ textDecoration: 'none' }}>
              <Style.ButtonMod>{btn}</Style.ButtonMod>
            </Link>
          );
        }
      })}
    </Style.ContainerMenu>
  );
}

export default Menu;
