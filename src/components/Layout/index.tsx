import React from 'react';

import { GridLayout } from './styles'

import Header from '../Header';
import Content from '../Content';


const Layout: React.FC = () => {
    return (
        <GridLayout>
            <Header />
            <Content />
        </GridLayout>
    );
}

export default Layout;