'use client';
import Link from 'next/link';
import Style from './style';
import { signIn } from 'next-auth/react';

function Menu() {
  const listaDeBotoes = [
    'Home',
    'Campeonato',
    'Curiosidades',
    'Logar',
    'Download',
    'Upload',
    'PDF',
  ];
  function logar() {
    console.log('oi');
    // signIn('Credentials', {
    //   redirect: false,
    // });
  }
  return (
    <Style.ContainerMenu>
      {listaDeBotoes.map((btn) => (
        <Link
          key={btn}
          href={btn === 'Home' ? '/' : btn}
          style={{ textDecoration: 'none' }}>
          <Style.ButtonMod>{btn}</Style.ButtonMod>
        </Link>
      ))}
    </Style.ContainerMenu>
  );
}

export default Menu;
