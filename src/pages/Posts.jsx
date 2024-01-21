import { useEffect, useState } from "react";
import SingleArticle from "../components/SingleArticle";
import { supabase } from "../utils/api";

const Posts = () => {
  //Posts State
  const [posts, setPosts] = useState({});
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchPosts().catch(console.error);
  }, []);

  //Fetch all posts from supabase
  const fetchPosts = async () => {
    let { data: posts, error } = await supabase
      .from("posts")
      .select("*")
      .order("id", { ascending: false });
    if (error) console.log("error", error);
    else setPosts({ posts });
  };

  return (
    <div className="home">
      <div className="content">
        <div className="create">
          <input
            type="search"
            placeholder="Search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
          />
        </div>
        {posts?.posts?.map((post) => (
          <div
            key={post.id}
            className={` ${
              post?.title?.toLowerCase().startsWith(inputValue) ||
              post?.author_name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
          >
            <SingleArticle post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
