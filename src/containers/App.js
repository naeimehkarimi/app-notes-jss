import React from 'react';
import NoteApp from './NoteApp';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <NoteApp />
        </BrowserRouter>
    );
};

export default App;
