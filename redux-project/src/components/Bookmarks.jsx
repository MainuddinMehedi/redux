import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Bookmarks = () => {
  const { bookmarkedPosts } = useSelector((state) => state.bookmarks);

  const navigate = useNavigate();

  console.log(bookmarkedPosts);

  const handleReadMoreClick = () => {
    navigate("/post-details");
  };

  return (
    <div>
      <div className="flex justify-center mb-10">
        <h1 className="text-5xl font-medium">Bookmark Page</h1>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {bookmarkedPosts && bookmarkedPosts.length > 0 ? (
          bookmarkedPosts?.map((post) => (
            <div key={post.id} className="border border-red-900 shadow-md rounded">
              <div className="p-5 space-y-4">
                <div>
                  <h1 className="text-2xl">{post.title}</h1>
                  <p className="bg-cyan-800 text-white max-w-fit rounded-md px-1">
                    id: {post.id}
                  </p>
                </div>
                <p>{post.body.substring(0, 100)}</p>
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
          <h1>
            No bookmarks available. you can go to AllPosts page and make some
            bookmarks
          </h1>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
