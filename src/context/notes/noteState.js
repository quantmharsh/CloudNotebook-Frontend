import React, { useState }  from "react";
import NoteContext from "./noteContext";
import { json } from "react-router-dom";
const NoteState =(props)=>{
const host="http://localhost:3000"
   
   const notesInitial=[]
  
 const [notes, setNotes] = useState(notesInitial)

  //Getting all Notes
  const getNote=async()=>{
    console.log("getting a new note")
    const response= await fetch(`http://localhost:3000/api/notes/fetchallnotes` ,{
      method :'GET',
     
      headers:{
        'Content-Type':'application/json',
        'auth-Token' :localStorage.getItem('token')
      },
    
      
    });
    const json= await response.json();
    console.log(json);
    setNotes(json);
  
   
  
  
   }

   //Add a note: this function will be used to fetch api end point which will add note

  const addNote=async (title ,description ,tag)=>{
  console.log("adding a new note")
  const response= await fetch(`http://localhost:3000/api/notes/addnotes` ,{
    method :'POST',
   
    headers:{
      'Content-Type':'application/json',
      'auth-Token' :localStorage.getItem('token')
    },
  
    body: JSON.stringify({title ,description , tag}) 
  });
  const note=await response.json();
  console.log(note); 
  //updating notes state using setnotes function
    setNotes(notes.concat(note));


 }
   //Edit  a note
   //using fetch api 
   const editNote= async (id ,title ,description ,tag)=>{
      console.log("edit note ");
     //Fetch API 

      const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
        method: "PUT", 
        
        headers: {
          "Content-Type": "application/json",
          "auth-Token":  localStorage.getItem('token')
         
        },
        
        body: JSON.stringify({title ,description ,tag})
      });
      const json = await response.json();
      console.log(json);
      //logic to search for note with id to edit
      //creating a deep copy newnote which will update on frontend without refreshing page
      //doing this because on updating notedsit was getting updated on backend but for frontend 
      //we were needing to refresh page .to solve this problem  creating deepcopy which update on frontend
      let newNnote=JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < newNnote.length; index++) {
        let element=newNnote[index];
        if(newNnote[index]._id===id)
        {
          newNnote[index].tag=tag;
          newNnote[index].title=title;
          newNnote[index].description=description;
        }
        
      }
      setNotes(newNnote);
   }

   //Delete a note
   const deleteNote= async (id)=>{

    const response=await fetch(`${host}/api/notes/deletenotes/${id}`,{
      method :"DELETE",
        headers:{
          "Content-Type":"application/json",
          "auth-Token":localStorage.getItem('token')
        }
    });
    
    console.log("deleting note with id");
    //.filter method is used to filtr search result it will only keep notes with id which is 
    //not same as id we want to delete. if both id matches it delete this
    const newnote=notes.filter((note)=>{ return note._id!=id});
    setNotes(newnote);

   }
   
    return(
    <NoteContext.Provider value ={{notes ,addNote ,editNote  ,deleteNote ,getNote}} >
        {props.children}
    </NoteContext.Provider>
    )
    
}
export default NoteState;
