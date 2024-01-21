import { useState } from "react";
import { supabase } from "../utils/api";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();

  //State variables
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //Add post function
  const addPost = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("posts").insert({
      title: title,
      content: content,
      author_name: name,
      email: email,
    });
    if (error) {
      console.error(error);
    }

    navigate("/");
  };

  return (
    <div className="create">
      <form>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter your Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="author_name"
            id=""
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" onClick={addPost}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPost;
