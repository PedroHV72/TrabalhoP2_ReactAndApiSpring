import React from 'react';

import { GridLayout } from './styles'

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer'


const Layout: React.FC = ({children}) => {
    return (
        <GridLayout>
            <Header to="/"/>
            <Content>
                {children}
            </Content>
            <Footer />
        </GridLayout>
    );
}

export default Layout;