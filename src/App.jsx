import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Pages/Home/Index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/home" element={"this is my home route"} />
      <Route path="/" element={<Homepage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
