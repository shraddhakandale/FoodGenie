import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./utility/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Working from "./components/Working";
import Layout from "./components/Layout";

function App() {
  return (
    <Provider store={appStore} className="App">
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // <— global layout with header
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "how-it-works",
        element: <Working />,
      },
    ],
  },
]);

export default App;
