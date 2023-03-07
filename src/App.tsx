import { useState } from "react";
import { PostsList, SinglePost } from "./components";
import "./styles.css";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [postId, setPostId] = useState(Number);

  const handleToggle = () => {
    setIsShow(!isShow);
  };

  const onClickPost = (id: number) => {
    setPostId(id);
  };

  return (
    <div className="App">
      <button onClick={handleToggle}>Toggle</button>
      {/* <UserList /> */}
      <h1>{postId}</h1>
      <div className="container">
        <div className="column" style={{ display: isShow ? "block" : "none" }}>
          {isShow && <PostsList onClickPost={onClickPost} />}
        </div>
        <div className="column">
          <SinglePost postId={postId}/>
        </div>
      </div>
    </div>
  );
}

export default App;
