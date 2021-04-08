import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from "./components/Todo Template";
import TodoHead from "./components/Todo Head";
import TodoList from "./components/Todo List";
import TodoCreate from "./components/Todo Create";


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
                <TodoHead/>
                <TodoList/>
                <TodoCreate/>
            </TodoTemplate>
        </>
    );

}

export default App;