import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reloadCatsList } from "../reducers/catReducer";
import "../index.scss";
import { Link, useParams } from "react-router-dom";

export const Categories = ({ page, limit }) => {
  const { categories } = useSelector((state) => state.catReducer);
  const dispatch = useDispatch();

  let category = useParams();

  function updateCatsByCategory() {
    dispatch(reloadCatsList({ page, limit, category: category.category_id }));
  }

  return (
    <div>
      <div className="navbar">
        <div className="item">
          <Link to="/">Home</Link>
        </div>
        {categories.map((item) => {
          return (
            <div key={item.name} className="item">
              <Link to={`/${item.id}`} onClick={updateCatsByCategory}>
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
