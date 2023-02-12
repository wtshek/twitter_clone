import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Path } from "##/constants";
import Home from "##/pages/Home";

const router = createBrowserRouter([
  {
    path: Path.HOME,
    element: <Home />,
  },
  {
    path: Path.SEARCH,
    element: <div>Search</div>,
  },
  {
    path: Path.NOTIFICATION,
    element: <div>Notification</div>,
  },
  {
    path: Path.MESSAGE,
    element: <div>Message</div>,
  },
]);

function App() {
  return (
    <div className="bg-dark-background">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
