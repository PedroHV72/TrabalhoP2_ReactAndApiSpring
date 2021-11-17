import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CardProdutoUnitario from '../../components/CardProdutoUnitario';
import api from '../../services/api';

import { GridLayout, ContentCards } from './styles'

interface IProdutoUnitProps {
    id: string;
    nome: string;
    dataCadastro: string;
    valorUnitario: number;
    fotoUrl: string;
    descricao: string;
}
  

const ProdutoUnit: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [data, setData] = useState<IProdutoUnitProps[]>();

    useEffect(() => {
        async function loadData() {
            try {
                const response = await api.get(`/produto/${Number(id)}`)
                setData(response.data)
                console.log(response.data)
            }
            catch(error) {
                console.log(error)
            }
        };
        loadData();
    }, [id])

    return (
        <GridLayout>
            <ContentCards>
                {data?.map((produto, index) => (
                    <CardProdutoUnitario 
                        key={index}
                        title={produto.nome}
                        description={produto.descricao}
                        value={produto.valorUnitario}
                        image={produto.fotoUrl}
                    />
                ))}
            </ContentCards>
        </GridLayout>
    );
}

export default ProdutoUnit;