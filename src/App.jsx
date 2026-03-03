import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout"; // Layout includes Header and handles structure
import Home from "./views/Home"; // Home page
import MyPlants from "./views/MyPlants"; // My Plants page
import About from "./views/About"; // About page

function ErrorPage() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>The page you're looking for is not available.</p>
    </div>
  );
}

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />, // Header will only render once via Layout
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> }, // Default root path -> Home
          { path: "my-plants", element: <MyPlants /> },
          { path: "about", element: <About /> },
        ],
      },
    ],
    {
      basename: "/flowerplant", // Add this line for GitHub Pages base URL
    }
  );

  return <RouterProvider router={router} />;
}

export default App;