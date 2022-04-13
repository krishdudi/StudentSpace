import React , { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Spinner } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import fileContext from "../../context/files/fileContext";

const View = () => {
  const [loading, setLoading] = useState(false);
  const [noteDetails, setNoteDetails] = useState([]);
  const params = useParams();
  const context = useContext(fileContext);
    const {files} = context;
  useEffect(() => {
    let index = files.findIndex((obj) => (obj._id) === params.id);
    setNoteDetails(files[index]);
  }, [params.id]);
  return (
    <>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "15px 0",
          }}>
          <Spinner animation="border" />
        </div>
      )}
      <Container className="mt-15">
        <h2 className="my-5 fw-bold text-white">View you entire created note here!</h2>
        <Card>
          <Card.Header className="fw-bold">{noteDetails?.title}</Card.Header>
          <Card.Body>
            <ReactMarkdown>{noteDetails?.description}</ReactMarkdown>
            <Card.Footer>
              <p>
                Created At:{" "}
                <strong>{noteDetails?.time}</strong>
              </p>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default View;
