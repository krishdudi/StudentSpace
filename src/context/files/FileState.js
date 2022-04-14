import React, { useState } from "react";
import FileContext from "./fileContext";
import { BASE_URL } from "../../Api";

const FileState = (props) => {
  const filesInitial = [];
  const [files, setFiles] = useState(filesInitial);
  const fetchNotes = async () => {
    //API call
    const response = await fetch(`${BASE_URL}user/getFiles`, {
      method: "GET",
      headers: {
        // "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      },
    });
    const json = await response.json()
    // console.log(json);
    setFiles(json.files);
  };

  //Add a note
  const addFile = async (title, description) => {
    //API call
    const response = await fetch(`${BASE_URL}user/addFile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      },
      body : JSON.stringify({title, description})
    });
    // const note = await response.json();
  };

//   //Delete Note
  const deleteFile = async (id) => {
    //API call
    console.log(id);
    const response = await fetch(`${BASE_URL}user/removeFile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      },
      body : JSON.stringify({id})
    });
    const json = response.json();
    console.log(json);


    const newNote = files.filter((note) => {
      return note._id !== id;
    });
    setFiles(newNote);
  };

  const viewFile = async (id) => {
    //API call
    console.log(id);
    console.log("files ae - ",files, "  ", files[0]._id , "  ",id.id,"  ",id===files[0]._id);
    let index = files.findIndex((obj) => (obj._id) === id.id);
    console.log(index);
    return files[index];
  };

  // Edit Note
  const editFile = async (id, title, description) => {
     // eslint-disable-next-line
    const response = await fetch(`${BASE_URL}user/updateFile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      },

      body: JSON.stringify({id, title, description}), 
    });

    // let newNotes = JSON.parse(JSON.stringify(notes));
    // for (let index = 0; index < newNotes.length; index++) {
    //   const element = newNotes[index];
    //   if(element._id === id){
    //     newNotes[index].title = title;
    //     newNotes[index].description = description;
    //     newNotes[index].tag = tag;
    //     break;
    //   }
    // }
    // setNotes(newNotes);
  };

  
  return (
    <FileContext.Provider value={{ files, fetchNotes, addFile, deleteFile, viewFile, editFile }}>
      {props.children};
    </FileContext.Provider>
  );
};

export default FileState;
