import {createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
    const middleware = [thunk]
    const store = createStore(rootReducer,initialState,
    compose(
        applyMiddleware(...middleware),
     //   window.__REDUX_DEVTOOLS_EXTENSION_&&window.__REDUX_DEVTOOLS_EXTENSION_()
     window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
     )
    );
    export default store





// tutorial
    /*
    const initialState = {};
    const middleware = [thunk]
    const store = createStore(rootReducer,initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION_&&window.__REDUX_DEVTOOLS_EXTENSION_()
    )
    );
    */


    /*

    
 const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION_&&window.__REDUX_DEVTOOLS_EXTENSION_()
    ));

*/