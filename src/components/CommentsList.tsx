import React, { useState } from "react";
import useComments from "../hooks/useComments";

const CommentsList = () => {
  const [page, setPage] = useState(1);
  const pageSize = 15;
  const { data: comments, error, isLoading } = useComments({page,pageSize});

  if (isLoading)
    return (
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

  if (error) return <p>{error.message}</p>;

  return (
    <>
    <ul className="list-group">
      {comments?.map((com) => (
        <li key={com.id} className="list-group-item">
          {com.name}
        </li>
      ))}
    </ul>
    <div style={{marginTop:20}}>
    <button onClick={() => setPage(page - 1)} disabled={page === 1} className="btn btn-info">Previous</button>
    <span style={{marginLeft:12, marginRight:12}}>{page}</span>
    <button onClick={() => setPage(page + 1)} className="btn btn-primary">Next</button>
    </div>
    </>

  );
};

export default CommentsList;
