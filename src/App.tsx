import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IPost } from './types/types';
import Post from './components/post/post';

function App() {
  const [posts, setPosts] = useState<IPost[] | any>(null);
  useEffect(() => {
    axios
      .get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      {posts &&
        posts.map((post: IPost) => {
          return <Post post={post} key={post.id}></Post>;
        })}
      <Outlet />
    </>
  );
}

export default App;
