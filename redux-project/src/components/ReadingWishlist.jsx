import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  incrementCount,
} from "../features/readingWishlist/readingWishlistsSlice";

const ReadingWishlist = () => {
  const { wishlists } = useSelector((state) => state.readingWishlist);
  const dispatch = useDispatch();

  console.log(wishlists);

  const handleReadMoreClick = () => {
    console.log("clicked");
  };

  const handleCountIncrement = (item) => {
    dispatch(incrementCount(item));
  };

  const handleCountDecrement = (item) => {
    dispatch(decrementCount(item));
  };

  return (
    <div>
      <div className="flex justify-center mb-10">
        <h1 className="text-5xl font-medium">ReadingWishlist</h1>
      </div>

      <div className="space-y-5">
        {wishlists && wishlists.length > 0 ? (
          wishlists?.map((item) => (
            <div key={item.id} className="border border-red-900 shadow-md rounded">
              <div className="p-5 space-y-4">
                <div>
                  <h1 className="text-2xl">{item.title}</h1>
                  <p className="space-x-2">
                    <span className="bg-cyan-800 text-white max-w-fit rounded-md px-1">
                      id: {item.id}
                    </span>
                    <span className="bg-cyan-800 text-white max-w-fit rounded-md px-1">
                      Quantity: {item.count}
                    </span>
                    <span
                      onClick={() => handleCountDecrement(item)}
                      className="cursor-pointer bg-cyan-800 text-white max-w-fit rounded-md px-2"
                    >
                      -
                    </span>
                    <span
                      onClick={() => handleCountIncrement(item)}
                      className="cursor-pointer bg-cyan-800 text-white max-w-fit rounded-md px-2"
                    >
                      +
                    </span>
                  </p>
                </div>
                <p>{item.body.substring(0, 100)}</p>
                <button
                  onClick={handleReadMoreClick}
                  className="p-2 border rounded-md shadow bg-amber-50 cursor-pointer hover:shadow-lg"
                >
                  Read More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No wishlist reading found. Don't you have any wish to read!?</p>
        )}
      </div>
    </div>
  );
};

export default ReadingWishlist;
