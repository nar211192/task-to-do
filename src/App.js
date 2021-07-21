import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { getCatsList, getCategory } from "./reducers/catReducer";
import { Cats } from "./components/cats";
import { Categories } from "./components/categories";
import { Switch, Route, useParams } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const inputValue = useRef(10);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  let category = useParams();

  useEffect(() => {
    dispatch(getCatsList({ page, limit, category: category.category_id }));
  }, [page, limit]);

  return (
    <div>
      <div>
        <button
          className="btn-btn"
          onClick={() => {
            setPage((prev) => ++prev);
          }}
        >
          +
        </button>
        <div>
          <label>Write Here Limit count</label>
          <input type="number" ref={inputValue} />
          <button
            onClick={() => {
              setLimit(inputValue.current.value);
            }}
          >
            OK
          </button>
        </div>
      </div>
      <Switch>
        <Route path="/:category_id?">
          <Categories page={page} limit={limit} />
          <Cats />
        </Route>
        <Route path="/">
          <Categories page={page} limit={limit} />
          <Cats />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
