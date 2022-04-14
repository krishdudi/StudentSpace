import React from 'react'
import {Container, Card} from 'react-bootstrap';
import ReactMarkdown from "react-markdown";

const Viewcard = (props) => {
    // let noteDetails = props;
  return (
    <>
        <Container className="mt-15 view-files">
        {/* <h2 className="my-5 fw-bold text-white">View you entire created note here!</h2> */}
        <Card className="mb-4">
          <Card.Header className="fw-bold my-1 text-black ">{props?.title}</Card.Header>
          <Card.Body>
            <ReactMarkdown className="my-4">{props?.description}</ReactMarkdown>
            <Card.Footer>
              <p>
                Created At:{" "}
                <strong>{props?.time}</strong>
              </p>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default Viewcard