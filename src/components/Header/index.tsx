import React from 'react';

import Logo from '../../assets/logoMax.png'

import { Container, LogoImg } from './styles'

const Header: React.FC = () => {
    return (
        <Container>
            <h2>A melhor marca de suplementos para sua evolução</h2>

            <LogoImg src={Logo} />
        </Container>
    );
}

export default Header;