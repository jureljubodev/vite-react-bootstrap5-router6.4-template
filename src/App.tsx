import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error";
import About from "./routes/about";
import NavbarWrapper from "./components/NavbarWrapper";

// List all the routes that you want, they should be imported from src/routes folder
const router = createBrowserRouter([
  {
    path: "/",
    // NavbarWrapper container <NavigationBar/> and <Outlet/> for children routes
    // Link: https://stackoverflow.com/questions/70833727/using-react-router-v6-i-need-a-navbar-to-permanently-be-there-but-cant-display
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
