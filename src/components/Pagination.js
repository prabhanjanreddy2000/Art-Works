import '../styles/pagination.css'
export default function Pagination(props) {
  var previousPage = ()=>{
    if(props.pagination.current_page==1)
      alert("No previous page available.")
    else
    props.setLink(props.pagination.prev_url)
  }
  var nextPage = ()=>{
    if(props.pagination.current_page==props.pagination.total_pages)
      alert("No next page available.")
    else
    props.setLink(props.pagination.next_url)
  }
  return (
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item" onClick={()=>{props.setLink("https://api.artic.edu/api/v1/artworks?page=1&limit=10")}}><a class="page-link bg-danger text-light prev-button">{`<<`}</a></li>
                <li class="page-item" onClick={previousPage}><a class="page-link bg-danger text-light prev-button">Previous</a></li>
                <li class="page-item"><p class="page-link bg-danger text-light">{props.pagination.current_page}</p></li>
                <li class="page-item" onClick={nextPage}><a class="page-link bg-danger text-light next-button">Next</a></li>
                <li class="page-item" onClick={()=>{props.setLink(`https://api.artic.edu/api/v1/artworks?page=${props.pagination.total_pages}&limit=10`)}}><a class="page-link bg-danger text-light prev-button">{`>>`}</a></li>
            </ul>
        </nav>
    </div>
  )
}
