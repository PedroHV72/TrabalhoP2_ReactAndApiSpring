import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Layout from './components/Layout';
import colors from './styles/themes/colors'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={ colors }>
            <GlobalStyles/>
            <Layout/>
        </ ThemeProvider>
    );
}

export default App;