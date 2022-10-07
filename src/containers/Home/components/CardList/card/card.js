import React from "react"
import { Imagem } from "./styles"

function Card({nome, img, quantidade, valor, peso}) {
    return <div>
        <Imagem src={img} />
        <div>
            <span>{nome}</span>
            <span>{quantidade}</span>
            <span>{valor}</span>
            <span>{peso}</span>
        </div>
    </div>
}

export default Card