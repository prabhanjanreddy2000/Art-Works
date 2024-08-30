import { useState } from 'react'
import '../styles/comments.css'
import { Link } from 'react-router-dom'
export default function Comments(props) {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [comments,setComments] = useState("")
  return (
    <div>
      <form className="comments-form p-3 my-3">
        <input type="text" className="form-control my-2" placeholder="Enter your name" required onChange={(e)=>{setName(e.target.value)}}/>
        <input type="email" className="form-control my-2" placeholder="Enter your email" required onChange={(e)=>{setEmail(e.target.value)}}/>
        <textarea rows="6" cols="40" className="form-control my-2" required onChange={(e)=>{setComments(e.target.value)}}></textarea>
        <Link to="/comments" onClick={()=>{
          props.setDetails({
            name:name,
            email:email,
            comments:comments
          })
        }}><button className='btn btn-danger'>Submit</button></Link>
      </form>
    </div>
  )
}
