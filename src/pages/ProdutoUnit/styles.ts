import styled from 'styled-components';

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 85px auto;

    grid-template-areas: 'HD HD', 'CT CT';
    height: 70vh;
`;

export const ContentCards = styled.h1`
    padding-top: 70px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
`;