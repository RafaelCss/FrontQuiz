'use client';
import Link from 'next/link';
import Style from './style';
import { signIn, signOut, useSession } from 'next-auth/react';

function Menu() {
  const { data: session } = useSession();
  const listaDeBotoes = [
    'Home',
    'Campeonato',
    'Curiosidades',
    'Cadastro',
    'Logout',
  ];
  return (
    <Style.ContainerMenu>
      {listaDeBotoes.map((btn) => {
        if (session && btn === 'Logout') {
          return (
            <Style.ButtonMod onClick={() => signOut()}>{btn}</Style.ButtonMod>
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
