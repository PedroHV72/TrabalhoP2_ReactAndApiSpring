import React from 'react';

import CardPrincipal from '../../components/CardPrincipal'
import Slider from '../../components/Slider';

import { Container, DivTitleCard, ContentCards, TituloDiv } from './styles'

const Home: React.FC = () => {
    return (
        <Container>
            <Slider />
            <DivTitleCard>
                <TituloDiv>Conheça um pouco mais de nossa marca</TituloDiv>
            </DivTitleCard>
            <ContentCards>
                <CardPrincipal
                    title="Atletas"
                    to="/atletas" 
                    background="https://lojamaxtitanium.vtexassets.com/assets/vtex.file-manager-graphql/images/028a3dd1-325f-4419-8fec-2757745335a9___15be3f5c8ba3cad80fc8b06c9a4cec48.jpg"
                />
                <CardPrincipal
                    title="Suplementos"
                    to="/suplementos" 
                    background="https://m.media-amazon.com/images/I/51fh4+bDGPL._AC_SY355_.jpg"
                />
                <CardPrincipal
                    title="Roupas"
                    to="/roupas" 
                    background="https://static.netshoes.com.br/produtos/combo-2x-camiseta-max-titanium-relogio-coqueteleira-shaker-blusa-roupa/26/4C3-0046-026/4C3-0046-026_zoom1.jpg?ts=1631949710"
                />
            </ContentCards>
        </Container>
    );
}

export default Home;