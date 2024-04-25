import {RouterObj} from "./router/RouterInfo";
import {RouterProvider} from "react-router-dom";
import React from "react";

function App() {
  return (
      <RouterProvider router={RouterObj} />
  );
}

export default App;
