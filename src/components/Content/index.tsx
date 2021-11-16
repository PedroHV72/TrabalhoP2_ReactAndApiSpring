import React from 'react';

import Slider from '../Slider';
import CardPrincipal from '../CardPrincipal'

import { Container, TituloDiv, DivTitleCard, ContentCards } from './styles'

const Content: React.FC = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default Content;