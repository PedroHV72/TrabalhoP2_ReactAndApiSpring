import styled from 'styled-components';

export const Container = styled.section`
    display: flex;

    > img {
        height: 350px;
        width: 500px;
    }
`;

export const DadosProduto = styled.div`
    > h1 {
        color: ${props => props.theme.colors.black};
        z-index: 9999;
        font-size: 40px;
        font-weight: 800;
    }

    > h2 {
        color: #5e5e5e;
        z-index: 9999;
        font-size: 25px;
        padding-bottom: 50px;
    }
`;