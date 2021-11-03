import React from 'react';

import Horus from '../../assets/horus.png'

import { Container, SliderImg } from './styles'

const Slider: React.FC = () => {
    return (
        <Container>
            <SliderImg src={Horus} />
        </Container>
    );
}

export default Slider;