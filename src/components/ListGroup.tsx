import { useState } from "react";

function ListGroup() {
  const items = ["A", "B", "C"];
  const[selected, SelectedFunction] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>There are no Lists.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={selected == index ? "list-group-item active" : "list-group-item"}
            onClick={() => SelectedFunction(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
