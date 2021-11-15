import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Atletas from '../pages/Atletas';
import Suplementos from '../pages/Suplementos';
import Roupas from '../pages/Roupas';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>
            <Route path="/atletas" exact component={Atletas} />
            <Route path="/suplementos" exact component={Suplementos} />
            <Route path="/roupas" exact component={Roupas} />
        </Switch>
    </Layout>
);

export default AppRoutes;