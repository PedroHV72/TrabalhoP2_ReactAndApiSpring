import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import CardSuplementos from '../../components/CardSuplementos';
import api from '../../services/api';

import { GridLayout, ContentCards, DivTitleCard, TituloDiv } from './styles'

interface ISuplementosProps {
    id: number;
    nome: string;
    dataCadastro: string;
    valorUnitario: number;
    fotoUrl: string;
    descricao: string;
}
  

const Suplementos: React.FC = () => {
    const [data, setData] = useState<ISuplementosProps[]>();

    useEffect(() => {
        async function loadData() {
            try {
                const response = await api.get('/produto/')
                setData(response.data)
                console.log(response.data)
            }
            catch(error) {
                console.log(error)
            }
        };
        loadData();
    }, [])

    return (
        <GridLayout>
            <DivTitleCard>
                <TituloDiv>Nossos produtos para aumentar seu desempenho</TituloDiv>
            </DivTitleCard>
            <ContentCards>
                {data?.map((produto, index) => (
                    <CardSuplementos 
                        key={index}
                        title={produto.nome}
                        background={produto.fotoUrl}
                    />
                ))}
            </ContentCards>
        </GridLayout>
    );
}

export default Suplementos;