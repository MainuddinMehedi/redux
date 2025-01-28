import { useDispatch } from "react-redux";
import { addReaction } from "../features/Posts/postsSlice";

const reactionEmojis = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmojis).map(
    ([name, emoji]) => {
      // console.log(emoji);

      return (
        <button
          key={name}
          type="button"
          className="p-2"
          onClick={() =>
            dispatch(addReaction({ postId: post.id, reaction: name }))
          }
        >
          {emoji} {post.reactions[name]}
        </button>
      );
    }
  );

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
