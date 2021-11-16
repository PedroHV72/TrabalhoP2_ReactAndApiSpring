import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Atletas from '../pages/Atletas';
import Suplementos from '../pages/Suplementos';
import Roupas from '../pages/Roupas';

const AppRoutes: React.FC = () => (
    <ScrollToTop>
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/atletas" exact component={Atletas} />
                <Route path="/suplementos" exact component={Suplementos} />
                <Route path="/roupas" exact component={Roupas} />
            </Switch>
        </Layout>
    </ScrollToTop>
);

export default AppRoutes;