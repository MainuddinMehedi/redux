import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { count } = useSelector((state) => state.bookmarks);
  const { wishlistsCount } = useSelector((state) => state.readingWishlist);

  // const handleOnClick = () => {

  // }

  return (
    <nav className="py-5">
      <div className="flex justify-between items-center border p-5 rounded">
        <div>
          <NavLink to={"/"}>
            <h1 className="text-3xl cursor-pointer">Redux Project</h1>
          </NavLink>
        </div>
        <div className="">
          <ul className="flex gap-4">
            <li className="py-1.5 px-2 border rounded-md bg-cyan-900 text-white cursor-pointer">
              <NavLink to={"/all-posts"}>All Post</NavLink>
            </li>
            <li className="py-1.5 px-2 border rounded-md bg-cyan-900 text-white cursor-pointer">
              <NavLink to={"/users-posts"}>users posts</NavLink>
            </li>
            <li className="py-1.5 px-2 border rounded-md bg-cyan-900 text-white cursor-pointer">
              <NavLink to={"/bookmarks"}>Bookmarks: {count}</NavLink>
            </li>
            <li className="py-1.5 px-2 border rounded-md bg-cyan-900 text-white cursor-pointer">
              <NavLink to={"/wishlist"}>
                Reading Wishlist: {wishlistsCount}
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <NavLink
            className="py-2.5 px-4 border rounded-md bg-cyan-800 text-white cursor-pointer"
            to={"/add-post"}
          >
            Add Post
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
