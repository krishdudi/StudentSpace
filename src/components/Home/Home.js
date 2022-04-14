import React, {useState, useEffect, useContext} from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import {BASE_URL} from '../../Api';
// import Allfiles from "../AllFiles/Allfiles";
// import Viewcard from './Viewcard'
// import fileContext from '../../context/files/fileContext';
// import Particle from "../Particle";
// import axios from "axios";


const Home = () => {
  const filesInitial = [];
  const [file, setFile] = useState(filesInitial)
  // const context = useContext(fileContext);
  // const {notes, fetchFiles} = context;
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    // fetchNotes();
    const fetchNotes = async () => {
      //API call
      const response = await fetch(`${BASE_URL}studentspace/getArticles`, {
        method: "GET",
        headers: {
  
        },
      });
      const json = await response.json()
      // console.log(json);
      setFile(json);
      // console.log(typeof(files));
      console.log(json);
      console.log(file);
    };
    fetchNotes();
    setLoading(false);
    console.log(file);
    // eslint-disable-next-line
  },[])
  
  return (
    // <section>
        <Container >
            {/* <Particle /> */}
            {/* {loading && (
                <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "15px 0",
                    color: "white"
                }}>
                <Spinner animation="border" />
                </div>
            )} */}
            {/* <div>{file?.articles[0]}</div> */}
            {/* {file.length===0 ? <strong>No notes to display</strong>  : file.articles.map((note) => {
                    return <Viewcard key={note._id} note={note} />
                })} */}
              {/* <Allfiles/> */}
        </Container>
    // </section>
  )
}

export default Home