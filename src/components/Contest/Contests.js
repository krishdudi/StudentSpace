import React,{useState, useEffect} from 'react'
import {Container, Spinner} from 'react-bootstrap'
import Card from "./Card"
import './contest.css'
const Contests = () => {
    const [contests, setContests] = useState([]);
    const [loading, setLoading] = useState(false);
    const updateContests = async () =>{
        console.log(contests);
        setLoading(true);
        let url = 'https://kontests.net/api/v1/all';
        let data = await fetch(url);
        let parsedData = await data.json();
        setLoading(false);
        setContests(parsedData);
    }
    useEffect(() => {
        updateContests(); 
        // eslint-disable-next-line
    }, []);
  return (
    <Container className="contest">
        <div className="heading">Upcoming Contests</div>
        <div className="box">
                {contests.map((element) => {
                    if(element?.start_time !== "undefined"){
                        return(<Card name={element?.name} start_time={element.start_time} end_time = {element.end_time} url={element.url} site={element.site} />);
                    }
                })}
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
            </div>
    </Container>
  )
}

export default Contests