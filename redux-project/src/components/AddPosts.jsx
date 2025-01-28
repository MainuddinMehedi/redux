import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../features/posts/usersPostsSlice";
import { toast } from "react-toastify";

const AddPosts = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const { usersPosts } = useSelector((state) => state.usersPosts);

  console.log(usersPosts);

  const onAddPost = () => {
    console.log("add post clicked");
    if (postBody.length === 0 || postTitle.length === 0) {
      toast.error("Fullfil the form properly", {
        position: "bottom-right",
      });
    } else {
      dispatch(addPost(postTitle, author, postBody));
      toast.success("post added", {
        position: "bottom-right",
      });
      setPostTitle("");
      setPostBody("");
      setAuthor("");
    }
  };

  // console.log(postTitle, author, postBody);

  return (
    <div className="flex justify-center ">
      <section className="border p-10 mb-10 w-1/2 space-y-5 rounded">
        <h2 className="text-4xl">Add a New Post</h2>
        <form action="" className="flex flex-col">
          <label htmlFor="postTitle" className="text-2xl">
            Post Title:
          </label>
          <input
            type="text"
            name="postTitle"
            id="postTitle"
            value={postTitle}
            className="border outline-none p-3 mb-4 rounded"
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />
          {/* author name */}
          <label htmlFor="author" className="text-2xl">
            Author Name:
          </label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            className="border outline-none p-3 mb-4 rounded"
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          {/* Post body */}
          <label htmlFor="postBody" className="text-2xl">
            Post Body:
          </label>
          <textarea
            type="text"
            name="postBody"
            id="postBody"
            rows={5}
            value={postBody}
            className="border outline-none mb-4 p-3 rounded"
            onChange={(e) => setPostBody(e.target.value)}
            required
          />

          {console.log("title", postTitle, "body", postBody)}

          <button
            type="button"
            className={`py-2 border text-lg rounded ${
              postTitle.length > 0 && postBody.length > 0
                ? "cursor-pointer"
                : "cursor-no-drop"
            }`}
            // disabled={postTitle.length === 0 || postBody.length === 0}
            onClick={onAddPost}
          >
            Add Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddPosts;
