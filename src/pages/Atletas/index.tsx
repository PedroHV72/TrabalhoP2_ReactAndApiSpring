import React, { useEffect, useState } from 'react';

import CardAtleta from '../../components/CardAtleta';
import api from '../../services/api';

import { GridLayout, ContentCards, DivTitleCard, TituloDiv } from './styles'

interface IAtletasProps {
    id: number;
    nome: string;
    email: string;
    senha: string;
    fotoUrl: string;
}

const Atletas: React.FC = () => {
    const [data, setData] = useState<IAtletasProps[]>();

    useEffect(() => {
        async function loadData() {
            try {
                const response = await api.get('/usuario/')
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
                <TituloDiv>Esses são uns de nossos atletas</TituloDiv>
            </DivTitleCard>
            <ContentCards>
            {data?.map((usuario, index) => (
                    <CardAtleta 
                        key={index}
                        title={usuario.nome}
                        background={usuario.fotoUrl}
                    />
                ))}
            </ContentCards>
        </GridLayout>
    );
}

export default Atletas;