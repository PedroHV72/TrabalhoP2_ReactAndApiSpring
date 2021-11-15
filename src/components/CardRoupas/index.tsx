import React from 'react';

import { Container } from './styles'

interface ICardRoupasProps {
    background: string;
    title: string;
}

const CardRoupas: React.FC<ICardRoupasProps> = ({background, title}) => {
    return (
        <Container background={background}>
            <h1>{title}</h1>
        </Container>
    );
}

export default CardRoupas;