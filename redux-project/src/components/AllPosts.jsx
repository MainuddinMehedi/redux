import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectAllPosts } from "../features/posts/postsSlice";
import { useEffect } from "react";
import { bookmarkPost } from "../features/bookmark/bookmarksSlice";
import { toast } from "react-toastify";
import {
  addWishlist,
  decrementCount,
  incrementCount,
} from "../features/readingWishlist/readingWishlistsSlice";
import { Link } from "react-router-dom";

const AllPosts = () => {
  const { posts, isLoading, isError, error } = useSelector(selectAllPosts);
  const { bookmarkedPosts } = useSelector((state) => state.bookmarks);
  const { wishlists } = useSelector((state) => state.readingWishlist);

  const dispatch = useDispatch();

  const AllPosts = posts.posts;

  const handleBookmarkClick = (eachPost) => {
    const matchedId = bookmarkedPosts.find((post) => post.id === eachPost.id);
    if (matchedId) {
      toast.warn(`id: ${eachPost.id} was already added`, {
        position: "bottom-right",
      });
    } else {
      dispatch(bookmarkPost(eachPost));
      toast.success(`id: ${eachPost.id} added`, {
        position: "bottom-right",
      });
    }
  };

  const handleWishlistClick = (eachPost) => {
    const wishlisted = wishlists.find((item) => item.id === eachPost.id);
    if (!wishlisted) {
      dispatch(addWishlist(eachPost));
    } else {
      return;
    }
    toast.success(`${wishlisted ? "Count increased" : "wishlist added"}`, {
      position: "bottom-right",
    });
  };

  const onIncreaseCount = (eachPost) => {
    dispatch(incrementCount(eachPost));
    toast.info("Count increased", {
      position: "bottom-right",
    });
  };

  const onDecreaseCount = (eachPost) => {
    const wishlisted = wishlists.find((item) => item.id === eachPost.id);
    dispatch(decrementCount(eachPost));

    {
      wishlisted.count === 1
        ? toast.warn("wishlist deleted!", {
            position: "bottom-right",
          })
        : toast.info("Count decreased", {
            position: "bottom-right",
          });
    }
  };

  // console.log(count, bookmarkedPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoading) return <h1>Loading please wait!!</h1>;

  if (!isLoading && isError) return <h1>{error}</h1>;

  if (!isLoading && !isError && AllPosts?.length === 0)
    return <h1>No post found!</h1>;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
      {AllPosts?.map((eachPost) => (
        <div
          key={eachPost.id}
          className="p-8 flex flex-col justify-between border border-red-900 shadow-xl rounded space-y-4"
        >
          {/* post body */}
          <div className="space-y-4 h-60 overflow-hidden">
            <div>
              <h1 className="text-2xl">{eachPost.title}</h1>
              <p className="bg-cyan-800 text-white max-w-fit rounded-md px-1">
                id: {eachPost.id}
              </p>
            </div>
            {eachPost.body.length > 200 ? (
              <p>
                {eachPost.body.substring(0, 200)}{" "}
                <Link to={"/post-details"} className="text-cyan-700">
                  see more..
                </Link>
              </p>
            ) : (
              <p>{eachPost.body}</p>
            )}
          </div>

          {/* buttons */}
          <div className="flex justify-between">
            <button
              onClick={() => handleBookmarkClick(eachPost)}
              className={`p-2 px-6 border rounded-md shadow hover:shadow-lg ${
                bookmarkedPosts.find((item) => item.id === eachPost.id)
                  ? "bg-black/20 cursor-no-drop"
                  : "bg-amber-50 cursor-pointer"
              }`}
            >
              Bookmark post
            </button>

            {/* for wishlist and addedWishlists */}
            {wishlists.find((item) => item.id === eachPost.id) ? (
              <div className="flex justify-between items-center rounded-md shadow bg-amber-50 hover:shadow-lg">
                <button
                  onClick={() => onDecreaseCount(eachPost)}
                  className="px-2 p-2 cursor-pointer bg-cyan-800 text-white border-r border-r-black max-w-fit rounded-l"
                >
                  -
                </button>
                <span className="bg-cyan-800 text-white px-6 p-2">
                  count:{" "}
                  {wishlists.find((item) => item.id === eachPost.id).count}
                </span>
                <button
                  onClick={() => onIncreaseCount(eachPost)}
                  className="p-2 cursor-pointer bg-cyan-800 text-white max-w-fit border-l border-l-black px-2 rounded-r"
                >
                  +
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleWishlistClick(eachPost)}
                className="p-2 px-6 border rounded-md shadow bg-amber-50 cursor-pointer hover:shadow-lg"
              >
                Add to wishlist
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
