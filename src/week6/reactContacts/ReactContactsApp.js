import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import Contacts from './Contacts'

function ReactContactsApp() {
    return (
        <div>
            <Provider store={store}>
                <div>
                    <Contacts />
                </div>
            </Provider>
        </div>
    );
}

export default ReactContactsApp;