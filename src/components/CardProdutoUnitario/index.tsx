import React from 'react';

import { Container, DadosProduto } from './styles'

interface ICardProdutoUnitarioProps {
    title: string;
    description: string;
    value: number;
    image: string;
}

const CardProdutoUnitario: React.FC<ICardProdutoUnitarioProps> = ({title, description, value, image}) => {
    return (
        <Container>
            <img src={image} />
            <DadosProduto>
                <h1>Nome</h1>
                <h2>{title}</h2>
                <h1>Descrição</h1>
                <h2>{description}</h2>
                <h1>Valor</h1>
                <h2>{value}</h2>
            </DadosProduto>
        </Container>
    );
}

export default CardProdutoUnitario;