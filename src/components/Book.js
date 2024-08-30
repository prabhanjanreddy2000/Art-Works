import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import '../styles/book.css'
import Comments from './Comments'
export default function Book(props) {
  const [book,setBook] = useState([])
  axios.get(`https://api.artic.edu/api/v1/artworks/${props.bookId}`)
  .then((res)=>{
    setBook(res.data.data)
  })
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 text-center my-2 p-3 bg-danger-subtle">
          <h4>{book.title}</h4>
        </div>
      </div>
      <div  className="row">
        <div className="col-lg-12">
          <img src={`https://www.artic.edu/iiif/2/${book.image_id}/full/843,/0/default.jpg`} class="card-img-top book-image d-block mx-auto" alt="Book Cover"/>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <table class="table mt-4">
            <tbody>
              <tr className="table-primary">
                <th scope="row">Title :</th>
                <td>{book.title}</td>
              </tr>
              <tr className="table-secondary">
                <th scope="row">Artist :</th>
                <td>{book.artist_display}</td>
              </tr>
              <tr class="table-success">
                <th scope="row">Display date :</th>
                <td colspan="2">{book.date_display}</td>
              </tr>
              <tr class="table-danger">
                <th scope="row">Main reference number :</th>
                <td colspan="2">{book.main_reference_number}</td>
              </tr>
              <tr class="table-warning">
                <th scope="row">Dimensions :</th>
                <td colspan="2">{book.dimensions}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-lg-12">
          <Link to="/" className="btn btn-outline-danger">Back</Link>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Comments setDetails={props.setDetails}/>
        </div>
      </div>
    </div>
  )
}
