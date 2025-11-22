import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LikeCounter from "../components/LikeCounter/LikeCounter";
import { fetchPosts } from "../store/postsSlice";
import "./Posts.css";

function Posts() {
  const dispatch = useDispatch();
  const { posts, error, status } = useSelector((state) => state.news);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <div className="posts-page">
      <h1>LATEST POSTS</h1>

      {status === "loading" && <p className="status-message">Ładowanie...</p>}
      {status === "failed" && <p className="status-message">{error}</p>}

      {status === "succeeded" && (
        <div className="posts-grid">
          {posts.map((post) => (
            <LikeCounter
              key={post.id}
              color=""
              title={post.title}
              description={post.body}
              count="5"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
