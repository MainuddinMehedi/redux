import { useNavigate } from "react-router-dom";
import AllPosts from "../components/AllPosts";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-center mb-5">
        <h1 className="text-5xl">Home</h1>
      </div>
      <div className="mb-10 flex justify-center">
        <div className="w- space-y-5">
          <p>
            This is about learning Redux. I'm making this project as a practice
            to learn redux properly. To understand its data flow and workflow.
          </p>
          <p>
            Here I'm trying to fetch data from a remote server which is in this
            case obviously a fake data. And trying to add those in a read
            later/reading wishlist and bookmark functionality.
          </p>
          <p>Im also adding a add post functionality here.</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-5xl">Posts:</h1>
          <button
            onClick={() => navigate("/add-post")}
            className="bg-cyan-900 text-white px-7 py-3 cursor-pointer rounded"
          >
            Add Posts.
          </button>
        </div>
        <AllPosts />
      </div>
    </div>
  );
};

export default Home;
