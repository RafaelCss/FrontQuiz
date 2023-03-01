import Jogador from "./style"


function RenderPlayer (){

  return (
    <Jogador.Player>
      <Jogador.Head>
        <Jogador.Eye/>
        <Jogador.Eye right />
        <Jogador.Mouth/>
      </Jogador.Head>
      <Jogador.Body />
      <Jogador.Arm right>
        <Jogador.Hand />
      </Jogador.Arm>
      <Jogador.Arm >
        <Jogador.Hand />
      </Jogador.Arm>
      <Jogador.Leg right>
        <Jogador.Foot />
      </Jogador.Leg>
      <Jogador.Leg>
        <Jogador.Foot />
      </Jogador.Leg>
    </Jogador.Player>
  )
}


export default RenderPlayer;