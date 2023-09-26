import { useState } from "react";

const CommentForm = ({ handleSubmit, submitLabel }) => {
  const [text, setText] = useState("");
  const isTextDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  console.log(handleSubmit);
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        className="w-full outline-none pt-3 pl-1  border-b-2 text-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-end my-2 text-sm font-semibold">
        <button
          className="px-5 bg-blue-500 cursor-pointer rounded-lg py-1"
          onClick={() => setText("")}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 bg-blue-500 cursor-pointer rounded-lg py-1"
          disabled={isTextDisabled}
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
