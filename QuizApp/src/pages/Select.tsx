import { Link } from "react-router";


function Select() {
  return (
    <>
      <Link to="/">
        <button type="button">Back</button>
      </Link>
      <h1>Select Page</h1>
      <h3>Select a quiz to take here</h3>
    </>
  );
}

export default Select