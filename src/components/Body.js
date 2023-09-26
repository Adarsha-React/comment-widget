import { useState } from "react";
import { sample } from "../mockdata/sample";
import { createComment as createCommentApi } from "../utils/helper";
import CommentForm from "./CommentForm";

const Body = () => {
  const [backendComments, setBackendComments] = useState(sample);

  const addComment = (text) => {
    const receivedComment = createCommentApi(text);
    setBackendComments([receivedComment, ...backendComments]);
  };

  return (
    <div className="">
      <CommentForm submitLabel="Comment" handleSubmit={addComment} />
      <div>
        {backendComments.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          backendComments?.map((item) => (
            <h1 key={item.id}>{item?.userComment}</h1>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
