import React from "react";

const TodoInfos = props => {
  const { infosCount } = props;

  const oneOrMore = nb => {
    return nb === 0 || nb === 1 ? "" : "s";
  };

  return (
    <div className="TodoInfos">
      <h2>
        Vous avez {infosCount} tâche{oneOrMore(infosCount)}
      </h2>
    </div>
  );
};
export default TodoInfos;
