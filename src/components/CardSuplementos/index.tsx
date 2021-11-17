import React from 'react';

import { Container } from './styles'

interface ICardSuplementosProps {
    background: string;
    title: string;
    to: string;
}

const CardSuplementos: React.FC<ICardSuplementosProps> = ({background, title, to}) => {
    return (
        <Container background={background} to={to}>
            <h1>{title}</h1>
        </Container>
    );
}

export default CardSuplementos;