import {  useState, useEffect } from "react";
import { IComments } from "../../common/models";
import apiClient from "../../common/api";
import "./style.css"


const Comments = ({id}:any) => {


  const [comment, setComment] = useState<IComments[]>()

  const getComments = async () => {
    try {
      const res = await apiClient.get<IComments[]>(`comments?postId=${id}`);
      setComment(res.data);
    } catch (e) {
      console.log({ e });
    } 
  };

 

  useEffect(() => {
    getComments()
    console.log(comment);
  },[id]);

  return (
    <div >
    {comment?.map((c) => <div className="comment-block">{c.body}</div>)}
  </div>
  )



};

export default Comments;
