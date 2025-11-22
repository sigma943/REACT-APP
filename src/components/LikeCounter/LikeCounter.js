import { useState, useEffect } from "react";
import "./LikeCounter.css";

function LikeCounter({ title, description, count, color }) {
  const [likes, setLikes] = useState(parseInt(count));
  const counterStyles = {
    color: likes > 5 ? "red" : "black",
  };

  useEffect(() => {
    console.log("use effect odpalony");
    document.title = `${likes} lików dla posta`;
  }, [likes]);

  useEffect(() => {
    console.log("to sie uruchomi tylko raz");
  }, []);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    if (likes < 1) {
      return;
    }
    setLikes(likes - 1);
  };

  return (
    <div className="post" style={{ backgroundColor: color }}>
      <p style={counterStyles}>Liczba lików {likes}</p>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="actions">
        <button onClick={handleLike}>Polub 👍</button>
        <button onClick={handleDislike}>Dislike 👎</button>
      </div>
    </div>
  );
}

export default LikeCounter;
