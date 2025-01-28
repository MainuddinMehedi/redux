import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Bookmarks from "./components/Bookmarks";
import NotFound from "./components/NotFound";
import ReadingWishlist from "./components/ReadingWishlist";
import PostDetails from "./components/PostDetails";
import Home from "./pages/Home";
import Post from "./pages/Post";
import { ToastContainer } from "react-toastify";
import UsersPosts from "./components/UsersPosts";
import AddPosts from "./components/AddPosts";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-11/12 ">
        <Navbar />
        {/* <h1 className="text-4xl font-bold mb-5 text-black/50">hello</h1> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-posts" element={<Post />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/wishlist" element={<ReadingWishlist />} />
          <Route path="/post-details" element={<PostDetails />} />
          <Route path="/add-post" element={<AddPosts />} />
          <Route path="/users-posts" element={<UsersPosts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
