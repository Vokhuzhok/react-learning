import React from "react";
import s from "./Paginator.module.css";

const Paginator = (props) => {
  return (
    <section className={s.pagesNumber}>
      {props.items.map((p) => {
        return (
          <button
            className={props.currentItem === p ? s.selectedPage : undefined}
            onClick={() => {
              props.onItemChanged(p);
            }}
          >
            {p}
          </button>
        );
      })}
    </section>
  );
};

export default Paginator;
