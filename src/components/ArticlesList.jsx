import { Link } from "react-router-dom";

const ArticlesList = (posts) => {
  console.log(posts.posts.posts);
  return (
    <div className="blog-list">
      {posts.posts.posts?.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/post/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.content.substring(0, 50) + "..."}</p>
            <p>Written by {blog.author_name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
