import ListOfBooks from "./ListOfBooks";
import Book from "./Book";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import CommentsDisplay from "./CommentsDisplay";

export default function App() {
  const [bookId,setBookId] = useState("")
  const [details,setDetails] = useState({name:"",email:"",comments:""})
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ListOfBooks setBookId={setBookId}/>}></Route>
        <Route path={`/id=${bookId}`} element={<Book bookId={bookId} setDetails={setDetails}/>}></Route>
        <Route path="/comments" element={<CommentsDisplay details={details}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
