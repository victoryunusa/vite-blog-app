import { useEffect, useState } from "react";
import { supabase } from "../utils/api";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchPost().catch(console.error);
  }, []);

  const fetchPost = async () => {
    const { data: post, error } = await supabase
      .from("posts")
      .select()
      .eq("id", id);
    if (error) console.log("error", error);
    else setPost(post);
  };

  console.log(post);

  return (
    <div className="content">
      {post?.map((single_post) => (
        <div className="blog-details" key={single_post?.id}>
          <h2 className="">{single_post?.title}</h2>
          <p>Written by: {single_post?.author_name}</p>
          <p>
            Contact:{" "}
            <a
              href={`mailto:${single_post?.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {single_post?.email}
            </a>
          </p>
          <div>
            <p>{single_post?.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostDetail;
