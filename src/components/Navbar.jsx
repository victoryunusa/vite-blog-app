import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Law Blog</h1>
      </Link>
      <div className="links">
        <Link to="/">Posts</Link>
        <Link to="/post/add">Add Post</Link>
      </div>
    </nav>
  );
};

export default Navbar;
