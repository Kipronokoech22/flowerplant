import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./views/Home";
import MyPlants from "./views/MyPlants";
import About from "./views/About";

function ErrorPage() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>The page you're looking for is not available.</p>
    </div>
  );
}

function App() {
  // Router setup
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />, 
      children: [
        { index: true, element: <Home /> },
        { path: "my-plants", element: <MyPlants /> },
        { path: "about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;