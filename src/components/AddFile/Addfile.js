import React, {useState, useContext} from 'react';
import { Button, Form, Spinner } from "react-bootstrap";
import fileContext from "../../context/files/fileContext";
import {useNavigate} from "react-router-dom";
import './addfile.css'

const Addfile = () => {
    const context = useContext(fileContext);
    const {addFile} = context;
    let navigate = useNavigate();
    const [note, setNote] = useState({title: "", description: ""});
    const [loading, setLoading] = useState(false);
    const handleClick = (e)=>{
        e.preventDefault();
        setLoading(true);
        addFile(note.title, note.description);
        setNote({title:"", description:""});
        setLoading(false);
        navigate('/workspace');
        // props.showAlert("Added successfully", "success");
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name] : e.target.value})
    }
        
    return (
        <>
        <div className="cnt">
                <div className="tit">Add a File</div>
                <Form onSubmit={handleClick}>
                    <div className="field">
                        <input className="inn" type="text" placeholder="Title" value={note.title} onChange={onChange} id="title" name="title" minLength={5} required  />
                
                    </div>
                    <div className="field">
                        <input className="inn" type="textarea"  value={note.description} onChange={onChange} id="description" name="description" placeholder="Description" minLength={5} required/>
                    </div>
                    
                    <Button type="submit" className="buton" onClick={handleClick}>AddNote</Button>
                    {loading && (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                margin: "15px 0",
                                color: "white"
                            }}>
                            <Spinner animation="border" />
                        </div>
                    )}
                </Form>
            </div>
        </>
    )
}

export default Addfile