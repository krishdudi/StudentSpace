import React, {useContext} from "react";
import fileContext from "../../context/files/fileContext";
import { Link } from "react-router-dom";
import { Button, Card, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment"; 

const Noteitems = (props) => {
  // const [show, setShow] = useState(false);
  const context = useContext(fileContext);
  const {deleteFile} = context;
  const { note} = props;
  // const handleShow = () => setShow(true);
  return (
    <>
      <Col md={4}>
        <Card className="mb-4">
          {/* <Card.Header className="fw-bold fs-6">
            <Button variant="outline-success" size="sm" className="fw-bold">
              • {note?.category}
            </Button>
          </Card.Header> */}
          <Card.Body>
            <Card.Title className="fw-bold text-black">{note?.title}</Card.Title>
            <div style={{ minHeight: "30px", color: 'black' }}>
              <ReactMarkdown>{`${note?.description.substr(0, 15)}...`}</ReactMarkdown>
            </div>
            <Link to={`/view/${note?._id}`}>
              <Button variant="primary fw-bold text-white" className="mt-2">
                View
              </Button>
            </Link>

            <Link to={`/update/${note?._id}`}>
              <Button
                variant="secondary fw-bold text-white"
                className="ms-2 mt-2"
                >
                Edit
              </Button>
            </Link>
            {/* <Link to> */}
            <Button
              variant="danger fw-bold"
              className="ms-2 mt-2"
              onClick={()=>{deleteFile(note?._id);}}
              >
              Delete
            </Button>
            {/* </Link> */}
            <div style={{ margin: "10px 0" }}>
              <small className="text-black">
                Created At:{" "}
                <strong className="text-black">
                    {note?.time}
                </strong>
              </small>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Noteitems;
