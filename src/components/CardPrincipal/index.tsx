import React from 'react';

import { Container } from './styles';

interface ICardProps {
    background: string;
    title: string;
    to: string;
}

const Content: React.FC<ICardProps> = ({ background, title, to })  => {
    return (
        <Container background={background} to={to}>
            <h1>{title}</h1>
        </Container>
    );
}

export default Content;