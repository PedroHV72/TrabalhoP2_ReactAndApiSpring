import React from 'react';

import Slider from '../Slider';
import Footer from '../Footer'

import { Container, TituloDiv, DivTitleCard } from './styles'

const Content: React.FC = () => {
    return (
        <Container>
            <Slider />
            <DivTitleCard>
                <TituloDiv>Conheça um pouco mais de nossa marca</TituloDiv>
            </DivTitleCard>
            <Footer />
        </Container>
    );
}

export default Content;