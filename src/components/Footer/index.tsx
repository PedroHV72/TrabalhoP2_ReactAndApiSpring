import React from 'react';

import { Container, FooterCopy, Copy } from './styles'

const Content: React.FC = () => {
    return (
        <Container>
            <FooterCopy>
                <Copy>© 2021 - Todos os direitos reservados</Copy>
            </FooterCopy>
        </Container>
    );
}

export default Content;