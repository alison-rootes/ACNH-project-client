import React, { useState } from 'react';
import APIURL from '../../helpers/enviornment';
import { useHistory } from 'react-router-dom'
import '../posts/post.css'



const Post = (props) => {
    const history = useHistory()
    const [question, setquestion] = useState("")
    const [discription, setdiscription] = useState("")
    

const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${APIURL}/post`;

    fetch (url, {
        method:'POST',
        body: JSON.stringify({
            question: question ,
            discription: discription,
        }),
        headers: {
            'Content-Type' : 'application/json',
            "Authorization" : props.token,
        },
    })
    .then(res => res.json()).then(json => console.log (json))
}
    return (
        <div className="postBody">
             <form onSubmit={(e) => handleSubmit(e)}>
        <div className="askQuestion">
              
                <input placeholder="Type a question here"
                type="text"
                name="question"
                onChange={(e) => setquestion(e.target.value)}
              />  
            </div>
            <div className="postDiscription">
                <input placeholder="Go ahead and give more detail about your question here. "
                type="discription"
                name="discription"
                onChange={(e) => setdiscription (e.target.value)}
                />
                <input type="submit" />
            </div>
                </form>
    
        </div>
        )
    }


export default Post;