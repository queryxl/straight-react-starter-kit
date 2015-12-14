import rootReducer          from '../reducers';
import thunk                from 'redux-thunk';
import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';

export default function configureStore(initialState) {
    let createStoreWithMiddleware;

    const middleware = applyMiddleware(thunk);


    createStoreWithMiddleware = compose(
        middleware,
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );


    const store = createStoreWithMiddleware(createStore)(
        rootReducer, initialState
    );
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');

            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
