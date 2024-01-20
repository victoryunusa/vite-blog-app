import { useEffect, useState } from "react";
import ArticlesList from "../components/ArticlesList";
import { supabase } from "../utils/api";

const Posts = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    fetchPosts().catch(console.error);
  }, []);

  const fetchPosts = async () => {
    let { data: posts, error } = await supabase
      .from("posts")
      .select("*")
      .order("id", { ascending: false });
    if (error) console.log("error", error);
    else setPosts({ posts });
  };

  console.log(posts);

  return (
    <div className="home">
      <ArticlesList posts={posts} />
    </div>
  );
};

export default Posts;
