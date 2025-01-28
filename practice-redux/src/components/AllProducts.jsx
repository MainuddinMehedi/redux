import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allPosts, fetchPosts } from "../features/Posts/postsSlice";

const AllProducts = () => {
  const { posts, isLoading, isError, error } = useSelector(allPosts);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log("clicked");
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log(posts.posts?.length);

  if (isLoading) return <h1 className="text-2xl">loading please wait!!</h1>;

  if (!isLoading && isError) return <h1>{error}</h1>;

  if (!isLoading && !isError && posts.posts?.length === 0)
    return <h1>No posts found!!!</h1>;

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mb- ">
      {!isLoading && !isError && posts.posts?.length ? (
        posts.posts.map((item) => (
          <div key={item.id} className="border border-red-900 rounded">
            <div className="p-8 space-y-5">
              <h1 className="text-2xl ">{item.title}</h1>
              <p>{item.body.substring(0, 100)}</p>
              <button
                onClick={handleAddToCart}
                className="py-2 px-3 bg-cyan-800 rounded text-white "
              >
                add to cart
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1>no product found!!</h1>
      )}
    </div>
  );
};

export default AllProducts;
