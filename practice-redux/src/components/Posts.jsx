import { useSelector } from "react-redux";
import { allPosts } from "../features/Posts/postsSlice";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const Posts = () => {
  const { addedPosts } = useSelector(allPosts);

  const orderedPosts = addedPosts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  // console.log(addedPosts);

  return (
    <div className="grid grid-cols-2 gap-4 mb-10">
      {orderedPosts?.map((item) => (
        <div key={item.id} className="border border-orange-800 p-10">
          <div className="">
            <h1 className="text-2xl">{item.postTitle}</h1>
            <p>{item.postBody}</p>
            <p>
              {item.author ? (
                <span className="opacity-50">by {item.author}</span>
              ) : (
                <span className="opacity-50">by unknown author</span>
              )}
              <TimeAgo timestamp={item.date} />
            </p>
            <ReactionButtons post={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
