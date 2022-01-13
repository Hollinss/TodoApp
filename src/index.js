import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import './index.css';
import { Provider} from "react-redux";
import { configureStore} from "./store.js";

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>, document.getElementById('root') );

/**
 * This was practice
 *
 import { useState, useEffect } from "react";

 function Counter() {
    const [count, setCount] = useState(0);
    const [calc, setCalc] = useState(0);

    useEffect( () => {
       setCalc( () => count*2 );
    }, [count] );

    return (
        <>
            <h1>Current Count is {count}</h1>
            <button onClick={ () => setCount( (e) => e + 1 ) }>+</button>
            <h1>Calculation: {calc}</h1>
        </>
    );
}

 ReactDOM.render( <Counter />, document.getElementById('root') );

 */