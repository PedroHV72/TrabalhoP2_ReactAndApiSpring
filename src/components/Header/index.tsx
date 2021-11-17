import React from 'react';

import Logo from '../../assets/logoMax.png'

import { Container, LogoImg, Titulo } from './styles'

interface IHeaderProps {
    to: string;
}

const Header: React.FC<IHeaderProps> = ({to}) => {
    return (
        <Container>
            <Titulo to={to}>A melhor marca de suplementos para sua evolução</Titulo>

            <LogoImg src={Logo} />
        </Container>
    );
}

export default Header;