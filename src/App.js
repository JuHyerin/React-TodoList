import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from "./components/Todo Template";
import ToDoHead from "./components/Todo Head";


const GlobalStyle = createGlobalStyle`
        body {
            background: #e9ecef;
        }
    `;
function App() {
    return (
        <>
            <GlobalStyle/>
            <TodoTemplate>
                <ToDoHead/>
            </TodoTemplate>
        </>
    );

}

export default App;