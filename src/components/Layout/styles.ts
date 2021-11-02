import styled from 'styled-components';

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 85px auto;

    grid-template-areas: 'HD HD', 'CT CT';
    height: 100vh;
`;