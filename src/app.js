import React from 'react';
import { hot } from 'react-hot-loader';
import TodoList from "./todos/TodoList";
import './app.css';
import List from "./list.js"
import { useState } from 'react';

const App = () => (

    <div className = "App">
        <TodoList />
    </div>

);

export default hot(module)(App);

/** This the birthdays mini-project
// const [people, setPeople] = useState( [{
//     id: 1,
//     name: 'Bertie Yates',
//     age: 29,
//     image:
//         'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
// }, { id: 2,
//     name: 'Bertie Barty',
//     age: 33,
//     image:
//         'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',}
// ] );
//
// return (
//     <main>
//     <section className='container'>
//         <h3> {people.length} birthdays today</h3>
//         <List people={people}/>
//         <button onClick={()=>setPeople([])}>Clear All</button>
//     </section>
// </main> ); **/
