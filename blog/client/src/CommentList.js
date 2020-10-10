import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ postId, postComments }) => {
  // comments are passed now as a props

  // const [comments, setComments] = useState([]);
  // const fetchComments = async () => {
  //   const { data } = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
  //   setComments(data);
  // };
  // useEffect(() => {
  //   fetchComments();
  // }, []);

  const renderedComments = postComments.map(comment => {

    return (
      <li key={comment.id}>
        {comment.content}
      </li>
    )
  });

  return <ul>{renderedComments}</ul>
}