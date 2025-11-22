import { useEffect } from "react";
import { useParams } from "react-router";

function PostDetail() {
  const { id } = useParams();

  useEffect(() => {
    console.log(typeof id);
  }, []);

  return (
    <>
      {id && <h1>POST NR: {id}</h1>}
      {id ? <h1>POST NR: {id}</h1> : <h1>404: BRAK POSTU</h1>}
    </>
  );
}

export default PostDetail;
