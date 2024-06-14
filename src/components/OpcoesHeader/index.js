import styled from "styled-components"


const Opcao = styled.li`
   font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 8px;
    cursor: pointer;
    min-width: 140px;
`
const Opcoes = styled.ul `
 display: flex
`

const textoOpcoes = ['Categorias', 'Favoritos', 'Minha Estante']

function OpcoesHeader () {
    return (
        <Opcoes>
        {textoOpcoes.map ( (texto) => (
          <Opcao><p>{texto}</p></Opcao>
        ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader