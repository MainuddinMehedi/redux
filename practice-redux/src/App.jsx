import AddPost from "./components/AddPost";
import AllProducts from "./components/AllProducts";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="flex justify-center items-center my-5">
      <div className="w-5/6">
        <Navbar />
        <h1 className="text-5xl mb-5">Hello!!</h1>
        <AddPost />
        <Posts />
        <AllProducts />
      </div>
    </div>
  );
};

export default App;
