import Style from './style';

function Menu() {
  const listaDeBotoes = ['Home', 'Perguntas', 'Login', 'Cadastre'];

  return (
    <Style.ContainerMenu>
      {listaDeBotoes.map((btn) => (
        <Style.Button key={btn}>{btn}</Style.Button>
      ))}
    </Style.ContainerMenu>
  );
}

export default Menu;
