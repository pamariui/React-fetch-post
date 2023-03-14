import React, { useState, useEffect } from 'react'
import {getPost} from './utils/api'
import './App.css';
import Post from './components/Post';
import Posts from './components/posts';
import Spinner from './components/Spinner';

function App() {

  const [posts, setPost] = useState(null);

  const getAllPosts = async () => {
    let data = await getPost();
    if(data instanceof Error) {
      console.log(data);
    } else {
      setPost(data);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getAllPosts();
    },5000)
  },[]);
  
  return (
    <div className="App">
      
         <Posts>
         {
          posts ? posts.map(post => (
            <Post key={post.id} title={post.title} body={post.body}/>
          )) : <Spinner style={{backgroundColor: 'red'}}></Spinner>
        }
      </Posts>
    </div>
  );
}



export default App;
