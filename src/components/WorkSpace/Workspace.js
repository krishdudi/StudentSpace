import React, { useContext, useEffect, useRef, useState } from 'react';
import fileContext from '../../context/files/fileContext';
import {useNavigate, Link} from 'react-router-dom';
import Noteitem from './Noteitem';
import {Spinner, Row, Container, Button} from 'react-bootstrap';
import './workspace.css'

const Workspace = () => {
    const context = useContext(fileContext);
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { files, fetchNotes } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            setLoading(true);
            fetchNotes();
            setLoading(false);
        }else{
        //     fetchNotes();
            navigate('/login');
        }
        // eslint-disable-next-line
    }, []);
    console.log(files)
  return (
    <>
            {/* <AddNote showAlert={props.showAlert}/> */}
            <Container className="work">
            <Row>
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
            <div className="headd">
                <h2 className="fw-bold mb-4">Welcome! Your WorkSpace</h2>
                <Link to='/addfiles'>
                    <Button variant="primary" className="add-btn">
                        AddFile
                    </Button>
                </Link>
                
            </div>
                
                {files.length===0 ? <strong>No notes to display</strong>  : files.map((note) => {
                    return <Noteitem key={note._id} note={note} />
                })}
                
            </Row>
            </Container>
        </>
  )
}

export default Workspace