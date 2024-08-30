export default function CommentsDisplay(props) {
  return (
    <div className="container-fluid bg-success-subtle text-center">
        <div className="row">
            <div className="col-lg-12"><h3>Your Response</h3></div>
        </div>
        <div>
            <hr width="50%" className="mx-auto"/>
        </div>
        <table class="table">
            <tbody>
                <tr className="table-primary">
                <th scope="row">Name : </th>
                <td colSpan="5">{props.details.name}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr className="table-secondary">
                <th scope="row">Email : </th>
                <td colSpan="5">{props.details.email}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr className="table-success">
                <th scope="row">Comments : </th>
                <td colSpan="5">{props.details.comments}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    
  )
}
