import Link from 'next/link';
import Style from './style';

function Menu() {
  const listaDeBotoes = ['Home', 'Perguntas', 'Logar', 'Cadastre'];

  return (
    <Style.ContainerMenu>
      {listaDeBotoes.map((btn) => (
        <Link key={btn} href={btn === 'Home' ? '/' : btn}>
          <Style.ButtonMod>{btn}</Style.ButtonMod>
        </Link>
      ))}
    </Style.ContainerMenu>
  );
}

export default Menu;
