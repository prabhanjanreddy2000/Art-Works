import axios from "axios"
import { useEffect, useState } from "react"
import '../styles/listOfBooks.css'
import Pagination from "./Pagination"
import { Link } from "react-router-dom"

export default function ListOfBooks(props) {
    const [link,setLink] = useState("https://api.artic.edu/api/v1/artworks?page=1&limit=10")
    const [pagination,setPagination] = useState({})
    const [listOfBooks,setListOfBooks] = useState([])
    const [search,setSearch] = useState("")
    useEffect(()=>{
      axios.get(link)
      .then((res)=>{
      setPagination(res.data.pagination)
      setListOfBooks(res.data.data)
    })
    },[link])
    var setSearchValue = (e)=>{
      setSearch(e.target.value)
    }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 api-description my-2">
            <p>The Art Institute of Chicago's API provides JSON-formatted data as a REST-style service that allows developers to explore and integrate the museum’s public data into their projects. This API is the same tool that powers our website, our mobile app, and many other technologies in the museum.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 my-2">
            <input type="text" className="form-control" placeholder="Search Books" onChange={setSearchValue} autoFocus/>
          </div>
        </div>
        <div className="row">
          {listOfBooks.filter((book)=>book.title.includes(search)).map((book)=>
            <div className="col-lg-4 col-md-6 my-2">
              <div class="card books mx-auto">
                <img src={`https://www.artic.edu/iiif/2/${book.image_id}/full/843,/0/default.jpg`} class="card-img-top books-image" alt="Book Cover"/>
                <div class="card-body bg-success-subtle">
                  <h5 class="card-title books-title">{book.title}</h5>
                  <Link to={`/id=${book.id}`} class="btn btn-outline-danger" onClick={()=>{
                    props.setBookId(book.id)
                  }}>Get Book</Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Pagination pagination={pagination} setLink={setLink}/>
          </div>
        </div>
      </div>
    </>
  )
}