import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoo, reset } from "../../features/foo/fooSlice";
import Card from "../Card/Card";

function Table() {
  const dispatch = useDispatch();
  const { foo, isLoading, isError, message } = useSelector(
    (state) => state.foo
  );

  useEffect(() => {
    dispatch(getFoo());
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);
  return (
    <section className="content">
      {foo.length > 0 ? (
        <div className="goals">
          {foo.map((foo) => (
            <Card key={foo._id} foo={foo} />
          ))}
        </div>
      ) : (
        <h3>You have not set any foo</h3>
      )}
    </section>
  );
}

export default Table;
