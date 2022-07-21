import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();
  const redirectToHome = () => history.push("/");

  return (
    <div className="page-not-found-container fill-screen">
      <div className="page-not-found card-background">
        <h1 className="unselectable">?</h1>
        <h2>Sorry!</h2>
        <p>That page is not on the menu yet</p>
        <button className="form-submit-button" onClick={redirectToHome}>
          Find something just as good
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
