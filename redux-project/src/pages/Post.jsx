import AllPosts from "../components/AllPosts";

const Post = () => {
  return (
    <div>
      <div className="flex justify-center mb-10">
        <h1 className="text-5xl font-medium">All Posts Page</h1>
      </div>
      <div>
        <AllPosts />
      </div>
    </div>
  );
};

export default Post;
