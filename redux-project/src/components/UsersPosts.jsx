import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UsersPosts = () => {
  const { usersPosts } = useSelector((state) => state.usersPosts);

  console.log(usersPosts);

  return (
    <div>
      <h1 className="text-5xl text-center mb-10">users Posts.</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
        {usersPosts?.length > 0 ? (
          usersPosts.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between p-8 border border-red-900 shadow-xl space-y-3 rounded"
            >
              {/* post body */}
              <div className="space-y-3 h-60 overflow-hidden">
                <h1 className="text-2xl">{item.postTitle}</h1>
                {item.author.length > 0 ? (
                  <p className="text-black/50">Post by - {item.author}</p>
                ) : (
                  <p className="text-black/50">Post by - unknown author</p>
                )}
                {item.postBody.length > 200 ? (
                  <p>
                    {item.postBody.substring(0, 200)}{" "}
                    <Link to={"/post-details"} className="text-cyan-700">
                      see more..
                    </Link>
                  </p>
                ) : (
                  <p>{item.postBody}</p>
                )}
              </div>

              {/* button */}
              <button className="px-5 py-2 bg-cyan-900 text-white rounded cursor-pointer">
                Read More
              </button>
            </div>
          ))
        ) : (
          <h1>no post found!</h1>
        )}
      </div>
    </div>
  );
};

export default UsersPosts;
