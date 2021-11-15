import React from 'react';

import CardSuplementos from '../../components/CardSuplementos';
import Header from '../../components/Header';
import Footer from '../../components/Footer'

import { GridLayout, ContentCards, DivTitleCard, TituloDiv } from './styles'

const Suplementos: React.FC = () => {
    return (
        <GridLayout>
            <Header />
            <DivTitleCard>
                <TituloDiv>Nossos produtos para aumentar seu desempenho</TituloDiv>
            </DivTitleCard>
            <ContentCards>
                <CardSuplementos 
                    title="Hórus"
                    background="https://a-static.mlcdn.com.br/618x463/pre-treino-horus-300g-frutas-vermelhas-max-titanium/rafanutrysuplementos/f92f921cebd111eb93964201ac18500e/4481cb9c9d6dc0aba97e6c2cbc3f1e82.jpg"/>
                <CardSuplementos 
                    title="Whey"
                    background="https://d2vq4s943o8cb4.cloudfront.net/Custom/Content/Products/50/62/5062966_100-whey-protein-max-titanium-4443_m2_637437988317010154.png"/>
                <CardSuplementos 
                    title="Barra proteica"
                    background="https://cdn.awsli.com.br/1000x1000/151/151011/produto/109639846/ad2fd5072c.jpg"/>
            </ContentCards>
            <Footer />
        </GridLayout>
    );
}

export default Suplementos;