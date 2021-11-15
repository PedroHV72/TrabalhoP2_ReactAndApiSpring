import React from 'react';

import { Container } from './styles'

interface ICardSuplementosProps {
    background: string;
    title: string;
}

const CardSuplementos: React.FC<ICardSuplementosProps> = ({background, title}) => {
    return (
        <Container background={background}>
            <h1>{title}</h1>
        </Container>
    );
}

export default CardSuplementos;