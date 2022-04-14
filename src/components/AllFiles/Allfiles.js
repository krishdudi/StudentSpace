import React, {useState, useEffect} from 'react';
import {BASE_URL} from '../../Api'

const Allfiles = () => {
    const filesInitial = [];
  const [file, setFile] = useState(filesInitial)
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
      console.log(typeof(json));
      console.log(json.articles);
      console.log(file);
    };
    fetchNotes();
    setLoading(false);
    console.log(file);
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>dsds</div>
  )
}

export default Allfiles