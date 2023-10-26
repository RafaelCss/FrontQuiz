import Link from 'next/link';
import Style from './style';

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
