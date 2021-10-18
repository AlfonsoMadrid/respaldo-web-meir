import React from 'react';
import {Provider} from 'react-redux';

import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

import './styles/styles.scss';

export const MeirApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
