import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFoo } from "../../features/foo/fooSlice";
import { FaTrashAlt } from "react-icons/fa";

function Card({ foo }) {
  const dispatch = useDispatch();
  return (
    <div className="goal">
      <div>{new Date(foo.createdAt).toLocaleString()}</div>
      <h2>{foo.text}</h2>
      <h2>{foo.text2}</h2>

      <button onClick={() => dispatch(deleteFoo(foo._id))} className="close">
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default Card;
