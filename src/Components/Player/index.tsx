import Jogador from './style';

interface TypeRenderPlayer {
  colorBody?: string;
  colorHead?: string;
  colorEye?: string;
  imagem?: string;
  color?: string;
}

function RenderPlayer({
  colorBody,
  colorHead,
  imagem,
  colorEye,
  color,
}: TypeRenderPlayer) {
  return (
    <Jogador.Player imagem={imagem}>
      <Jogador.Head color={colorHead}>
        <Jogador.Eye color={colorEye} />
        <Jogador.Eye right color={colorEye} />
        <Jogador.Mouth color={color} />
      </Jogador.Head>
      <Jogador.Body color={colorBody}>
        <Jogador.Arm right color={color}>
          <Jogador.Hand color={color} />
        </Jogador.Arm>
        <Jogador.Arm color={color}>
          <Jogador.Hand color={color} />
        </Jogador.Arm>
        <Jogador.Leg right color={color}>
          <Jogador.Foot color={color} />
        </Jogador.Leg>
        <Jogador.Leg color={color}>
          <Jogador.Foot color={color} />
        </Jogador.Leg>
      </Jogador.Body>
    </Jogador.Player>
  );
}

export default RenderPlayer;
