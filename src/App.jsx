import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Posts from "./pages/Posts";
import AddPost from "./pages/AddPost";
import Navbar from "./components/Navbar";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Posts />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
