import React from 'react';
import { Route,Switch } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import notes from '../components/pages/Notes';
import note from '../components/pages/Note';

const NoteApp = () => {
    return (
        <MainLayout>
            <Switch>
                <Route path='/' exact component={notes} />
                <Route path='/mynote/:id' component={note} />
            </Switch>
        </MainLayout>
    );
};

export default NoteApp;
