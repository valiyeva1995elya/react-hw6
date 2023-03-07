import { useState, useEffect } from "react";
import { IUser } from "../../common/models";
import apiClient from "../../common/api";



const User = ({userId}:any) => {


  const [user, setUser] = useState<IUser>()

  const getUser = async () => {
    try {
      const res = await apiClient.get<IUser>(`/users/${userId}`);
      setUser(res.data);
    } catch (e) {
      console.log({ e });
    } 
  };

 

  useEffect(() => {
    getUser()
    
  },[userId]);

  return (
    <div >
        <h1>
        {user?.name}
        </h1>
    </div>
  )



};

export default User;
