import React, {useState, useContext, useEffect} from 'react';
import { Button, Form, Spinner } from "react-bootstrap";
import fileContext from "../../context/files/fileContext";
import {useNavigate, useParams} from "react-router-dom";
import './editfile.css'

const Editfile = () => {
    const context = useContext(fileContext);
    const {files, editFile} = context;
    let navigate = useNavigate();
    const params = useParams();
    const [note, setNote] = useState({title: "", description: ""});
    const [loading, setLoading] = useState(false);
    const handleClick = (e)=>{
        e.preventDefault();
        setLoading(true);
        editFile(params.id, note.title, note.description);
        setNote({title:"", description:""});
        setLoading(false);
        navigate('/workspace');
        // props.showAlert("Added successfully", "success");
    }

    useEffect(() => {
        setLoading(true);
        let index = files.findIndex((obj) => (obj._id) === params.id);
        setNote(files[index]);
        setLoading(false);
    }, [params.id])
    

    const onChange = (e)=>{
        setNote({...note, [e.target.name] : e.target.value})
    }
        
    return (
        <>
        <div className="cnt">
                <div className="tit">Edit the Note</div>
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
                <Form onSubmit={handleClick}>
                    <div className="fie">
                        <input className="inn" type="text" placeholder="Title" value={note.title} onChange={onChange} id="title" name="title" minLength={5} required  />
                
                    </div>
                    <div className="ff">
                        <textarea className="textar" rows={3} cols={31} value={note.description} onChange={onChange} id="description" name="description" placeholder="Description" minLength={5} required/>
                    </div>
                    
                    <Button type="submit" className="buton" onClick={handleClick}>EditNote</Button>
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

export default Editfile