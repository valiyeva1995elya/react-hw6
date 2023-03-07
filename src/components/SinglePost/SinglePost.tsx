import { FC, useState, useEffect } from "react";
import { IPost } from "../../common/models";
import apiClient from "../../common/api";
import Comments from "../Comments/Comments"
import User from "../User/User";

interface ISinglePage {
  postId: number,
  
}

const SinglePost: FC<ISinglePage> = ({postId}) => {

  const [post, setPost] = useState<IPost>()

  const getPosts = async () => {
    try {
      const res = await apiClient.get<IPost>(`/posts/${postId}`);
      setPost(res.data);
      
    } catch (e) {
      console.log({ e });
    } 
  };


  useEffect(() => {
    getPosts();


  },[postId]);

  return (
  <div>
    <User userId={post?.userId}/>
    <h4>{post?.title}</h4>
    <Comments id={post?.id}/>
  </div>
  )



};

export default SinglePost;
