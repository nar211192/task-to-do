import React from "react";
import { useSelector } from "react-redux";
import "../index.scss";

export const Cats = () => {
  const { catsList } = useSelector((state) => state.catReducer);
  return (
    <>
      <div className="cats_content">
        {catsList.map((cat) => {
          return (
            <div key={cat.id} className="cat">
              <img src={cat.url} />
            </div>
          );
        })}
      </div>
    </>
  );
};
