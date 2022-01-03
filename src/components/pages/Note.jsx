import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const Note = props => {
    const [note, setNote] = useState(null);
    const noteId = props.match.params.id;
    useEffect(() => {
        getNote();
    }, []);
    const getNote = async () => {
        if (noteId === 'new') return;
        const { data } = await axios.get(`http://localhost:5000/notes/${noteId}`);

        setNote(data);
    };
    const updateNote = async () => {
         await axios.put(`http://localhost:5000/notes/${noteId}`, { ...note, updated: new Date() });
        props.history.push('/');
    };
    const addNote = async () => {
        const { data } = await axios.post('http://localhost:5000/notes/', { ...note, updated: new Date() });
        setNote(data);
        props.history.push('/');
    };
    const deleteNote = async () => {
        const resp = await axios.delete(`http://localhost:5000/notes/${noteId}`);
        console.log(resp, 'del');
        props.history.push('/');
    };
    const onchangeHandler = e => {
        setNote({ ...note, body: e.target.value });
    };
    const onSubmit = () => {
        if (noteId !== 'new') {
            updateNote();
        } else if (noteId === 'new' && note !== null) {
            addNote();
        }
    };
    const onDelete = () => {
        deleteNote();
    };

    return (
        <div>
            <div>
                <span onClick={onSubmit}>back</span>
                <span onClick={onDelete}>delete</span>
            </div>
            <textarea onChange={onchangeHandler} value={note ? note.body : null}></textarea>
        </div>
    );
};

export default Note;
