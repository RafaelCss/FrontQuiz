import Style from './style';

function Menu() {
  const listaDeBotoes = ['Home', 'Perguntas', 'Logar', 'Cadastre'];

  return (
    <Style.ContainerMenu>
      {listaDeBotoes.map((btn) => (
        <Style.ButtonMod key={btn}>{btn}</Style.ButtonMod>
      ))}
    </Style.ContainerMenu>
  );
}

export default Menu;
