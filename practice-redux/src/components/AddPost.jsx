import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/Posts/postsSlice";

const AddPost = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  // console.log(postTitle);
  // console.log(postBody);

  // this is a way i can send the payload structuring it here or i can send the data from here and structure the payload in the slice.
  // dispatch(
  //   addPost({
  //     id: nanoid(),
  //     postTitle,
  //     postBody,
  //   })
  // );

  const onAddPost = () => {
    if (postTitle && postBody) {
      dispatch(addPost(postTitle, postBody, author));
      setPostTitle("");
      setAuthor("");
      setPostBody("");
    }
  };

  return (
    <section className="border p-10 mb-10 w-1/2 space-y-5">
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
          className="border outline-none p-3 mb-4"
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
          className="border outline-none p-3 mb-4"
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
          className="border outline-none mb-4 p-3"
          onChange={(e) => setPostBody(e.target.value)}
          required
        />

        <button
          type="button"
          className="py-2 border text-lg"
          onClick={onAddPost}
        >
          Add Post
        </button>
      </form>
    </section>
  );
};

export default AddPost;
