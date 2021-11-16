import React from 'react';

import CardRoupas from '../../components/CardRoupas';

import { GridLayout, ContentCards, DivTitleCard, TituloDiv } from './styles'

const Roupas: React.FC = () => {
    return (
        <GridLayout>
            <DivTitleCard>
                <TituloDiv>Alguns trajes para o seu treino</TituloDiv>
            </DivTitleCard>
            <ContentCards>
                <CardRoupas 
                    title="Camisa"
                    background="https://images-americanas.b2w.io/produtos/01/00/img1/106348/0/106348086_1GG.jpg"/>
                <CardRoupas 
                    title="Bermuda"
                    background="https://cdn.awsli.com.br/300x300/44/44273/produto/32056017/71de5f8893.jpg"/>
                <CardRoupas 
                    title="Boné"
                    background="https://cd.shoppub.com.br/gsn/media/cache/69/67/6967eea6d4a3c549a89ef172f6fb77df.jpg"/>
            </ContentCards>
        </GridLayout>
    );
}

export default Roupas;