import React from "react";
import "./App.css";

import UserContainer from "./component/UserContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./component/UserDetails";
import NoMatch from "./component/NoMatch";
const LazyHomePage = React.lazy(() => import("./component/UserContainer"));
// const LazyDetailsPage = React.lazy(() => import("./component/UserDetails"));

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback="loading.....">
              <LazyHomePage />
            </React.Suspense>
          }
        />

        <Route path="/details" element={<UserDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Provider>
  );
}

export default App;
