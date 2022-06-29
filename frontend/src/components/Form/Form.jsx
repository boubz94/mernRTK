import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createFoo } from "../../features/foo/fooSlice";

function Form() {
  const [text, setText] = useState({ text: "", text2: "" });
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    dispatch(createFoo({ text }));
    setText("");
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Text 1</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text.text}
            onChange={(e) => setText({ ...text, text: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Text 2</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text.text2}
            onChange={(e) => setText({ ...text, text2: e.target.value })}
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-block">
            Add
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
