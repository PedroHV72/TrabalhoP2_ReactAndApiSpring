import React from 'react';

import CardAtleta from '../../components/CardAtleta';
import Header from '../../components/Header';
import Footer from '../../components/Footer'

import { GridLayout, ContentCards, DivTitleCard, TituloDiv } from './styles'

const Atletas: React.FC = () => {
    return (
        <GridLayout>
            <Header />
            <DivTitleCard>
                <TituloDiv>Esses são uns de nossos atletas</TituloDiv>
            </DivTitleCard>
            <ContentCards>
                <CardAtleta 
                    title="Caike Pro"
                    background="https://esportefitness.com/wp-content/uploads/2020/12/Caike-Pro.jpeg"/>
                <CardAtleta 
                    title="Ângela Borges"
                    background="https://protanbr.com.br/wp-content/uploads/2021/05/Design-sem-nome.png"/>
                <CardAtleta 
                    title="Julio Balestrin"
                    background="https://lojamaxtitanium.vtexassets.com/assets/vtex.file-manager-graphql/images/8dc37043-6f35-4066-baa3-b6ba95a74924___a91f51a1794a3ed7ffd25e6b39fb1872.png"/>
            </ContentCards>
            <Footer />
        </GridLayout>
    );
}

export default Atletas;