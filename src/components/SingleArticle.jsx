import { Link } from "react-router-dom";

const SingleArticle = (post) => {
  console.log(post);
  return (
    <div className="blog-list">
      <div className="blog-preview">
        <Link to={`/post/${post?.post?.id}`}>
          <h2>{post?.post?.title}</h2>
          <p>{post?.post?.content.substring(0, 50) + "..."}</p>
          <p>Written by: {post?.post?.author_name}</p>
        </Link>
      </div>
    </div>
  );
};

export default SingleArticle;
