function ListGroup() {
  const items = ["A", "B", "C"];

  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>There are no Lists.</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            className="list-group-item"
            onClick={() => console.log("Clicked")}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
