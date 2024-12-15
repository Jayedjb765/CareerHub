import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

const Errorpage = () => {
  const error = useRouteError();
  return (
    <div>
      <h2 className="text-3xl">Opps</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="mb-3">
        <i>{error.statusText || error.message}</i>
      </p>

      <NavLink className="bg-blue-300 p-2 rounded-lg mt-2 text-white" to="/">
        Go Back
      </NavLink>
    </div>
  );
};

export default Errorpage;
