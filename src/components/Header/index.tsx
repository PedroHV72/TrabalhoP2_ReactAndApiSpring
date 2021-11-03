import React from 'react';

import Logo from '../../assets/logoMax.png'

import { Container, LogoImg, Titulo } from './styles'

const Header: React.FC = () => {
    return (
        <Container>
            <Titulo>A melhor marca de suplementos para sua evolução</Titulo>

            <LogoImg src={Logo} />
        </Container>
    );
}

export default Header;