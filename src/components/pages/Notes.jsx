import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Notes = () => {
    const [notes,setNotes]=useState([]);
    useEffect(()=>{
      getNotes();

    },[])
    const getNotes=async()=>{
        const {data}=await axios.get('http://localhost:5000/notes');
        console.log(data);
        setNotes(data);
    }
    return ( <div>
        {notes.map((note,index)=>(
            <Link to={`/mynote/${note.id}`} key={note.id}>
                {note.body}
                <hr/>
            </Link>
            
        ))}
        <Link to={'/mynote/new'}>add</Link>
    </div> );
}
 
export default Notes;