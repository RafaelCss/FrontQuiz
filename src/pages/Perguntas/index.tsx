import ListaPerguntas from "@/src/Components/Entidade/Perguntas";
import Header from "@/src/Components/Header";
import LayoutMod from "@/src/Components/Layout/style";


function Perguntas(){

  return(
    <LayoutMod>
      <Header/>
      <ListaPerguntas/>
    </LayoutMod>
  )
}

export default Perguntas;