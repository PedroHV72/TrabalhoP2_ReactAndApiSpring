import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';
import colors from './styles/themes/colors'
import Atletas from './pages/Atletas';
import Suplementos from './pages/Suplementos';
import Roupas from './pages/Roupas';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={ colors }>
            <GlobalStyles/>
            <Routes/>
        </ ThemeProvider>
    );
}

export default App;