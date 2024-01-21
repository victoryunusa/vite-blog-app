import { useEffect, useState } from "react";
import { supabase } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { validateValues } from "../utils/validation";

const AddPost = () => {
  const navigate = useNavigate();

  //State variables
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  //Add post function
  const addPost = async (e) => {
    e.preventDefault();
    setErrors(validateValues({ title, content, name, email }));
    setIsLoading(true);
    //setIsLoading(false);
  };

  const submitForm = async () => {
    try {
      console.log(errors);

      await supabase.from("posts").insert({
        title: title,
        content: content,
        author_name: name,
        email: email,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isLoading) {
      submitForm();
      setIsLoading(false);
    }
  }, [errors]);

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
          {errors.title ? <p className="errors">Title is required</p> : null}
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
          {errors.content ? (
            <p className="errors">Content is required</p>
          ) : null}
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
          {errors.name ? <p className="errors">Name is required</p> : null}
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
          {errors.email ? <p className="errors">Email is required</p> : null}
        </div>
        <div>
          {/* {isLoading ? (
            <button className="disabled" type="submit" disabled={isLoading}>
              Submiting
            </button>
          ) : (
            <button className="active-button" type="submit" onClick={addPost}>
              Submit
            </button>
          )} */}
          <button className="active-button" type="submit" onClick={addPost}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
