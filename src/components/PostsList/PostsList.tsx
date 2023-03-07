import React, { FC, useState } from "react";
import apiClient from "../../common/api";
import { useEffect } from "react";
import { IPost } from "../../common/models";
import "./PostsList.css";
// hook - use

interface IProps {
  onClickPost: (id: number) => void;
}

const PostsList: FC<IProps> = (props) => {
  // const [count, setCount] = useState(0);
  // const [state, setState] = useState({ name: 'test', age: 12 })
  // const changeUserAge = () => {
  //     setState({ ...state, age: state.age + 8 })

  // }
  // console.log({ state })

  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    try {
      const res = await apiClient.get<IPost[]>("/posts");
      setPosts(res.data);
    } catch (e) {
      console.log({ e });
    } finally {
      setIsLoading(false);
    }
  };

  // mount
  useEffect(() => {
    getPosts();

    // const interval = setInterval(() => {
    //   getPosts();
    // }, 3000);

    // return () => {
    //   clearInterval(interval);
    //   alert("Deleted!");
    // };
  }, []);

  //   // updated
  //   useEffect(() => {
  //     console.log({ isLoading });
  //     setIsLoading(true);
  //   }, [posts]);

  //   // updated
  //   useEffect(() => {
  //     console.log({ isLoading });
  //     setIsLoading(true);

  //     // unmounted
  //     return () => {};
  //   }, [isLoading]);

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <button onClick={() => props.onClickPost(post.id)}>View</button>
        </div>
      ))}

      {/* <h1>Count: {count}</h1> */}
      {/* <button onClick={() => {
                setCount(count + 1)
            }}>Plus</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>Minus</button>
            <hr />

            <h2>User: {state.name} {state.age}</h2>
            <button onClick={changeUserAge}>Change Age user</button> */}
    </div>
  );
};

export default PostsList;
