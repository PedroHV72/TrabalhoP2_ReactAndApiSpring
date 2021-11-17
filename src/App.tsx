import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';
import colors from './styles/themes/colors'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={ colors }>
            <GlobalStyles/>
            <Routes/>
        </ ThemeProvider>
    );
}

export default App;