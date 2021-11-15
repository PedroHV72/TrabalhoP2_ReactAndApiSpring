import React from 'react';

import { Container } from './styles'

interface ICardAtletaProps {
    background: string;
    title: string;
}

const CardAtleta: React.FC<ICardAtletaProps> = ({background, title}) => {
    return (
        <Container background={background}>
            <h1>{title}</h1>
        </Container>
    );
}

export default CardAtleta;