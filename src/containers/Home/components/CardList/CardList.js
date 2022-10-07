import React from "react"
import { StyledCardList } from "./styles"
import Card from "./card/card"

function CardList({ itens, pesoMaximo }) {
    const pesoTotalMochila = obterPesoItens(itens);
    return <StyledCardList>
        <div>
            {pesoTotalMochila + "/" + pesoMaximo}
        </div>
        {itens.map((item, key) => <Card key={key} nome={item.nome} img={item.img} quantidade={item.quantidade} valor={item.valor} peso={item.peso} />)}
    </StyledCardList>
}

export default CardList

function obterPesoItens(itens) {
    return itens.reduce((a, b) => a + b.peso, 0);
}
